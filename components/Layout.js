import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title = 'ระบบจัดการสนาม' }) => (
  <div className="root">
    <Head>
      <title>{`Lenkila : ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
    </Head>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Lenkila Stadium</a>
    </nav>
    <div className="content d-flex flex-row">
      
      {/* Sidebar */}
      <ul className="nav navbar-light bg-light flex-column">
        <li className="nav-item">
          <a className="nav-link active">รายการวันนี้</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">เติมเงิน / จ่ายเงิน</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">ตารางจองสนาม</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">หน้าจัดการสนาม</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">ข้อมูลลูกค้า</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">การจัดการบัญชีผู้ใช้งาน</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">LENKILA Connect</a>
        </li>
      </ul>

      {/* Page */}
      <div className="page">
        {children}sdfsdf
      </div>
    </div>
    <style jsx>
      {`
        .nav {
          width: 200px;
          height: 100vh;
          .nav-item {
            transition: all 0.2s;
          }
        }
        .page {
          width: calc(100% - 200px);
        }
        .root {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
      `}
    </style>
    <style jsx global>{`
      * {
        font-family: 'Kanit', sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
