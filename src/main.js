import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
 $('#searchForm').submit(function(event)
 {
   $("#output").text("");
   event.preventDefault();

   let medicalIssue=$('#searchText').val();
   let request = new XMLHttpRequest();

   let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&skip=2&limit=10&user_key=${process.env.exports.apikey}`;

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
     console.log(response);

     if (response.data==0){
       $("#output").text("No doctors were found matching your criteria.");
     }
     else{
       let numDoctor=0;
       response.data.forEach(function(entry)
       {
         // let phoneNumber="Phone number not found";
         // if (entry.practices==undefined)
         // {
         //   console.log("no practices found");
         // }
         // else{
         //   //phoneNumber=entry.practices[numDoctor].phones[0].number;
         // }

         numDoctor++;
         let firstName=entry.profile.first_name;
         let lastName=entry.profile.last_name;
         //let address=response.data[0].practices[0].website;
         //let website=response.data[1].practices[1].website;

         let output="<li>"+numDoctor+". Doctor: ";
         output+=firstName+" ";
         output+=lastName+"\n";
         // output+="<br> Phone Number: ";
         // output+=phoneNumber;



         output+="</li>";
         $('#output').append(output);


       });
     }
   }
 });
});
