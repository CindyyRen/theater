import React, { Component } from 'react';
import axios from 'axios';
import BetterScroll from 'better-scroll';

export default class Cinema extends Component {
  state = {
    cinemasList: [],
    search: '',
    newList: [],
  };
  componentDidMount() {
    // axios.get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6569131')
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6569131',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16865703547105692678750209","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list',
      },
    }).then((res) => {
      this.setState({
        cinemasList: res.data.data.cinemas,
        newList: res.data.data.cinemas,
      });
      new BetterScroll('.cinema-wrapper', {});
    });
  }
  handleSearch = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value }, () => {
      const newList = this.state.cinemasList.filter((c) =>
        c.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
      this.setState({ newList: newList });
      console.log(this.state.search);
    });
  };
  render() {
    return (
      <div>
        <input
          value={this.state.search}
          onChange={this.handleSearch}
          name="search"
        />
        <div
          className="cinema-wrapper"
          style={{
            height: '800px',
            background: 'yellow',
            overflow: 'hidden',
          }}
        >
          <div className="cinemas-content">
            {this.state.newList &&
              this.state.newList.map((item) => (
                <dl key={item.id}>
                  <dt>{item.name}</dt>
                  <dd>{item.address}</dd>
                </dl>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
