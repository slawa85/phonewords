import RPT from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';

import PhonewordsList from './PhonewordsList';
import { fetchPhonewords } from '../actions/phonewordActions';

@connect((store) => {
  return {
    phonewords: store.phonewords.words,
    converted: store.phonewords.converted,
    converting: store.phonewords.converting,
    error: store.phonewords.error
  }
})
export default class Phonewords extends PureComponent {

  static propTypes = {
    phonewords: RPT.array.isRequired,
    converted: RPT.bool,
    converting: RPT.bool,
    error: RPT.string
  }

  fetchPhonewords = () => {
    const number = this.textInput.value;
    if (!number.trim().length)
      return null;

    this.props.dispatch(fetchPhonewords(this.textInput.value));
  }

  render() {
    const { converted, converting, phonewords, error } = this.props;
    const displayWords = (converted && phonewords.length > 0)

    return (
      <div>
        <header className="header">
          <h1>Phonewords</h1>
          <input
            className="new-todo"
            autoFocus
            autoComplete="off"
            placeholder="What needs to be done?"
            ref={(input) => this.textInput = input}
          />
          <button className="button" onClick={this.fetchPhonewords} disabled={converting}>
            {converting ? <i className="fa fa-circle-o-notch fa-spin"></i> : 'Fetch'}
          </button>
        </header>
        { error && <p className="error">{error}</p> }

        {displayWords && <PhonewordsList phonewords={phonewords}/>}
      </div>
    );
  }
}
