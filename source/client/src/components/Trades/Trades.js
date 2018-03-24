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

	renderTables = () => ( this.props.tradesPage &&
			<div className="table-ts col-xs-offset-1 col-xs-10">
				Some tendered text should be here
			</div>
	);

	render() {

		console.log("this.props=", this.props);

		return (
			<div>
                <Spinner isActive={this.props.isSpinner} />
                <Alert bootstrapClass={this.props.formAlert.style || "alert-info"}
                       msg={this.props.formAlert.msg}
                />
				{/*TABLES*/}
				{this.renderTables()}
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