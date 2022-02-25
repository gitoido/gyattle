import React from 'react';

const Layout: React.FC = ({ children }) => {
  return <main className="mx-auto max-w-[500px]">{children}</main>;
};

export default Layout;
