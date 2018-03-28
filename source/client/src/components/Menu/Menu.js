import React, {Component} from 'react';
import "./menu.scss";
import Spinner from "../common/Spinner";
import Link from "react-router-dom/es/Link";


class Menu extends Component {
    render() {

        const welcomeImg = require('./../../../resources/images/twitterWelcome.jpg');


        return (


            <div className="demo-card-wide mdl-card mdl-shadow--2dp" >
                <Spinner isActive={this.props.isSpinner}/>
                <div className="mdl-card__title" style={{backgroundImage: `url(${welcomeImg})`}}>
                    <h2 className="mdl-card__title-text">Welcome</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <h5>This is application allow you to search by Twitter hashtags</h5>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link id="tradesBtn" to="/trades" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Get Started</Link>
                </div>
            </div>
        )
    }
}

export default Menu;
