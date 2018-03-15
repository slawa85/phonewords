import RPT from 'prop-types';
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';

@connect((store) => {
  return {
    phonewords: store.phonewords.words || [],
  }
})
export default class Footer extends Component {
  static propTypes = {
    phonewords: RPT.array.isRequired,
  }

  render() {
    const { phonewords } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">
          {phonewords.length} combinations
        </span>
      </footer>
    );
  }
}