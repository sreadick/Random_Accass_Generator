var streetNum = [32, 342, 523, 23, 194];
var streetName = ["West End Ave", "Hudson St", "Riverside Dr", "Madison Ave", "East 112 st"];
var city = ["Boston", "New York City", "LA", "Philidelphia", "Phoenix"];
var state = ["Massachusetts", "New York", "California", "Pennsylvania", "Arizona"];
var zip = [53522, 43524, 64243, 34723, 56356];

var randomStreetNum = streetNum[Math.floor(Math.random() * 5)]
var randomStreetName = streetName[Math.floor(Math.random() * 5)]
var randomCity= city[Math.floor(Math.random() * 5)]
var randomState = state[Math.floor(Math.random() * 5)]
var randomZip = zip[Math.floor(Math.random() * 5)]

console.log(randomStreetNum + " " + randomStreetName + ", " + randomCity + " " + randomState + ", " + randomZip);