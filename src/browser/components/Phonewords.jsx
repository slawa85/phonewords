import React, { Component } from "react";
import { render } from "react-dom";

export default class Phonewords extends Component {
  render() {
    return (
      <header className="header">
        <h1>Phonewords</h1>
        <input className="new-todo" autoFocus autoComplete="off"
          placeholder="What needs to be done?"/>
        <button className="button">Fetch</button>
      </header>
    );
  }
}