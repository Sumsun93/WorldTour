/*
 * Package Import
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/*
 * Local Import
 */
import App from 'src/containers/App';
import store from 'src/store';

/*
 * Code
 */
const provider = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

/*
 * Render
 */
document.addEventListener('DOMContentLoaded', () => {
  render(provider, document.getElementById('root'));
});
