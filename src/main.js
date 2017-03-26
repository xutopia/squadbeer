import React from 'react';
import ReduxPromise from 'redux-promise';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
// import { Router, hashHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import routes from './routes';
import App from './app';

injectTapEventPlugin();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(ReduxPromise, logger)
  )
);

render((
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  ),
  document.getElementById('root')
);
