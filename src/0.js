import React, { Component } from 'react';

export default class Prop extends Component {
  state = {
    count: 0,
  };

handleClick = () => {
  this.setState({ count: this.state.count + 1 }, () =>
    console.log(this.state.count)
  );
  this.setState({ count: this.state.count + 1 }, () =>
    console.log(this.state.count)
  );
  this.setState({ count: this.state.count + 1 }, () =>
    console.log(this.state.count)
  );
};



  render() {
    console.log('render:', this.state.count);
    return (
      <div>
        {this.state.count} <button onClick={this.handleClick}>plus</button>
      </div>
    );
  }
}


