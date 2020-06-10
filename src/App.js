import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Header';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Artworks from './Artworks';
import Contact from './Contact';

// Other themes are also available - see files at
// node_modules/@elastic/eui/dist/

//import '@elastic/eui/dist/eui_theme_amsterdam_light.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <Header/>
          </ul>
        </nav>

        <Switch>
          <Route path="/aboutme">
            <AboutMe/>
          </Route>
          <Route path="/artworks">
            <Artworks/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>

          //NOTE: switch picks first route so homepage (/) must be last
          <Route path={process.env.PUBLIC_URL + '/'}>
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
