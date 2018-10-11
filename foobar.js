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
let FooBarData = JSON.parse(FooBarObject); //take this string and turn it into json

//FUNCTION INIT, template, cloning, setup things that happens once
function init() {
  //console.log(FooBarData);
  setupTaps(FooBarData.taps);
  showBartenders(FooBarData.bartenders);
  //setInteval
  setInterval(update, 1500);
}

let data = JSON.parse(FooBar.getData());
let firstQueueId;
let lastQueueId;
let indexNr;
let NewqueueNr;
//FUNCTION UPDATE, updates what was created in the previous function
function update() {
  data = JSON.parse(FooBar.getData());

  // beers(FooBarData.beertypes);
  taps(data.taps);
  // find where lastQueueId is in the queue at update
  indexNr = data.queue.map(e => e.id).indexOf(lastQueueId);
  //  console.log(data);
  //console.log("i am indexNr" + indexNr);
  // display new number in line  // loop
  if (indexNr < queueNr) {
    NewqueueNr = indexNr + 1;
    // console.log("i am newQueueNr" + NewqueueNr);
    document.getElementById("your_number").textContent = NewqueueNr;
  }
  if (NewqueueNr <= 0) {
    let itIsYourTurn = document.querySelector("#getNumber #it_is_your_turn");
    itIsYourTurn.style.visibility = "visible";
    let numberText = document.querySelector("#getNumber #number_text");
    numberText.style.visibility = "hidden";
  }
}

//FUNCTION HANDLEBARTENDERS

//console.log(FooBarData.bartenders);
let names = FooBarData.bartenders;
//console.log(names);

//find bartenders names

//display bartenders names
const templateBartenders = document.querySelector(".workers").content;

function showBartenders(handleBartenders) {
  names.forEach(function(worker) {
    const clone2 = templateBartenders.cloneNode(true);
    clone2.querySelector(".worker").textContent = worker.name;
    document.querySelector(".boxworkers").appendChild(clone2);
  });
}

// FUNCTION BEERS - Marie D

beers();

function beers() {
  // console.log("show beers");
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
  document.querySelector("[data-override]").style.pointerEvents = "auto";
  document.querySelector("[data-name2]").textContent = showBeer.name;
  document
    .querySelector("[data-singleImg]")
    .setAttribute("src", "images" + "/" + showBeer.label);
  document.querySelector("[data-titel]").textContent = showBeer.name;
  document.querySelector("[data-discription]").textContent =
    showBeer.description.overallImpression;
  document.querySelector("[data-pris]").textContent =
    showBeer.alc * 10 + ",- kr";
  document.querySelector("[data-button]").addEventListener("click", closeModal);
  // console.log("pop-up klikket");
}

function closeModal() {
  // console.log("luk modal funktion");
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
 */

// FUNCTION TAPS
const templateTaps = document.querySelector(".templateTap").content;
function setupTaps(taps) {
  taps.forEach(function(tap) {
    const clone = templateTaps.cloneNode(true);
    // find taps, level, beer in tap
    // display the level of the beer in the keg
    let height = (tap.level * 215.5) / tap.capacity;
    let Ypos = 217 - height;
    clone.querySelector("#Layer_2 rect.cls-1").setAttribute("height", height);
    clone.querySelector("#Layer_2 rect.cls-1").setAttribute("y", Ypos);

    //having name of the beer on the taps intstead of the pictures, but we don't use it at this point
    // clone.querySelector(".bname").textContent = tap.beer;

    // display the beer lable on the tap
    data.beertypes.forEach(beer => {
      if (tap.beer === beer.name) {
        //show the right picture of the beer
        clone.querySelector(".smallpicture").src = "images/" + beer.label;
      }
    });
    //console.log(data.beertypes);
    document.querySelector(".bigboxtap").appendChild(clone);
  });
}

function taps(taps) {
  // console.log(taps)
  const all = document.querySelectorAll("#Layer_2 rect.cls-1");

  taps.forEach(function(tap, index) {
    const height = (tap.level * 215.5) / 2500;
    let Ypos = 217 - height;
    // console.log("ypos is : " + Ypos);
    // console.log(height)
    all[index].setAttribute("height", height);
    all[index].setAttribute("y", Ypos);
  });
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
  //console.log("i am last queue id " + data.queue[lastQueueIndex].id);
  lastQueueId = data.queue[lastQueueIndex].id;

  //console.log("I am first Id " + firstQueueId);

  // calculate what number in line the customer is (length +1)

  queueNr = data.queue.length + 1;
  console.log("you are nr " + queueNr);

  // display your number on screen
  document.getElementById("your_number").textContent = queueNr;
}
