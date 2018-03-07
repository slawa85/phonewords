import React, { PureComponent as Component } from 'react';
import RPT from 'prop-types';

export default class CommonLayout extends Component {

  static propTypes = {
    children: RPT.any,
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}
