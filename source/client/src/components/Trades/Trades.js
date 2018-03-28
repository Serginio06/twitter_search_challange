import React, {Component} from "react";
import PropTypes from "prop-types";
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';
import Spinner from "../common/Spinner";
import Alert from "../common/Alert";
import "./trades.scss";
import TradeTable from "./TradeTable";


class Trades extends Component {

    // ********** ACTIONS **********
    searchTweets = () => {
        this.props.searchTweets({
            hashtags: this.props.hashtags,
        });
    };

    // ********** HANDLERS **********
    hashtagChanged = ({target: {value: hashtags}}) => {

        this.props.hashtagChanged(hashtags);
    };

    renderInputs = () => {

        return <div className="demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                <h4 className="display-3">Enter twitter hashtags to search</h4>
            </div>
            <div className="mdl-card__supporting-text">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="sample3"
                           onChange={this.hashtagChanged}/>
                    <label className="mdl-textfield__label">Hashtags</label>
                </div>
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <button type="button"
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
                        onClick={this.searchTweets}>Search
                </button>
                <Alert bootstrapClass={this.props.formAlert.style}
                       msg={this.props.formAlert.msg}
                />
            </div>
        </div>
    };


    renderTables = () => (this.props.tweets.length > 0 &&
        <div className="trades__table">
            <TradeTable
                title={this.props.hashtags}
                tblContent={this.props.tweets}
            />
        </div>
    );


    render() {


        return (

            <div className="trades">
                <Spinner isActive={this.props.isSpinner}/>

                {/*INPUTS*/}
                {this.renderInputs()}

                {/*TABLES*/}
                {this.renderTables()}

            </div>
        );
    }
}


Trades.propTypes = {
    tradesPage: PropTypes.object,
};

export default Trades;