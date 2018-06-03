// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
//
// $(document).ready(function() {
//
//   let specialty=$("#searchText");
//   let request = new XMLHttpRequest();
//
//   //let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=wa-seattle,100&skip=2&limit=10&user_key=${process.env.exports.apikey}`;
//   let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&skip=2&limit=10&user_key=${process.env.exports.apikey}`;
//
//
//   console.log(url);
//   request.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       let response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   }
//
//   request.open("GET", url, true);
//   request.send();
//   let getElements = function(response)
//   {
//     console.log(response);
//     if(response.length != 0)
//     {
//       //$('#output').text(`The first name is ${response.data.profile.first_name}`);
//
//     }
//     else
//     {
//
//     }
//   }
// }

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
 $('#searchForm').submit(function(event)
 {
   event.preventDefault();

   console.log("button clicked");
   let request = new XMLHttpRequest();

   let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&skip=2&limit=10&user_key=${process.env.exports.apikey}`;

   request.onreadystatechange = function()
   {
     if (this.readyState === 4 && this.status === 200)
     {

       let response = JSON.parse(this.responseText);
       getElements(response);
     }
   }

   request.open("GET", url, true);
   request.send();


   let getElements = function(response) {
     let firstName=response.data[0].profile.first_name;
     let lastName=response.data[0].profile.last_name;
     //let address=response.data[0].practices[0].website;
     let phoneNumber=response.data[0].profile.phoneNumber;
     //let website=response.data[1].practices[1].website;

     console.log(response.data[0].ratings[0].active);
     if (response.data[0].ratings[0].active===true){
       let patients="Yes";
       $('#patients').text(patients);
     } else{
       let patients="No";
       $('#patients').text(patients);
     }


     console.log(response);

     $('#firstName').text(firstName);
     $('#lastName').text(lastName);
     //$('#address').text("address here");
     $('#phoneNumber').text(phoneNumber);
    // $('#website').text(website);



   }
 });
});
