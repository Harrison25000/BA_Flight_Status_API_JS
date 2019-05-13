import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
var cors = require('cors')

function FlightNumbers() {
$(document).ready(function() {
document.getElementById("flightnumber").addEventListener("submit", function(event){
 //Stops the form submitting.
  event.preventDefault();

  //Do the checks here.
  var evt = event.target[0].value
  console.log(evt)
    var flightnum = $.getJSON({
      url: 'http://aviation-edge.com/v2/public/flights?key=e512c0-465204&flightNum='+evt+'&limit=3',
      async: false
    }).responseJSON;
   console.log(flightnum)


});
});
return "bob"
};

export default FlightNumbers
