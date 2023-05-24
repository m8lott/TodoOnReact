import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';
import './index.css';
import Home from './screens/Home/home'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
 <Home />
 </Layout>
  </React.StrictMode>
);


