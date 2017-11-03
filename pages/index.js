import React, { Component } from 'react';
import { Layout } from '../components';

class Index extends Component {
  state = {
    h: '',
  }
  render() {
    return (
      <Layout>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Lenkila Stadium</a>
        </nav>
        {/* Sidebar */}
        <ul className="nav navbar-light bg-light flex-column">
          <li className="nav-item">
            <a className="nav-link active">รายการวันนี้</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">เติมเงิน / จ่ายเงิน</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">ข้อมูลสนาม</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">ตารางจองสนาม</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">หน้าจัดการสนาม</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Feed / Boost</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">ข้อมูลลูกค้า</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">สต๊อกสินค้า</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">ผลประกอบการธุรกิจ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">การจัดการบัญชีผู้ใช้งาน</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">LENKILA Connect</a>
          </li>
        </ul>
        <style jsx>
          {`
            .nav {
              width: 200px;
              height: 100vh;
              {/* background-color: red; */}
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;
