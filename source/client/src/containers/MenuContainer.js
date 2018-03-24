import { connect } from 'react-redux';
// import * as orderbookAction from "../store/actions/appAction";
// import * as orderbookAction from '../store/actions/orderbookAction';

import Menu from '../components/Menu/Menu';

const mapStateToProps = state => ({ ...state });

// const mapDispatchToProps = dispatch => ({
//   // handleSubmitData: (data) => {
//   //   dispatch(orderbookAction.getDataAction(data));
//   // },
//   // handleSubmitTimestamp: (data) => {
//   //   dispatch(orderbookAction.getTimestampAction(data));
//   // },
//   // handleLongNameChanged: (longName) => {
//   //   dispatch(orderbookAction.longNameChangedAction(longName));
//   // },
//   // handleTimestampChanged: (timestamp, isTimestampExist) => {
//   //   dispatch(orderbookAction.timestampChangedAction(timestamp, isTimestampExist));
//   // },
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Menu);
