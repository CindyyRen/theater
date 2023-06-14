import React, { Component } from 'react';
import Film from './Film';
import Cinema from './Cinema';
import Center from './Center';

export default class Tabbar extends Component {
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
    current: this.props.defaultValue,
  };
  componentWillReceiveProps(props) {
    this.setState({
      current: props.current,
    });
  }

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
