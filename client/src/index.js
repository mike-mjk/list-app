import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Hello } from './hello';
import './index.css';

ReactDOM.render(
  // <App />,
  <Hello compiler='a' framework='b' />,
  document.getElementById('root')
);
