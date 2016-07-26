import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import PostContainer from './components/PostContainer';
import AppFooter from './components/AppFooter';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PostContainer />
      </div>
    );
  }
}

export default App;
