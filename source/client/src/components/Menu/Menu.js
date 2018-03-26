import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../common/Spinner';


class Menu extends Component {
    render() {


        return (
            <div className="jumbotron">
                <Spinner isActive={this.props.isSpinner}/>
                <h3>This is application allow you to search by Twitter hashtags</h3>

                    <div className="menu-container">
                        <Link id="tradesBtn" to="/trades" className="btn btn-primary">Go to
                            Search</Link>
                    </div>
            </div>
        );
    }
}

export default Menu;
