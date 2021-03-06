console.log("Starting TTT Engine v1.0");
console.log("[TTTE] Setting up files...");
console.log("[TTTE] Setting up functions...");

const ttte = require("./functions/basic.js"); // Load basic functions file
const marker = require("./functions/marker.js"); // Load marker functions file
const config = require("./config.json"); // Load config file

ttte.log("Reading configuration file...");
ttte.log("Initialization complete!");

/*
marker.place("circle", "aa");
marker.place("circle", "ab");
marker.place("circle", "ac");
marker.place("cross", "ba");
marker.place("cross", "bb");
marker.place("cross", "bc");
marker.place("cross", "ca");
marker.place("cross", "cb"); 
marker.place("cross", "cc");
ttte.log(marker.game.aa);
ttte.log("Win: " + marker.checkWin());
*/

if(config.checkWinLoop == "true") { // Check if setting "checkWinLoop" is set to true
	marker.autoWinCheck(); // Start loop
}

module.exports = {
	marker: marker // Export "marker" variable for user use
};
