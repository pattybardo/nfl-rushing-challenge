import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux';
import statsReducer from "./redux/reducers";
import { fetchStats} from './redux/actions'

import thunk from 'redux-thunk'
import stats from './redux/reducers'

import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(stats, composeEnhancers(
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
