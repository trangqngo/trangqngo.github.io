//colors
const bgColor = "#E1C6C2";
const zoneColor = "#DFAA97";
const gridColor = "#A3B1B9";
const lineColor = "#33636F";

const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//fill in background (paper) color
const fillBackground = (ctx,color) => {
  ctx.rect(0,0,400,400);
  ctx.fillStyle = color;
  ctx.fill();
}

//fill in the drawing zone 
const fillZone = () => {
  ctx.lineWidth = 5;
  ctx.translate(canvas.width/2,canvas.height/2);
  const zone = new Path2D();
  ctx.rotate(105 * Math.PI / 180);
  zone.moveTo(0.5,0.5);
  zone.lineTo(-400,0.5);
  zone.lineTo(-300,-300*Math.tan(-Math.PI/6));
  zone.lineTo(0.5,0.5);
  ctx.fillStyle = zoneColor;
  ctx.fill(zone);

  ctx.resetTransform();
}

//draw grid lines starting from mid horizontal line, clockwise 
//move the matrix origin to center of square 
const drawGrid = () => {
  ctx.translate(canvas.width/2,canvas.height/2);
  ctx.rotate(-45 * Math.PI / 180);
  ctx.lineWidth = 0.3;
  ctx.strokeStyle = gridColor;
  for (let i = 0;i<12;i++) {
    ctx.lineWidth = i/10+0.5;
    ctx.rotate(30 * Math.PI / 180)
    ctx.moveTo(0.5,0.5);
    ctx.lineTo(canvas.width+0.5,0.5);
    ctx.stroke();
  } 
  ctx.resetTransform();
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(canvas.height,canvas.height);
  ctx.stroke();
  
}

fillBackground(ctx,bgColor);
fillZone();
drawGrid(); 

//draw using mouse movement
//reflect across grid lines 
let isDrawing = false;
let x = 0;
let y = 0;
let restore = []; 
let index = -1;

//given a mouse/touch event, return mouse/touch position in array [x,y]
const getPos = e => {
  if (e.type === 'mousedown' || e.type === 'mousemove' || e.type === 'mouseup') {
      return [e.offsetX,e.offsetY];
  } else if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend') {
    var bcr = e.target.getBoundingClientRect();
    var x = e.touches[0].clientX - bcr.x;
    var y = e.touches[0].clientY - bcr.y;
    return [x,y];
  }
}

const start = e => {
  x = getPos(e)[0];
  y = getPos(e)[1];
  isDrawing = true;
};

const draw = e => {
  if (isDrawing === true) {
    drawLine(x, y, getPos(e)[0], getPos(e)[1]);
    x = getPos(e)[0];
    y = getPos(e)[1];
  }
};

const stop = e => {
  if (isDrawing) {
    x = 0;
    y = 0;
    isDrawing = false;
    restore.push(ctx.getImageData(0,0,canvas.width,canvas.height));
    index ++;
  }
};

canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('touchend', stop, false);

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);


const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  let data = ctx.getImageData(x2, y2, 1, 1).data;
  let areaColor = RGBToHex(data[0],data[1],data[2]);
  if (areaColor.toLowerCase() === zoneColor.toLowerCase()) {
    ctx.stroke();
    ctx.closePath();
    //2 diagonals divide square into 4 parts
    //reflections on top part: clockwise, skip drawing zone
    let r1 = reflect(x1-canvas.width/2,canvas.height/2-y1, x2-canvas.width/2,canvas.height/2-y2, -Math.tan(75 * Math.PI/180));
    let r2 = reflect(x1-canvas.width/2,canvas.height/2-y1, x2-canvas.width/2,canvas.height/2-y2, Math.tan(75 * Math.PI/180));
    //right part
    let r3 = reflect(r2[0]-canvas.width/2,canvas.height/2-r2[1],r2[2]-canvas.width/2,canvas.height/2-r2[3],Math.tan(45 * Math.PI/180));
    let r4 = reflect(x1-canvas.width/2,canvas.height/2-y1,x2-canvas.width/2,canvas.height/2-y2,Math.tan(45 * Math.PI/180));
    let r5 = reflect(r1[0]-canvas.width/2,canvas.height/2-r1[1],r1[2]-canvas.width/2,canvas.height/2-r1[3],Math.tan(45 * Math.PI/180));
    //left part
    reflect(r1[0]-canvas.width/2,canvas.height/2-r1[1],r1[2]-canvas.width/2,canvas.height/2-r1[3],-Math.tan(45 * Math.PI/180));
    reflect(x1-canvas.width/2,canvas.height/2-y1,x2-canvas.width/2,canvas.height/2-y2,-Math.tan(45 * Math.PI/180));
    reflect(r2[0]-canvas.width/2,canvas.height/2-r2[1],r2[2]-canvas.width/2,canvas.height/2-r2[3],-Math.tan(45 * Math.PI/180));
    //bottom part
    reflect(r5[0]-canvas.width/2,canvas.height/2-r5[1],r5[2]-canvas.width/2,canvas.height/2-r5[3],-Math.tan(45 * Math.PI/180));
    reflect(r4[0]-canvas.width/2,canvas.height/2-r4[1],r4[2]-canvas.width/2,canvas.height/2-r4[3],-Math.tan(45 * Math.PI/180));
    reflect(r3[0]-canvas.width/2,canvas.height/2-r3[1],r3[2]-canvas.width/2,canvas.height/2-r3[3],-Math.tan(45 * Math.PI/180));
  }
}

