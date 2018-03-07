import React, { Component } from "react";
import { render } from "react-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          100 combinations
        </span>
      </footer>
    );
  }
}