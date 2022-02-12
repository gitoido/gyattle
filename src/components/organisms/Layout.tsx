import React from 'react';

const Layout: React.FC = ({ children }) => {
  return <div className="mx-auto max-w-[500px]">{children}</div>;
};

export default Layout;
