import './App.css';


import React, { Component } from 'react';
import Film from './component/Film';
import Cinema from './component/Cinema';
import Center from './component/Center';

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: '电影',
      },
      {
        id: 2,
        text: '影院',
      },
      {
        id: 3,
        text: '我的',
      },
    ],
    current: 0,
  };

  render() {
    return (
      <div>
        {this.state.current === 0 ? (
          <Film />
        ) : this.state.current === 1 ? (
          <Cinema />
        ) : (
          <Center />
        )}
        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.current === index ? 'active' : ''}
              onClick={() => this.setState({ current: index })}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
