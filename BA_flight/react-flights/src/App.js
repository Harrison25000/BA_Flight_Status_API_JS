import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

console.log("BOB")

function App() {
  console.log("inside")
$(document).ready(function () {
        $.ajax({
            url: "https://api.ba.com/rest-v1/v1/ife/?pagename=xml&when=2014-02-15",
            type: "GET",
            dataType: "json",
            headers: { "client-key": "n76ry9ya3rxvdygzdkuzzvqa" }
        }).then(function(data){
          console.log(data)
        });
    })

  $.getJSON('https://api.ba.com/rest-v1/v1/ife/?pagename=xml&when=2014-02-15').then(function(data){
    console.log("lol")
  });

  };

  export default App;
