import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
var cors = require('cors')


$.getJSON('https://api.ba.com/rest-v1/v1/ife/?pagename=xml&when=2014-02-15').then(function(data){
  console.log("lol")
});

App.use(cors()) // Use this after the variable declaration

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
