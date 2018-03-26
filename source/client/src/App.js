import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './app.scss';
import MenuContainer from './containers/MenuContainer';
import TradesContainer from './containers/TradesContainer';
import {getCookie} from "./utils/cookieUtil";
import {logout} from "./utils";

class App extends Component {
    render() {
        let userEmail = getCookie('userEmail');

        return (
            <div className="container">
                <nav
                    className="navbar navbar-light bg-light justify-content-spacebetween align-items-center">
                    <p>You logged with email: <b>{userEmail}</b></p>
                    <button className="btn btn btn-info" onClick={logout}>Logout</button>
                </nav>
                <Route exact path="/" component={MenuContainer}/>
                <Route path="/trades" component={TradesContainer}/>
            </div>
        );
    }
}

export default App;
