import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppComponent from './App';
import TestComponent from './Test';
import MainSettingTextColorComponent from './SettingTextColor/main.js';
import MainFormComponent from './Form/main.js';
import MainJobsComponent from './Jobs/main.js';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = <h1>Hello, {formatName(user)}!</h1>;

// function tick() {
//   ReactDOM.render(<AppComponent />, document.getElementById('root'));
// }

// setInterval(tick, 1000);

ReactDOM.render(<MainJobsComponent />, document.getElementById('root'));
