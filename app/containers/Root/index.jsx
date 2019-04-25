import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
// import Modal from '../../components/Modal';
// import moment from 'moment';
// import request from '../../utils/request';
import configureStore from '../../store';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <div>Hey!</div>
  </Provider>
);

export default hot(Root);
