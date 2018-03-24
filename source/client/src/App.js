import React, { Component } from 'react';
import {  Route } from 'react-router-dom';

// import Enovos from './../resources/icons/view.png';
import './app.scss';
// import Menu from './components/Menu';
import MenuContainer from './containers/MenuContainer';
import TradesContainer from './containers/TradesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="row App-header"/>
        <Route exact path="/" component={MenuContainer} />
        <Route path="/trades" component={TradesContainer} />
      </div>
    );
  }
}

export default App;
