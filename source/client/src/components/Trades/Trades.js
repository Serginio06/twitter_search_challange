import React, {Component} from "react";
import PropTypes from "prop-types";
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';
import Spinner from "../common/Spinner";
import Alert from "../common/Alert";
import "./trades.scss"


class Trades extends Component {

    // ********** ACTIONS **********
    submitData = () => {
        this.props.handleSubmitData({
            longName: this.props.tradesPage.longName,
        });
    };

    // ********** HANDLERS **********
    // longNameChanged = ({target: {value: longName}}) => {
    // 	this.props.handleLongNameChanged(longName);
    // };

    renderInputs = () => (this.props.tradesPage &&
        <div className="card">
            <div className="card-header">
                <h5 className='text-primary'>Enter twitter hashtags to search:</h5>
            </div>
            <div className="card-body ">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"
                              id="inputGroup-sizing-default">Hastags</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>
        </div>
    );


    render() {

        console.log("this.props=", this.props);

        return (

            <div className="jumbotron">
                <Spinner isActive={this.props.isSpinner}/>
                {/*<h1 className="display-5">Hello, world!</h1>*/}
                {/*<hr className="my-4"/>*/}

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