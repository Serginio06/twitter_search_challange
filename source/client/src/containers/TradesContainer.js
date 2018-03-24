import { connect } from 'react-redux';
// import * as orderbookAction from "../store/actions/appAction";
import * as tradesAction from '../store/actions/tradesAction';

import Trades from './../components/Trades/Trades';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  handleSubmitData: (data) => {
    dispatch(tradesAction.getDataAction(data));
  },
  // handleSubmitTimestamp: (data) => {
  //   dispatch(tradesAction.getTimestampAction(data));
  // },
  // handleLongNameChanged: (longName) => {
  //   dispatch(tradesAction.longNameChangedAction(longName));
  // },
  // handleTimestampStartChanged: (tsStart) => {
  //   dispatch(tradesAction.timestampStartChangedAction(tsStart));
  // },
  // handleTimestampEndChanged: (tsEnd) => {
  //   dispatch(tradesAction.timestampEndChangedAction(tsEnd));
  // },
  // handleDelyveryAreaChanged: (dlvryAreaId) => {
  //   dispatch(tradesAction.deliveryAreaChangedAction(dlvryAreaId));
  // },
  // handleTypeChanged: (type) => {
  //   dispatch(tradesAction.typeChangedAction(type));
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trades);
