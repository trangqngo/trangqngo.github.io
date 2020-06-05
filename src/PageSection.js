import React from 'react';
import {
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
} from '@elastic/eui';

import './PageSection.css';

const PageSection = ({ title, children }) => {
  const titleID = () => title.toLowerCase().split(' ').join('-');

  return (
    <EuiPageContent id={titleID()}>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle size="s" className = "pageSectionTitle">
            <h2>{title}</h2>
          </EuiTitle>
        </EuiPageContentHeaderSection>
      </EuiPageContentHeader>
      {children}
    </EuiPageContent>
  );
};

export default PageSection;