// Prevent scrolling when touching the canvas
// source code: https://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html
document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, {passive: false});
document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, {passive: false});

//TOOLS: undo, clear and download design

const clear = document.getElementById('clear');
const clearCanvas = () => {
  fillBackground(ctx,bgColor);
  fillZone();
  drawGrid();
  restore = [];
  index = -1;
}
clear.addEventListener('click', clearCanvas);


const undo = document.getElementById('undo');
undo.addEventListener('click', e => {
  if (index <= 0) {
    clearCanvas();
  } else {
    index--;
    restore.pop();
    ctx.putImageData(restore[index],0,0);
  }
  
});

const download = document.getElementById('download');
download.addEventListener('click', e => {
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});


//FOLDING DEMO INSTRUCTIONS
const foldingDemoLink = document.getElementById("foldingDemoLink");
const foldingDemoModal = document.getElementsByClassName("foldingDemoModal")[0];
const backdrop = document.getElementsByClassName("backdrop")[0];

foldingDemoLink.addEventListener('click', e => {
  foldingDemoModal.style.display = "block";
  backdrop.style.display = "block";
  });

document.addEventListener('click', e => {
  if (e.target.closest(".foldingDemoModal") || e.target.matches(".close")) {
    foldingDemoModal.style.display = "none";
    backdrop.style.display = "none";
  }
});

//PRINT DEMO INSTRUCTIONS 
const printDemoLink = document.getElementById("printDemoLink");
const printDemoModal = document.getElementsByClassName("printDemoModal")[0];

printDemoLink.addEventListener('click', e => {
  printDemoModal.style.display = "block";
  backdrop.style.display = "block";
  });

document.addEventListener('click', e => {
  if (e.target.closest(".printDemoModal") || e.target.matches(".close")) {
    printDemoModal.style.display = "none";
    backdrop.style.display = "none";
  }
});


//HELPER FUNCTIONS:

//given 2 points (x1,y1), (x2,y2) and slope b of line y = bx
//draws line through (newX1,newY1), (newX2,newY2) which are image points of (x1,y1), (x2,y2) through line y=bx
//returns array of [newX1,newY1,newX2,newY2]
const reflect = (x1,y1,x2,y2,b) => {
  let newX1 =  ( x1*(1-b*b)-2*(-b)*(y1) )/(1+b*b) + canvas.width/2;
  let newY1 =  canvas.height/2 - ( y1*(b*b-1)-2*((-b)*x1) )/(1+b*b) ;
  let newX2 =  ( x2*(1-b*b)-2*(-b)*(y2) )/(1+b*b) + canvas.width/2;
  let newY2 =  canvas.height/2 - ( y2*(b*b-1)-2*((-b)*x2) )/(1+b*b) ;
  ctx.moveTo(newX1, newY1);
  ctx.lineTo(newX2, newY2);
  ctx.stroke();
  const res = [newX1, newY1,newX2, newY2];
  return res;
}

//given an array of 3 values (rgb)
//returns a string of hex color value
//source code: https://css-tricks.com/converting-color-spaces-in-javascript/
const RGBToHex = (r,g,b) => {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  return "#" + r + g + b ;;
}






