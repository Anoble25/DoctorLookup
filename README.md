# DoctorLookup #

#### By _**Alex Noble**_ 6/1/18

## Description ##

A doctor lookup app that uses the BetterDoctor API. Users can enter a medical issue into a form, submit it, and then receive a list of doctors in their City that can treat their medical issue.

## Setup/Installation Requirements

Start by cloning the repo by running the command

`git clone https://github.com/Anoble25/DoctorLookup.git`

in your terminal at the working directory where you wish the project to be installed then navigate to that directory with

`cd DoctorLookup`

Create a .env file at and save your API key variable as exports.apiKey in the file

e.g exports.apiKey=yourAPIkeyhere

and run the command

`npm install`

Next, you can start the project by running the command

`npm run test`


## Specifications ##

* A user should be able to enter a medical issue to receive a list of doctors in the Seattle area that fit the search query.
* A user should be able to enter a name to receive a list of doctors in the Seattle area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website, and whether or not the doctor is accepting new patients.
* If the API call results in an error, the application should return a notification that states what the error is.
* If the query response doesn't include any doctors, the application should return a notification that states that no doctors meet the criteria.

## Known Bugs

_No known bugs_

## Technologies Used
* HTML5/CSS
* Javascript
* npm (Node Package Manager)
* BetterDoctor API

### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **_Alex Noble_**
