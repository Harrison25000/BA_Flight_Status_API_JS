import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
var cors = require('cors')

//  / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
function App() {
  $(document).ready(function() {
  document.getElementById("airline").addEventListener("submit", function(event){
   //Stops the form submitting.
    event.preventDefault();

    //Do the checks here.
    var evt = event.target[0].value
    console.log(evt)
      var flightnum = $.getJSON({
        url: 'http://aviation-edge.com/v2/public/flights?key=e512c0-465204&airlineIata=' + evt + '&limit=3',
        async: false
      }).responseJSON;
     console.log(flightnum)


  });
  });
  return null
  };
  // geolocation api key = 1871f694a9aa40849be15b44d02c291e

export default App
