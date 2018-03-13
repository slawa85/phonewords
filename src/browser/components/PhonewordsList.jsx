import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    phonewords: store.phonewords
  }
})
export default class PhonewordsList extends Component {
  render() {
    const { phonewords } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          <li className="todo">
            <div className="view">
              <label>ABC</label>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
