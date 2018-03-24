import * as tradesAction from './../actions/tradesAction';
// import * as constants from './../../constants';

export default (state, action) => {
  const {
    tradesPage,
    formAlert = {
      style: '',
      msg: '',
    },
  } = action.payload;

  switch (action.type) {


    case tradesAction.ACTION_TRADES_GET_DATA:
      return {
        ...state,
        tradesPage,
          formAlert,
        isSpinner: false,
      };
    case tradesAction.ACTION_APP_SPINNER_START:
      return {
        ...state,
        isSpinner: true,
      };

    default:
      return state;
  }
};
