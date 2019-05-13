import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Airline';
import Country from './Country';
import FlightNumbers from './FlightNumbers';
import Include from './acflightnum';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
var cors = require('cors')

// App.use(cors()) // Use this after the variable declaration

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Country />, document.getElementById('country'));
ReactDOM.render(<FlightNumbers />, document.getElementById('fn'));
ReactDOM.render(<Include />, document.getElementById('inc'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
