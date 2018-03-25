import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import {getCookie} from "../../utils/cookieUtil";

class Menu extends Component {
  render() {

      // document.cookie = 'asdfd';
      // let cookie = document.cookie;
      let userEmail = getCookie('userEmail');


    return (
      <div>
        <Spinner isActive={this.props.isSpinner} />
        <div className="menu-container">
          <Link id="tradesBtn" to="/trades" className="btn btn-default">Trades</Link>
            <p>userEmail: {userEmail}</p>
        </div>
      </div>
    );
  }
}

export default Menu;
