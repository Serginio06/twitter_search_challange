import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';
import * as tradesAction from './actions/tradesAction';

import initState from './initState';

import app from './reducers/appReducer';
import trades from './reducers/tradesReducer';

const middleware = [thunk];

//TODO(seiv): change in global package.json scripts
if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

function combinedReducer(state = initState, action) {
  switch (action.type) {
    case tradesAction.ACTION_APP_SPINNER_START: return app(state, action);
    case tradesAction.ACTION_TRADES_GET_DATA: return trades(state, action);

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
  // store.dispatch(orderbookAction.getTimestampAction());
  // store.dispatch(orderbookErrorAction.getTimestampAction());
});// .purgeAll();

export default store;
