import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk'
import statsReducer from './redux/reducers'

import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(statsReducer, composeEnhancers(
    applyMiddleware(thunk)
));

//Dispatch the fetchStats() before our root component renders

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
