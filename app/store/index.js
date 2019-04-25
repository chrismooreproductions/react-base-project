/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import * as actionCreators from './actions';

export default function configureStore(preloadedState) {
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators, serialize: true, trace: true });
  if (!enhancer) {
    console.warn('Install Redux DevTools Extension to inspect the app state: '
      + 'https://github.com/zalmoxisus/redux-devtools-extension#installation');
  }

  const store = createStore(rootReducer, preloadedState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }

  return store;
}
