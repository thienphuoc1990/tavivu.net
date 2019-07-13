import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import * as Constants from './constants';
import Routes from './routes/Routes';
import Header from './layouts/public/components/Header/index';
import Footer from './layouts/public/components/Footer/index';

class App extends Component {
  state = {
      data: null,
  }

  componentDidMount() {
      fetch(`${Constants.BE_API_CONFIGS}`)
      .then(res => {
          return res.json();
      }).then(res => {
          this.setState(() => ({ data: res.data }));
      });
  }

  render() {
    return (
      <Router>
        {this.state.data ? <Header data={this.state.data} /> : null}
        <Routes />
        {this.state.data ? <Footer data={this.state.data} /> : null}
      </Router>
    );
  }
}

export default App;
