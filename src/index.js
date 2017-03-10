import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Router, browserHistory } from 'react-router';


import routes from './routes.js';
import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

export const store = createStore(
                            reducers,
                            compose(
                              applyMiddleware(ReduxPromise, thunk),
                              autoRehydrate()//,
                            //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                            )
                          );

persistStore(store, {blacklist: ['form']});





ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
