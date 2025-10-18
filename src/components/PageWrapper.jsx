import React from 'react';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageWrapper;
