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

    renderInputs = () => (
        <div className="card">
            <div className="card-header">
                <h5 className='text-primary'>Enter twitter hashtags to search:</h5>
            </div>
            <div className="card-body ">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"
                              id="inputGroup-sizing-default">Hashtags</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default"
                           aria-describedby="inputGroup-sizing-default"
                           onChange={this.hashtagChanged}/>

                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block"
                        onClick={this.searchTweets}>Search
                </button>
            </div>
        </div>
    );

    renderTables = () => (this.props.tweets.length > 0 &&
        <div className="table-ts col-xs-offset-1 col-xs-10">
            <TradeTable
                title={this.props.hashtags}
                tblContent={this.props.tweets}
            />
        </div>
    );


    render() {
        return (

            <div className="jumbotron">
                <Spinner isActive={this.props.isSpinner}/>

                {/*INPUTS*/}
                {this.renderInputs()}

                {/*TABLES*/}
                {this.renderTables()}
                <Alert bootstrapClass={this.props.formAlert.style}
                       msg={this.props.formAlert.msg}
                />
            </div>
        );
    }
}


Trades.propTypes = {
    tradesPage: PropTypes.object,
};

export default Trades;