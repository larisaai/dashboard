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
  //taps(FooBarData.taps);
}

//FUNCTION HANDLEBARTENDERS - Larisa
function handleBartenders(bartenders) {
  //console.log(FooBarData.bartenders.name);
  //console.log(bartenders[1]);
  //find bartenders names
  //display bartenders names
}

// FUNCTION BEERS - Marie D

beers();
// FUNCTION BEERS - Marie D
function beers() {
  //console.log(beers);
  // find beer names, labels and alcohol%
  let beerTypes = data.beertypes;
  console.log(beerTypes);

  let temp = document.querySelector("[data-template]");
  let dest = document.querySelector("[data-destination]");

  dest.innerHTML = "";

  beerTypes.forEach(beer => {
    let klon = temp.cloneNode(true).content;
    klon
      .querySelector("[data-beer-img]")
      .setAttribute("src", "images" + "/" + beer.label);
    klon.querySelector("[data-name]").textContent = beer.name;
    klon.querySelector("[data-price]").textContent = beer.alc * 10;

    //klon.querySelector(".ret ").addEventListener("click ", openModal);

    dest.appendChild(klon);
  });
}

const modal = document.querySelector("#modal_container");
const closeButton = document.querySelector("#closebutton");
const openButton = document.querySelectorAll(".columns");

openButton.forEach(function(window) {
  window.addEventListener("click", showModal);
});

function showModal(window) {
  console.log("Show modal");
  modal.classList.remove("hidden");
}

closeButton.addEventListener("click", hideModal);

function hideModal() {
  console.log("Hide modal");
  modal.classList.add("hidden");
}

// calculate price from alcohol%
// display labels, names and price
