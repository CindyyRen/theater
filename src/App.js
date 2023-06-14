import './App.css';
import pt from 'prop-types';

import React, { Component } from 'react';
import Tabbar from './component/Tabbar';
import Navbar from './component/Navbar';
export default class App extends Component {
  state = {
    current: 2,
  };
  render() {
    return (
      <div>
        <Navbar
          myevent={() => {
            this.setState({ current: 3 });
          }}
        />
        <Tabbar
          myevent={(index) => {
            this.setState({ current: index });
          }}
          current={this.state.current}
        />
      </div>
    );
  }
}
