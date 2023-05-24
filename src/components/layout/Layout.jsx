import React from 'react';

const Layout = ({children}) => {
  return <div style={{backgroundColor:'gray',minHeight:'100vh',paddingTop:30,paddingLeft:50}}>
{children}
  </div>
}

export default Layout