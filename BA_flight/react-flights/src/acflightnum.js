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
      $('#inc').text('')
      $('#airlineflights').text('')

      //Do the checks here.
      var events = event.target[0].value
      console.log(events)
        var airline = $.getJSON({
          url: 'http://aviation-edge.com/v2/public/flights?key=e512c0-465204&airlineIata=' + events + '&limit=30000',
          async: false
        }).responseJSON;
       console.log(airline)
       var button = document.createElement('button')
       button.setAttribute("id", "airlineflights");
       button.innerHTML = "Click for all airline flights"
       var body = document.getElementsByTagName("body")[0];
       $("#airlineflights").remove();
       body.appendChild(button);
       document.getElementById("airlineflights").addEventListener("click", function(event){
       var i
       for (i = 0; i < airline.length; ++i) {
         var air = airline[i].flight.iataNumber;
             var newElement = document.getElementById('inc');
             newElement.innerHTML += air+" | ";
             document.body.appendChild(newElement);
           };
         })

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
       if(airline[i].flight.iataNumber.includes(evt)){
       $('#airlinestuff').text(airline[i].flight.iataNumber)
       var status = document.getElementById('airlinestuff');
       status.innerHTML += "<div id='statusadd' style='color:green'> "+airline[i].status+"</div>"
       var lat = airline[i].geography.latitude
       var long = airline[i].geography.longitude
       console.log(lat)
       console.log(long)

       var response = $.getJSON({
         url: 'https://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + long + '&key=1871f694a9aa40849be15b44d02c291e&pretty=1',
         async: false
       }).responseJSON;
       console.log(response.results.length)
       if(response.results.length == 0)
       {
       status.innerHTML += '<br>Current location: undefined'
       }
       else{status.innerHTML += '<br>Current location: '+response.results[0].components.country}

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

};
}
});
})
})
return null
};





  export default Include;
