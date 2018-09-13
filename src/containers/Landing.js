import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainContent />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Landing;