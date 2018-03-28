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
            <div
                className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
                <header
                    className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Twitter search app</span>
                        <div className="mdl-layout-spacer"/>
                        <span className="mdl-layout-title logged">You logged in: <b>{userEmail}</b></span>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={logout}>Logout</button>

                    </div>
                </header>
                <div className="demo-ribbon"/>
                <main className="demo-main mdl-layout__content">
                    <div className="demo-container mdl-grid">
                        <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--12-col">
                            <Route exact path="/" component={MenuContainer}/>
                            <Route path="/trades" component={TradesContainer}/>
                        </div>
                    </div>
                </main>
                <footer className="demo-footer mdl-mini-footer">
                    <div className="mdl-mini-footer--left-section">
                        <ul className="mdl-mini-footer--link-list">
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Privacy and Terms</a></li>
                            <li><a href="#">User Agreement</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default App;
