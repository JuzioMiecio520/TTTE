const ttte = require("./TTTE.js");
ttte.marker.place("circle", "aa");
ttte.marker.place("circle", "ab");
ttte.marker.place("circle", "ac");
console.log(ttte.marker.checkWin());