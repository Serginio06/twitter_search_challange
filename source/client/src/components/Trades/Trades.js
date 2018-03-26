import React, {Component} from "react";
import PropTypes from "prop-types";
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';
import Spinner from "../common/Spinner";
import Alert from "../common/Alert";
import "./trades.scss"


class Trades extends Component {

    // ********** ACTIONS **********
    searchTweets = () => {
        this.props.searchTweets({
            hashtags: this.props.hashtags,
        });
    };

    // ********** HANDLERS **********
    hashtagChanged = ({target: {value: hashtags}}) => {
    	this.props.hashtagChanged( );
    };

    renderInputs = () => (this.props.tradesPage &&
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
                           aria-describedby="inputGroup-sizing-default" onChange={this.hashtagChanged}/>

                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.searchTweets}>Search</button>
            </div>
        </div>
    );


    render() {

        console.log("this.props=", this.props);

        return (

            <div className="jumbotron">
                <Spinner isActive={this.props.isSpinner}/>

                {/*INPUTS*/}
                {this.renderInputs()}
                <Alert bootstrapClass={this.props.formAlert.style}
                       msg={this.props.formAlert.msg}
                />
            </div>
        );
    }

    componentDidMount() {
        // init local variables here
    }
}


Trades.propTypes = {
    tradesPage: PropTypes.object,
};

export default Trades;