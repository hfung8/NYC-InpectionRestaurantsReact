import logo from './logo.svg';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import Map from "./components/Map";


class App extends Component {
  state = {
    incidents: [],
  }
  async componentDidMount() {
    const res = await axios.get('https://data.sfgov.org/resource/wr8u-xric.json', {
      params: {
        "$limit": 500,
        "$$app_token": "iZy23vA379aVXDqSh9srcPmI4"
      }
    })
    const incidents = res.data;
    this.setState({incidents: incidents });
  };



  render() {
    return (
      <Map incidents={this.state.incidents} />
    );
  }
 }
 export default App;
