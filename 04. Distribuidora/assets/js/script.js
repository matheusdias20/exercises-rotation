let spValue = 67836.43;
let rjValue = 36678.66;
let mgValue = 29229.88;
let esValue = 27165.48;
let othersValue = 19849.53;


let totalValue = spValue + rjValue + mgValue + esValue + othersValue;


let spPercentage = ((spValue / totalValue) * 100).toFixed(2) + "%";
let rjPercentage = ((rjValue / totalValue) * 100).toFixed(2) + "%";
let mgPercentage = ((mgValue / totalValue) * 100).toFixed(2) + "%";
let esPercentage = ((esValue / totalValue) * 100).toFixed(2) + "%";
let othersPercentage = ((othersValue / totalValue) * 100).toFixed(2) + "%";


document.getElementById("sp").innerHTML = spPercentage;
document.getElementById("rj").innerHTML = rjPercentage;
document.getElementById("mg").innerHTML = mgPercentage;
document.getElementById("es").innerHTML = esPercentage;
document.getElementById("others").innerHTML = othersPercentage;