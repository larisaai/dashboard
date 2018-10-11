"use strict";

window.addEventListener("DOMContentLoaded", init);

// addEventListener on press numberbuttom, call function getNumber

// get data
const FooBarObject = FooBar.getData(); // data is a string
// convert data to json
let FooBarData = JSON.parse(FooBarObject); //take this string and turn it into json

//FUNCTION INIT, template, cloning, setup things that happens once
function init() {
  console.log(FooBarData);
  setupTaps(FooBarData.taps);
  showBartenders(FooBarData.bartenders);
  //setInteval

  setInterval(update, 1500);
}
//FUNCTION UPDATE, updates what was created in the previous function
let data = JSON.parse(FooBar.getData());

function update() {
  data = JSON.parse(FooBar.getData());
  FooBarData = JSON.parse(FooBar.getData()); //take this string and turn it into json


  beers(FooBarData.beertypes);
  taps(FooBarData.taps);

}

//FUNCTION HANDLEBARTENDERS

console.log(FooBarData.bartenders)
let names = FooBarData.bartenders;
console.log(names)

//find bartenders names

//display bartenders names
const templateBartenders = document.querySelector(".workers").content;

function showBartenders(handleBartenders) {
  names.forEach(function (worker) {
    const clone2 = templateBartenders.cloneNode(true);
    clone2.querySelector(".worker").textContent = worker.name;
    document.querySelector('.boxworkers').appendChild(clone2);
  })
}


// FUNCTION BEERS
function beers(beers) {
  // console.log(beers);
  // find beer names, labels and alcohol%
  // calculate price from alcohol%
  // display labels, names and price
}
// FUNCTION TAPS
const templateTaps = document.querySelector(".templateTap").content;

function setupTaps(taps) {
  // console.log(taps)

  taps.forEach(function (tap) {
    const clone = templateTaps.cloneNode(true);
    // find taps, level, beer in tap
    // display the level of the beer in the keg
    let height = tap.level * 215.5 / tap.capacity;
    let Ypos = 217 - height;
    clone.querySelector("#Layer_2 rect.cls-1").setAttribute('height', height);
    clone.querySelector("#Layer_2 rect.cls-1").setAttribute('y', Ypos);

    //having name of the beer on the taps intstead of the pictures, but we don't use it at this point
    // clone.querySelector(".bname").textContent = tap.beer;

    // display the beer lable on the tap
    data.beertypes.forEach(beer => {
      if (tap.beer === beer.name) {
        //show the right picture of the beer
        clone.querySelector(".smallpicture").src = "images/" + beer.label;
      }
    })
    console.log(data.beertypes)
    document.querySelector('.bigboxtap').appendChild(clone);
  })
}


function taps(taps) {
  // console.log(taps)
  const all = document.querySelectorAll("#Layer_2 rect.cls-1")

  taps.forEach(function (tap, index) {
    const height = tap.level * 215.5 / 2500;
    let Ypos = 217 - height;
    // console.log("ypos is : " + Ypos);
    // console.log(height)
    all[index].setAttribute('height', height);
    all[index].setAttribute('y', Ypos);

  })

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