import React from 'react';
import Title from "./Title/Title";

const Layout = props => {
  return (
  <div className="layout">
    <div className="title">
      <Title/>
    </div>
    <main className="layout_content">
      {props.children}
    </main>
  </div>
  );
};

export default Layout;
