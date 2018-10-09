"use strict";

window.addEventListener("DOMContentLoaded", init);

// addEventListener on press numberbuttom, call function getNumber

// get data
const FooBarObject = FooBar.getData(); // data is a string
// convert data to json
const FooBarData = JSON.parse(FooBarObject); //take this string and turn it into json

//FUNCTION INIT, template, cloning, setup things that happens once
function init() {
  console.log(FooBarData);

  //setInteval
  setInterval(update, 1500);
}
//FUNCTION UPDATE, updates what was created in the previous function
let data = JSON.parse(FooBar.getData());
function update() {
  handleBartenders(FooBarData.bartenders);
  beers(FooBarData.beertypes);
  taps(FooBarData.taps);
}

//FUNCTION HANDLEBARTENDERS
function handleBartenders(bartenders) {
  //console.log(FooBarData.bartenders.name);
  //console.log(bartenders[1]);
  //find bartenders names
  //display bartenders names
}

// FUNCTION BEERS
function beers(beers) {
  //console.log(beers);
  // find beer names, labels and alcohol%
  // calculate price from alcohol%
  // display labels, names and price
}
// FUNCTION TAPS
function taps(taps) {
  // console.log(taps[0]);
  // find taps, level, beer in tap,
  // find label for that beer
  // display the beerlable on the keg/tap
  // calculate the position of the image with the beer
  // display the level of the beer in the keg
}

// FUNCTION DISPLAYNUMBER
function displayNumber() {
  // start animation "number comming out of machine"
  // get data from the function getNumber and display on the ticket
}
getNumber();
// FUNCTION GETNUMBER
function getNumber() {
  // generete a consecutively number that will a one everytime numberbutton is pushed
  let startNumber = 1;

  // calculate what number in line the customer is (length +1)
  console.log(`You are number ${FooBarData.queue.length + 1} in line`);
  let queueNr = FooBarData.queue.length + 1;
  // find template and destination
  let temp = document.querySelector("[data-number-template]");
  let dest = document.querySelector("[data-number-destination]");
  // set destination to innerHTML
  dest.innerHTML = "";

  // ?? do I need to clone??
  let clone = temp.cloneNode(true).content;
  document.querySelector("[data-number]").textContent = queueNr;
  document.querySelector("[data-number-template]").appendChild(clone);
  console.log(queueNr);

  // HTML
  //<div data-number-destination></div>
  //<div data-number-template>
  //    <p> </p>
}
