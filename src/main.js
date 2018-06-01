import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  let specialty=$("#searchText");
  let request = new XMLHttpRequest();

  let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=wa-seattle,100&skip=2&limit=10&user_key=${process.env.exports.apikey}`;



  console.log(url);
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", url, true);
  request.send();
let getElements = function(response) {
  console.log(response);
  if(response.length != 0)
  {
    //$('#output').text(`The first name is ${response.data.profile.first_name}`);

  }
  else
  {

  }

}
});
