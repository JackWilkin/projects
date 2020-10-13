import React from 'react';
import ReactDOM from 'react-dom';
import CommandCenter from './CommandCenter';

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<CommandCenter />, wrapper) : false;
