import React, { Component } from "react";
import { render } from "react-dom";

import HomeLayout from './layout/Common';
import Phonewords from './components/Phonewords';
import Footer from './components/Footer';

export default class HomePage extends Component {
  render() {
    return (
      <HomeLayout>
        <Phonewords/>
        <Footer/>
      </HomeLayout>
    );
  }
}