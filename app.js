'use strict';
//create an array of open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//First and Pike Location
var firstAndPike = {
  name: 'First and Pike',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      firstandpike.appendChild(liEl);
    }
  }

};
firstAndPike.render();
///////////////////////////////////////////////////////////////////////////////
//First and Pike Location
var seaTacAirport = {
  name: 'SeaTac Airport',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var seatacairport = document.getElementById('seatacairport');
    var sTa = document.getElementById('sTa');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    sTa.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seatacairport.appendChild(liEl);
    }
  }

};
seaTacAirport.render();
///////////////////////////////////////////////////////////////////////////////
//First and Pike Location
var seattleCenter = {
  name: 'Seattle Center',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var seattlecenter = document.getElementById('seattlecenter');
    var sC = document.getElementById('sC');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    sC.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seattlecenter.appendChild(liEl);
    }
  }

};
seattleCenter.render();
///////////////////////////////////////////////////////////////////////////////
//First and Pike Location
var capitolHill = {
  name: 'Capitol Hill',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var capitolhill = document.getElementById('capitolhill');
    var cH = document.getElementById('cH');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    cH.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      capitolhill.appendChild(liEl);
    }
  }

};
capitolHill.render();
///////////////////////////////////////////////////////////////////////////////
//First and Pike Location
var alKi = {
  name: 'Alki',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var alki = document.getElementById('alki');
    var aK = document.getElementById('aK');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    aK.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      alki.appendChild(liEl);
    }
  }

};
alKi.render();
///////////////////////////////////////////
////////////////////////////////////////////
// 'use strict';
//
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//
// var firstAndPike = {
//   minCust: 23 ,
//   maxCust: 65 ,
//   avgSales: 6.3 ,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getRndmCst: function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//       console.log(this.custPerHour[i]);
//     }
//   },
//   getCookiesPerHour: function () {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesPerHour.push(Math.round(this.cookiesPerHour * this.custPerHour * this.randCust[j]));
//       console.log(this.cookiesPerHour[j]);
//     }
//   },
//   render: function() {
//     var firstandpike = document.getElementById('firstandpike');
//     var fandp = document.getElementById(fandp);
//     this.getRndmCst();
//     this.getCookiesPerHour();
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     fandp.appendChild(h3EL);
//     for(var k = 0; k < hours.length; k++){
//       var liEL = document.createElement('li');
//       liEL.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';
//       console.log(liEL);
//       firstandpike.appenChild(liEL);
//     }
//   }
// };
// firstAndPike.render();
// ////////////////////////////////////////////
// var seaTac = {
//   minCust: 3 ,
//   maxCust: 24 ,
//   avgSales: 1.2 ,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getRndmCst: function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//       console.log(this.custPerHour[i]);
//     }
//   },
//   getCookiesPerHour: function () {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesPerHour.push(Math.round(this.cookiesPerHour * this.custPerHour * this.randCust[j]));
//       console.log(this.cookiesPerHour[j]);
//     }
//   },
//   render: function() {
//     var seatac = document.getElementById('seatac');
//     var sTa = document.getElementById(sTac);
//     this.getRndmCst();
//     this.getCookiesPerHour();
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     sTa.appendChild(h3EL);
//     for(var k = 0; k < hours.length; k++){
//       var liEL = document.createElement('li');
//       liEL.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';
//       console.log(liEL);
//       seatac.appenChild(liEL);
//     }
//   }
// };
// seaTac.render();
// ////////////////////////////////////////////
// var seattleCenter = {
//   minCust: 11 ,
//   maxCust: 38 ,
//   avgSales: 3.7 ,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getRndmCst: function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//       console.log(this.custPerHour[i]);
//     }
//   },
//   getCookiesPerHour: function () {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesPerHour.push(Math.round(this.cookiesPerHour * this.custPerHour * this.randCust[j]));
//       console.log(this.cookiesPerHour[j]);
//     }
//   },
//   render: function() {
//     var seattlecenter = document.getElementById('seattlecenter');
//     var sC = document.getElementById(sC);
//     this.getRndmCst();
//     this.getCookiesPerHour();
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     sC.appendChild(h3EL);
//     for(var k = 0; k < hours.length; k++){
//       var liEL = document.createElement('li');
//       liEL.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';
//       console.log(liEL);
//       seattlecenter.appenChild(liEL);
//     }
//   }
// };
// seattleCenter.render();
// ///////////////////////////////////////////
// var capHill = {
//   minCust: 20 ,
//   maxCust: 38 ,
//   avgSales: 2.3 ,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getRndmCst: function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//       console.log(this.custPerHour[i]);
//     }
//   },
//   getCookiesPerHour: function () {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesPerHour.push(Math.round(this.cookiesPerHour * this.custPerHour * this.randCust[j]));
//       console.log(this.cookiesPerHour[j]);
//     }
//   },
//   render: function() {
//     var caphill = document.getElementById('caphill');
//     var cH = document.getElementById(cH);
//     this.getRndmCst();
//     this.getCookiesPerHour();
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     cH.appendChild(h3EL);
//     for(var k = 0; k < hours.length; k++){
//       var liEL = document.createElement('li');
//       liEL.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';
//       console.log(liEL);
//       caphill.appenChild(liEL);
//     }
//   }
// };
// CapHill.render();
// ////////////////////////////////////////////
// var alki = {
//   minCust: 2 ,
//   maxCust: 16 ,
//   avgSales: 4.6 ,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getRndmCst: function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//       console.log(this.custPerHour[i]);
//     }
//   },
//   getCookiesPerHour: function () {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesPerHour.push(Math.round(this.cookiesPerHour * this.custPerHour * this.randCust[j]));
//       console.log(this.cookiesPerHour[j]);
//     }
//   },
//   render: function() {
//     var alKi = document.getElementById('alKi');
//     var aK = document.getElementById(fandp);
//     this.getRndmCst();
//     this.getCookiesPerHour();
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     aK.appendChild(h3EL);
//     for(var k = 0; k < hours.length; k++){
//       var liEL = document.createElement('li');
//       liEL.textContent = hours[k] + ': ' + this.cookiesPerHour[k] + ' cookies';
//       console.log(liEL);
//       alKi.appenChild(liEL);
//     }
//   }
// };
// alki.render();
////////////////////////////////////////////////////////////////////////////////////////
/////////////////OLD CODE///////////////////
////////////////////////////////////////////
// var seaTacAir = {
//   minCust: 3 ,
//   maxCust: 24 ,
//   avgSales: 1.2 ,
//   rndmCstGn: function() {
//     var min = Math.round(this.minCust);
//     var max = Math.round(this.maxCust);
//     return Math.round(Math.random() * (max - min)) + min;
//   },
//   cookiesPerHr: function () {
//     var avgSales = this.avgSales;
//     var customers = this.rndmCstGn();
//     return Math.round(avgSales * customers);
//   }
// };
//
// var seattleCenter = {
//   minCust: 11 ,
//   maxCust: 38 ,
//   avgSales: 3.7 ,
//   rndmCstGn: function() {
//     var min = Math.round(this.minCust);
//     var max = Math.round(this.maxCust);
//     return Math.round(Math.random() * (max - min)) + min;
//   },
//   cookiesPerHr: function () {
//     var avgSales = this.avgSales;
//     var customers = this.rndmCstGn();
//     return Math.round(avgSales * customers);
//   },
//   cookiesPerHr: function () {
//     var avgSales = this.avgSales;
//     var customers = this.rndmCstGn();
//     return Math.round(avgSales * customers);
//   }
// };
//
// var capitolHill = {
//   minCust: 20 ,
//   maxCust: 38 ,
//   avgSales: 2.3 ,
//   rndmCstGn: function() {
//     var min = Math.round(this.minCust);
//     var max = Math.round(this.maxCust);
//     return Math.round(Math.random() * (max - min)) + min;
//   },
//   cookiesPerHr: function () {
//     var avgSales = this.avgSales;
//     var customers = this.rndmCstGn();
//     return Math.round(avgSales * customers);
//   }
// };
//
// var alki = {
//   minCust: 2 ,
//   maxCust: 16 ,
//   avgSales: 4.6 ,
//   rndmCstGn: function() {
//     var min = Math.round(this.minCust);
//     var max = Math.round(this.maxCust);
//     return Math.round(Math.random() * (max - min)) + min;
//   },
//   cookiesPerHr: function () {
//     var avgSales = this.avgSales;
//     var customers = this.rndmCstGn();
//     return Math.round(avgSales * customers);
//   }
// };
