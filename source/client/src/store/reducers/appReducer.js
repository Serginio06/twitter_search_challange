// import * as orderbookAction from './../actions/orderbookAction';
// import * as orderbookActions from '../actions/orderbookAction';
// import * as constants from '../../constants';
import * as tradesAction from '../actions/tradesAction';

export default (state, action) => {
  switch (action.type) {
    case tradesAction.ACTION_APP_SPINNER_START:
      return {
        ...state,
        isSpinner: true,
      };

    default:
      return state;
  }
};
