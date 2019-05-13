import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
var cors = require('cors')

function Country(){
  var value = $.getJSON({
     url: 'http://aviation-edge.com/v2/public/flights?key=e512c0-465204&airlineIata=BA&limit=1',
     async: false
  }).responseJSON;
  var lat = value[0].geography.latitude
  var long = value[0].geography.longitude

  var response = $.getJSON({
    url: 'https://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + long + '&key=1871f694a9aa40849be15b44d02c291e&pretty=1',
    async: false
  }).responseJSON;
  return(response.results[0].components.country)
 };

   // geolocation api key = 1871f694a9aa40849be15b44d02c291e

 export default Country
