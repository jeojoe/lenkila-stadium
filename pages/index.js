// รายการวันนี้
import React, { Component } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { Layout, DatePickerButton } from '../components';

class Index extends Component {
  state = {
    currentDate: moment(),
  }

  render() {
    return (
      <Layout title="รายการวันนี้">
        <div className="d-flex align-items-center">
          <h5 style={{ margin: '0 10px' }}>รายการของ : </h5>
          <DatePicker
            customInput={<DatePickerButton />}
            selected={this.state.currentDate}
            onChange={currentDate => this.setState({ currentDate })}
          />
          <button
            onClick={() => this.setState({ currentDate: moment() })}
            className="btn btn-outline-info pick-td-btn"
          >
            เลือกวันนี้
          </button>
        </div>
        <style>
          {`
            .top-btn {
              margin-right: 20px;
            }
            .pick-td-btn {
              margin-left: 10px;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;
