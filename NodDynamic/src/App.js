import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/navbar';

import Home from './components/home';
import Search from './components/search';
import ContactUs from './components/contactus';

import FooterBar from './components/footerbar';



class App extends Component {
  render() {
    return (
      <div className='container'>
        
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/contact' component={ContactUs} />
        </Switch>

        <FooterBar />

      </div>
    );
  }
}

export default App;
