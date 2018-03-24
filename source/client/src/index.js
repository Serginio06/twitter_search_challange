import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, HashRouter } from 'react-router-dom';
import store from './store';
import App from './App';
// require("./../style/common.scss");


ReactDOM.render(
  (
    <div>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <App />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  ), document.getElementById('root'),
);

