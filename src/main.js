import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app.js';

injectTapEventPlugin();


render((
<MuiThemeProvider>
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
 </MuiThemeProvider>
  ),
  document.getElementById('root')
);
