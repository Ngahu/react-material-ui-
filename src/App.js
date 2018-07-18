import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header,Footer } from './components/layouts';
import Body from './components/logic/Body';




class App extends Component {
  render() {
    return (
      <Fragment>

        <Header/>

        <Body/>

       

        
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
