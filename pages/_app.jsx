import React from 'react';
import '../styles/reset.css';
import '../styles/main.scss';
import SideBar from '../components/SideBar';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div className="MainWrap">
      <SideBar />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
