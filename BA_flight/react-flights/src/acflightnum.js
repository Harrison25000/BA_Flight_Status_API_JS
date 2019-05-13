import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
var cors = require('cors')

function Include() {
    $(document).ready(function() {
    document.getElementById("airline").addEventListener("submit", function(event){
     //Stops the form submitting.
      event.preventDefault();

      //Do the checks here.
      var events = event.target[0].value
      console.log(events)
        var airline = $.getJSON({
          url: 'http://aviation-edge.com/v2/public/flights?key=e512c0-465204&airlineIata=' + events + '&limit=30000',
          async: false
        }).responseJSON;
       console.log(airline)
       var i
       for (i = 0; i < airline.length; ++i) {
         var air = airline[i].flight.iataNumber;
             var newElement = document.createElement('div');
             newElement.id = air; newElement.className = "plane";
             newElement.innerHTML = air;
             document.body.appendChild(newElement);
           };

     document.getElementById("includes").addEventListener("submit", function(event){
   //Stops the form submitting.
    event.preventDefault();

    //Do the checks here.
    var evt = event.target[0].value
    console.log("wow")
    console.log(airline)
    console.log(evt)

  var i
  for (i = 0; i < airline.length; ++i) {
      // do something with `substr[i]`}
       if(airline[i].flight.iataNumber.includes(evt))
       {console.log(airline[i])}
       else {console.log('weak')}
     }

//       var flightnum = $.getJSON({
//         url: 'http://aviation-edge.com/v2/public/flights?key=e512c0-465204&limit=30000',
//         async: false
//       }).responseJSON;
//       console.log('cool')
//       var i;
// for (i = 0; i < flightnum.length; ++i) {
//     // do something with `substr[i]`}
//      if(flightnum[i].flight.iataNumber.includes(evt))
//      {console.log(flightnum)}
//      else {console.log('weak')}
//    }
//
//

});
},
)
});
return null
};




  export default Include;
