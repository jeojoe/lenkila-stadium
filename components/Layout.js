import React, { Component } from 'react';
import Head from 'next/head';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Lenkila : ระบบจัดการสนาม</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
    </Head>
    {children}
  </div>
);

export default Layout;
