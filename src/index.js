import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './components/HelloWorld';
import HelloStudent from './components/HelloStudent';
import HelloWarren from './components/HelloWarren';



ReactDOM.render(
  <React.StrictMode>
<>
    <h1> React GIT branch Merge Practice </h1>
    <HelloWorld />
    <HelloStudent name="React Application" />
    <HelloStudent name="Redux" />
    <HelloStudent name="React Router" />
    <HelloWarren />

</>
  </React.StrictMode>,
  document.getElementById('root')
);

