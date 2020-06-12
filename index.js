const ttte = require("./TTTE.js"); // Inlude the library
ttte.marker.place("circle", "aa"); // Place marker circle on AA
ttte.marker.place("circle", "ab");
ttte.marker.place("circle", "ac");
console.log(ttte.marker.checkWin() + " won!"); // Check of simeone won (logs "circle won!")
