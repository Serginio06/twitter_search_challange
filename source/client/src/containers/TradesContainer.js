import { connect } from 'react-redux';
import * as tradesAction from '../store/actions/tradesAction';

import Trades from './../components/Trades/Trades';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  searchTweets: (data) => {
    dispatch(tradesAction.getDataAction(data));
  },
    hashtagChanged: (value) => {
    dispatch(tradesAction.hashtagChangedAction(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trades);
