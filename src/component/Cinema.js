import React, { Component } from 'react';
import axios from 'axios';

export default class Cinema extends Component {
  state = {
    cinemasList: [],
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
    })
      .then((res) => this.setState({ cinemasList: res.data.data.cinemas }))
      .then(() => console.log(this.state.cinemasList));
  }

  render() {
    return (
      <div>
        <input/>
        {this.state.cinemasList &&
          this.state.cinemasList.map((item) => (
            <dl key={item.id}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          ))}
      </div>
    );
  }
}
