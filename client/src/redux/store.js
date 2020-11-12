import { createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk'
import statsReducer from './reducers'
import { fetchStats } from './actions'

function setupStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(statsReducer, composeEnhancers(
        applyMiddleware(thunk)
    ));

    store.dispatch(fetchStats())
    
    return store;
}

export default setupStore;

