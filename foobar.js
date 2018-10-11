"use strict";

window.addEventListener("DOMContentLoaded", init);

window.onload = function() {
  let numberText = document.querySelector("#getNumber #number_text");
  let itIsYourTurn = document.querySelector("#getNumber #it_is_your_turn");
  numberText.style.visibility = "hidden";
  itIsYourTurn.style.visibility = "hidden";
};

// addEventListener on press numberbuttom, call function getNumber
// get data
const FooBarObject = FooBar.getData(); // data is a string
// convert data to json
const FooBarData = JSON.parse(FooBarObject); //take this string and turn it into json

//FUNCTION INIT, template, cloning, setup things that happens once
function init() {
  // console.log(FooBarData);

  //setInteval
  setInterval(update, 1500);
}

let data = JSON.parse(FooBar.getData());
let firstQueueId;
let lastQueueId;
let indexNr;

//FUNCTION UPDATE, updates what was created in the previous function
function update() {
  data = JSON.parse(FooBar.getData());
  handleBartenders(FooBarData.bartenders);
  beers(FooBarData.beertypes);
  taps(FooBarData.taps);

  // find where lastQueueId is in the queue at update
  indexNr = data.queue.map(e => e.id).indexOf(lastQueueId);
  console.log(indexNr);
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

getNumberMachine();

// FUNCTION GETNUMBERMACHINE
async function getNumberMachine() {
  //load svg
  let numberSvg = await fetch("svg/numbermachine5.svg");
  // interpretate svg as text
  let svg = await numberSvg.text();
  // put svg in html
  document.querySelector("#getNumber").innerHTML = svg;
  document.querySelector("#button").addEventListener("click", hideShowText);
}
// FUNCTION hideShowText
// hide the text on the numbermachine
function hideShowText() {
  let text = document.querySelector("#getNumber #order_text");
  text.style.visibility = "hidden";

  // show text on number
  let numberText = document.querySelector("#getNumber #number_text");
  numberText.style.visibility = "visible";

  getNumber();
}
let queueNr;
let lastQueueIndex;
// FUNCTION GETNUMBER // print your number on the screen and counts down every time a customer is served
function getNumber() {
  // find first index of queue id
  firstQueueId = data.queue[0].id;

  //find last index id
  lastQueueIndex = data.queue.length - 1;
  console.log("i am last queue id " + data.queue[lastQueueIndex].id);
  lastQueueId = data.queue[lastQueueIndex].id;

  //console.log("I am first Id " + firstQueueId);

  // calculate what number in line the customer is (length +1)
  queueNr = data.queue.length + 1;
  console.log("you are nr " + queueNr);

  // display your number on screen
  document.getElementById("your_number").textContent = queueNr;
  countdown();
}

function countdown() {
  console.log("countdown");
  console.log(indexNr + 1);
  // loop

  // indexNr +1
}
