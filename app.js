'use strict';
//table data

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//we need to create a place for our list of all locations to be placed when we create them
var allLocations = [];

//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
//totalTotal
var netTotal = 0;

//access the table element in the html
var tableEl = document.getElementById('cookiestands');

function makeTableHead(inputArray) {
  //make a table row
  var trEl = document.createElement('tr');
  var emptyTd = document.createElement('td');
  var cookieTotal = document.createElement('td');
  cookieTotal.textContent = 'Daily Location Totals';

  trEl.appendChild(emptyTd);
  //iterate through array
  for(var i = 0; i < inputArray.length; i++) {
    var thEl = document.createElement('th');//create
    thEl.textContent = inputArray[i];//content
    trEl.appendChild(thEl); //add cell to the row
  }
  trEl.appendChild(cookieTotal);
  tableEl.appendChild(trEl);//add row to the table
}
makeTableHead(hours);

//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionality that the machine adds to the objects

//constructor function begin with an Uppercase letter

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  //a function called MakeLocation will be a template for creating new objects that represent other locations
  //the statements in this function add properties and or methods to the objects
  //the this keyword is used instead of the object name to indicate that th property or method belongs to the object that this function creates
  //this function has four parameters and each one sets the value of a property in the object
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  //why is this an array?
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
  //using the this keyword in front of the method to show that the method belongs to the object that this function creates
  // this.calcRandCustByHour = function() {
  // METHODS GO HERE
  //THINK ABOUT PROTOTYPES
  // }
  this.calcRandCustByHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };
  //method for cookies sold by hours
  this.calcCookiesSoldByHour = function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
    }
  };
  //cookie Totals
  this.getTotal = function() {
    for(var k = 0; k < this.cookiesSoldByHour.length; k++) {
      this.totalCookies = this.totalCookies + this.cookiesSoldByHour[k];
    }
  };
  this.calcRandCustByHour();
  this.calcCookiesSoldByHour();
  this.getTotal();
};

//remember to call the METHODS in the constructor that are now prototypes available to the new objects the constructor will MakeLocation
// this.calcRandCustByHour();

//call the functions in a function if you want
//this constructor function creates five new objects with their own unique values used in properties of this object (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour)
function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);

  //make one for each store
};
makeStands();

//time to create the table in javascript
//make header row
//table needs an id in html

function makeTableBody(inputArray) {
  for(var i = 0; i < inputArray.length; i++) {
    var trEl = document.createElement('tr');
    var storeName = document.createElement('td');
    var totalCookies = document.createElement('td');
    storeName.textContent = inputArray[i].name;

    trEl.appendChild(storeName);

    for( var j = 0; j < inputArray[i].cookiesSoldByHour.length; j++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = inputArray[i].cookiesSoldByHour[j];
      trEl.appendChild(tdEl);
    }
    totalCookies.textContent = inputArray[i].totalCookies;
    trEl.appendChild(totalCookies);
    tableEl.appendChild(trEl);
  }

}
makeTableBody(allLocations);

// function makeFooter(inputArray) {
//   for(var i = 0; i < inputArray.length; i++ ) {
//     var trEl = document.createElement('tr');
//     var hourlyTotalTitle = document.createElement('td');
//     var hourlyTotals = document.createElement('td');
//
//
// }
//consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

//remeber to call makeHeaderRow();
