let readline = require("readline-sync");
let geniuses = [];
let running = true;

function generateGeniuses() {
  geniuses = ["Aris Carter",
              "Ronin Young Jones",
              "Derrick Bedford",
              "Malick	Abdulla",
              "Kahi Brooks",
              "Jordan	Mutiri",
              "Josiah	Johnson",
              "Damarione Moore",
              "Kaiden Groves",
              "Carter Smith Craney",
              "Paul Araya",
              "Derrick Johnson Jr",
              "Ardan Gonzales",
              "Jamari Washington",
              "Noah Abiyi",
              "Israel Fleewood",
              "Myles Wilkerson"
              ];
}

while(running) {
  if(geniuses.length === 0) {
    console.log("Refreshing Geniuses...");
    generateGeniuses();
  }
  let geniusIndex = Math.floor(Math.random() * geniuses.length);
  if(readline.keyInYN("Generate a new Genius?")) {
    console.log(geniuses[geniusIndex]);
    geniuses.splice(geniusIndex, 1);
  } else {
    running = false;
  }
}