import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloStudent from './components/HelloStudent';

ReactDOM.render(
  <React.StrictMode>
    <>
    <HelloStudent name="React Application" />
    <HelloStudent name="Redux" />
    <HelloStudent name="React Router" />

    </>
  </React.StrictMode>,
  document.getElementById('root')
);

