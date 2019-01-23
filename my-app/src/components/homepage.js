import React, { Component } from 'react';
import Navigation from './navigation';
import Main from './main';
import Footer from './footer';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Homepage;