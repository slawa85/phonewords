import React, { Component } from "react";
import { render } from "react-dom";

export default class PhonewordsList extends Component {

  static propTypes = {
    phonewords: RPT.array.isRequired,
  };

  render() {
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