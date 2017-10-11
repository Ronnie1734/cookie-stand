var firstAndPike = {
  minCust: 23 ,
  maxCust: 65 ,
  avgSales: 6.3 ,
  rndmCstGn: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPerHr: function () {
    var avgSales = this.avgSales;
    var customers = this.rndmCstGn();
    return Math.floor(avgSales * customers);
  }
};

var seaTacAir = {
  minCust: 3 ,
  maxCust: 24 ,
  avgSales: 1.2 ,
  rndmCstGn: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPerHr: function () {
    var avgSales = this.avgSales;
    var customers = this.rndmCstGn();
    return Math.floor(avgSales * customers);
  }
};

var seattleCenter = {
  minCust: 11 ,
  maxCust: 38 ,
  avgSales: 3.7 ,
  rndmCstGn: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPerHr: function () {
    var avgSales = this.avgSales;
    var customers = this.rndmCstGn();
    return Math.floor(avgSales * customers);
  },
  cookiesPerHr: function () {
    var avgSales = this.avgSales;
    var customers = this.rndmCstGn();
    return Math.floor(avgSales * customers);
  }
};

var capitolHill = {
  minCust: 20 ,
  maxCust: 38 ,
  avgSales: 2.3 ,
  rndmCstGn: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPerHr: function () {
    var avgSales = this.avgSales;
    var customers = this.rndmCstGn();
    return Math.floor(avgSales * customers);
  }
};

var alki = {
  minCust: 2 ,
  maxCust: 16 ,
  avgSales: 4.6 ,
  rndmCstGn: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPerHr: function () {
    var avgSales = this.avgSales;
    var customers = this.rndmCstGn();
    return Math.floor(avgSales * customers);
  }
};
