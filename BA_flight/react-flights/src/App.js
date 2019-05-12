import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
var cors = require('cors')

console.log("BOB")

function App() {
  console.log("inside")
  $.ajaxSetup({
    headers : {
      'client-key' : 'n76ry9ya3rxvdygzdkuzzvqa'
    }
  });
  $.getJSON('https://api.ba.com/rest-v1/v1/flights;departureLocation=LHR', function(json) { console.log("Success"); });

return("dog")
  };

export default App;
