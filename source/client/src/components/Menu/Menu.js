import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';

class Menu extends Component {
  render() {
    return (
      <div>
        <Spinner isActive={this.props.isSpinner} />
        <div className="menu-container">
          <Link id="tradesBtn" to="/trades" className="btn btn-default">Trades</Link>
        </div>
      </div>
    );
  }
}

export default Menu;
