import { hot } from 'react-hot-loader/root';
import React from 'react';
// import Modal from '../../components/Modal';
// import moment from 'moment';
// import request from '../../utils/request';

const Root = () => {
  const [count, setCount] = React.useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="app-wrapper">
      <p>Welcome to Chris Moore&apos;s React Base Project :)</p>
      <p>
        Count:
        {count}
      </p>
      <button type="button" onClick={increaseCount}>+1</button>
      <input />
    </div>
  );
};

export default hot(Root);
