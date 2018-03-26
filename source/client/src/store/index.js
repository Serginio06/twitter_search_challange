import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';
import * as tradesAction from './actions/tradesAction';

import initState from './initState';

import app from './reducers/appReducer';
import trades from './reducers/tradesReducer';
import {ACTION_APP_DATA_ERROR} from "./actions/tradesAction";
import {ACTION_APP_SERVER_ERROR} from "./actions/tradesAction";

const middleware = [thunk];

//TODO(seiv): uncomment for development
// if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development') {
//   middleware.push(createLogger());
// }

function combinedReducer(state = initState, action) {
  switch (action.type) {
    case tradesAction.ACTION_APP_SPINNER_START: return app(state, action);
    case tradesAction.ACTION_HASHTAGS_CHANGE: return trades(state, action);
    case tradesAction.ACTION_APP_DATA_ERROR: return trades(state, action);
    case tradesAction.ACTION_APP_SERVER_ERROR: return trades(state, action);
    case tradesAction.ACTION_GET_TWEETS: return trades(state, action);
    case tradesAction.ACTION_GET_TWEETS_RETURN_EMPTY: return trades(state, action);

    default:
      console.error(`Unhandled action! ${action.type}`);
      return state;
  }
}

const store = createStore(
  combinedReducer,
  applyMiddleware(...middleware)
  ,
  autoRehydrate(),
);

persistStore(store, {
  whitelist: ['auth'],
}, () => {
});// .purgeAll();

export default store;
