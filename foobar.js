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
  // display labels, names and price
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
  // calculate price from alcohol%
}

// Modal Window - Marie D

// Make Modal pop up and close
const modal = document.querySelector("#modal_container");
const closeButton = document.querySelector("#closebutton");

document.querySelector(".columns").addEventListener("click", showModal);

function showModal(window) {
  console.log("Show modal");
  modal.classList.remove("hidden");
}

closeButton.addEventListener("click", hideModal);

function hideModal() {
  console.log("Hide modal");
  modal.classList.add("hidden");
}

// Make showModal show JSON data beertypes

showInModal();

function showInModal() {
  let modalInfo = data.beertypes;
  console.log(modalInfo);

  let tempModal = document.querySelector("[data-temp]");
  let destModal = document.querySelector("[data-destModal]");

  destModal.innerHTML = "";

  modalInfo.forEach(beer => {
    let klon = tempModal.cloneNode(true).content;
    klon
      .querySelector("[data-beer-img2]")
      .setAttribute("src", "images" + "/" + beer.label);
    klon.querySelector("[data-name2]").textContent = beer.name;
    klon.querySelector("[data-price2]").textContent = beer.alc * 10;
    klon.querySelector("[data-alc]").textContent = beer.alc;
    klon.querySelector("[data-description]").textContent = beer.description;

    //klon.querySelector(".ret ").addEventListener("click ", openModal);

    destModal.appendChild(klon);
  });
}

// Make show a single beer

function single(singleBeer) {
  console.log(singleBeer);
  for (let i = 0; i < data.length; i++) {
    if (currentBeer.name == beertypes[i].name) {
    }
  }
}
