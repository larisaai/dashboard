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
  data = JSON.parse(FooBar.getData());

  handleBartenders(FooBarData.bartenders);
  beers(data.beertypes);

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

function beers() {
  console.log("show beers");
  let beerTypes = data.beertypes;

  let temp = document.querySelector("[data-template]");
  let dest = document.querySelector("[data-destination]");
  dest.innerHTML = "";

  document.querySelector("#popup").style.pointerEvents = "none";

  //loop som kloner template
  beerTypes.forEach(showBeer => {
    let klon = temp.cloneNode(true).content;
    klon
      .querySelector("[data-beer-img]")
      .setAttribute("src", "images" + "/" + showBeer.label);
    klon.querySelector("[data-name]").textContent = showBeer.name;
    klon.querySelector("[data-price]").textContent =
      showBeer.alc * 10 + ",- kr";
    klon.querySelector("[data-window]").addEventListener("click", () => {
      visModal(showBeer);
    });
    dest.appendChild(klon);
  });
  //fade-in på article
  document.querySelectorAll("article").forEach(a => {
    a.getBoundingClientRect(); // kun hvis det ikke virker uden
    a.style.transition = "all 1s";
    a.style.opacity = "1";
  });
}

// Make a popup and close modal

function visModal(showBeer) {
  document.querySelector("#popup").style.opacity = "1";
  document.querySelector("#popup").style.pointerEvents = "auto";
  document.querySelector("[data-name2]").textContent = showBeer.name;
  document
    .querySelector("[data-singleImg]")
    .setAttribute("src", "images" + "/" + showBeer.label);
  document.querySelector("[data-discription]").textContent =
    showBeer.discription;
  document.querySelector("[data-pris]").textContent = showBeer.alc + ",- kr";
  document.querySelector("[data-button]").addEventListener("click", closeModal);
  console.log("pop-up klikket");
}

function closeModal() {
  console.log("luk modal funktion");
  document.querySelector("#popup").style.pointerEvents = "none";
  document.querySelector("#popup").style.opacity = "0";
}

// Make a show single column
/* 
function single(singleBeer) {
  console.log(singleBeer);
  for (let i = 0; i < data.length; i++) {
    if (currentBeer.name == beertypes[i].name) {
    } else {
      return false;
    }
  }
} */
