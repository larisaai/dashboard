"use strict";

window.addEventListener("DOMContentLoaded", init);

window.onload = function() {
  let numberText = document.querySelector("#getNumber #number_text");
  numberText.style.visibility = "hidden";
};

// addEventListener on press numberbuttom, call function getNumber
// get data
const FooBarObject = FooBar.getData(); // data is a string
// convert data to json
const FooBarData = JSON.parse(FooBarObject); //take this string and turn it into json

//FUNCTION INIT, template, cloning, setup things that happens once
function init() {
  console.log(FooBarData);

  //setInteval
  setInterval(update, 2500);
}
//FUNCTION UPDATE, updates what was created in the previous function
let data = JSON.parse(FooBar.getData());
let firstQueueId;
function update() {
  data = JSON.parse(FooBar.getData());
  handleBartenders(FooBarData.bartenders);
  beers(FooBarData.beertypes);
  taps(FooBarData.taps);
  console.log(data);
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
getNumberMachine();

// FUNCTION GETNUMBERMACHINE
async function getNumberMachine() {
  //load svg
  let numberSvg = await fetch("svg/numbermachine.svg");
  // interpretate svg as text
  let svg = await numberSvg.text();
  // put svg in html
  document.querySelector("#getNumber").innerHTML = svg;
  document.querySelector("#button").addEventListener("click", hideText);
}
// FUNCTION HIDETEXT
// hide the text on the numbermachine
function hideText() {
  let text = document.querySelector("#getNumber #order_text");
  text.style.visibility = "hidden";

  // show text on number
  let numberText = document.querySelector("#getNumber #number_text");
  numberText.style.visibility = "visible";

  getNumber();
}

// FUNCTION GETNUMBER
// prints your number on the screen and counts down every time a customer is served
function getNumber() {
  // find first index queue id on click
  firstQueueId = data.queue[0].id;
  console.log(firstQueueId);
  // calculate what number in line the customer is (length +1)
  let queueNr = data.queue.length + 1;

  // FUNCTION COUNTDOWN
  function countdown() {
    //if firstQueueId is < queueNr -1 from queueNr else nothing
    if (firstQueueId <= queueNr) {
      queueNr - 1;
    }
    console.log(queueNr);
  }
  // your_number div are placed in the svg file
  document.getElementById("your_number").textContent = queueNr;
  countdown();
}
