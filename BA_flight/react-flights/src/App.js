import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
var cors = require('cors')

console.log("BOB")

function App() {

  $.getJSON('http://aviation-edge.com/v2/public/flights?key=e512c0-465204&limit=2').then(function(response){
    var arrayLength = response.length
    for (var i = 0; i < arrayLength; i++) {
    console.log(response[i].status);
    //Do something
}
    console.log(response.length)

   });

return("dog")
  };

export default App;
