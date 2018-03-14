import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import { fetchPhonewords } from '../actions/phonewordActions';
import PhonewordsList from './PhonewordsList';

@connect((store) => {
  return {
    phonewords: store.phonewords.words,
    converted: store.phonewords.converted,
    converting: store.phonewords.converting,
    error: store.phonewords.error
  }
})
export default class Phonewords extends PureComponent {

  fetchPhonewords = () => {
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
            type="number"
            className="new-todo"
            autoFocus
            autoComplete="off"
            placeholder="What needs to be done?"
            ref={(input) => this.textInput = input}
            maxLength="5"
          />
          { error && <p className="error">{error}</p> }
          <button className={`button${converting ? ' loading' : ''}`} onClick={this.fetchPhonewords}>Fetch</button>
        </header>

        {displayWords && <PhonewordsList phonewords={phonewords}/>}
      </div>
    );
  }
}
