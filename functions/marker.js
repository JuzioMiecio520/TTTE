var game = {
	"aa": "",
	"ab": "",
	"ac": "",
	"ba": "",
	"bb": "",
	"bc": "",
	"ca": "",
	"cb": "",
	"cc": "",
};

// AA, AB, AC
// BA, BB, BC
// CA, CB, CC

var config = require("../config.json");
var events = require("../" + config.eventsFile);

module.exports = {
	game: game,
	place: function (player, position) {
		// game["aa"] = "Test";
		if(position == "aa") {
			if(game.aa == "") {
				if(player == "cross") {
					game["aa"] = "cross";
				} else if(player == "circle") {
					game["aa"] = "circle";
				}
			} else {
				events.placeTaken(player, position, game.aa);
			}
		} else if(position == "ab") {
			if(game.ab == "") {
				if(player == "cross") {
					game["ab"] = "cross";
				} else if(player == "circle") {
					game["ab"] = "circle";
				}
			} else {
				events.placeTaken(player, position, game.ab);
			}
		} else if(position == "ac") {
			if(game.ac == "") {
				if(player == "cross") {
					game["ac"] = "cross";
				} else if(player == "circle") {
					game["ac"] = "circle";
				}
			} else {
				events.placeTaken(player, position, game.ac);
			}
		} else if(position == "ba") {
			if(game.ba == "") {
				if(player == "cross") {
					game["ba"] = "cross";
				} else if(player == "circle") {
					game["ba"] = "circle";
				}
			} else {
				events.placeTaken(player, position, game.ba);
			}
		} else if(position == "bb") {
			if(game.bb == "") {
				if(player == "cross") {
					game["bb"] = "cross";
				} else if(player == "circle") {
					game["bb"] = "circle";
				}
			} else {
				events.placeTaken(player, position, game.bb);
			}
		} else if(position == "bc") {
			if(game.bc == "") {
				if(player == "cross") {
					game["bc"] = "cross";
				} else if(player == "circle") {
					game["bc"] = "circle";
				}
			} else {
				events.placeTaken(player, position, game.bc);
			}
		} else if(position == "ca") {
			if(game.ca == "") {
				if(player == "cross") {
					game["ca"] = "cross";
				} else if(player == "circle") {
					game["ca"] = "circle";
				}
			} else {
				events.placeTaken(player, position, game.ca);
			}
		} else if(position == "cb") {
			if(game.cb == "") {
				if(player == "cross") {
					game["cb"] = "cross";
				} else if(player == "circle") {
					game["cb"] = "circle";
				}
			} else {
				events.placeTaken(player, position, game.cb);
			}
		} else if(position == "cc") {
			if(game.cc == "") {
				if(player == "cross") {
					game["cc"] = "cross";
				} else if(player == "circle") {
					game["cc"] = "circle";
				}
			} else {
				events.placeTaken(player, position, game.cc);
			}
		} else {
			
		}
		console.log(game);
	},
	checkWin: function() {
		if(game.aa == "cross" && game.ba == "cross" && game.ca == "cross") {
			// -->
			return "cross";
		} else if(game.ab == "cross" && game.bb == "cross" && game.cb == "cross") {
			// -->
			return "cross";
		} else if(game.ac == "cross" && game.bc == "cross" && game.cc == "cross") {
			// -->
			return "cross";
		} else if(game.aa == "cross" && game.ab == "cross" && game.ac == "cross") {
			// \/
			return "cross";
		} else if(game.ba == "cross" && game.bb == "cross" && game.bc == "cross") {
			// \/
			return "cross";
		} else if(game.ca == "cross" && game.cb == "cross" && game.cc == "cross") {
			// \/
			return "cross";
		} else if(game.aa == "cross" && game.bb == "cross" && game.cc == "cross") {
			// /
			return "cross";
		} else if(game.ac == "cross" && game.bb == "cross" && game.ca == "cross") {
			// \ 
			return "cross";
		} else if(game.aa == "circle" && game.ba == "circle" && game.ca == "circle") {
			// -->
			return "circle";
		} else if(game.ab == "circle" && game.bb == "circle" && game.cb == "circle") {
			// -->
			return "circle";
		} else if(game.ac == "circle" && game.bc == "circle" && game.cc == "circle") {
			// -->
			return "circle";
		} else if(game.aa == "circle" && game.ab == "circle" && game.ac == "circle") {
			// \/
			return "circle";
		} else if(game.ba == "circle" && game.bb == "circle" && game.bc == "circle") {
			// \/
			return "circle";
		} else if(game.ca == "circle" && game.cb == "circle" && game.cc == "circle") {
			// \/
			return "circle";
		} else if(game.aa == "circle" && game.bb == "circle" && game.cc == "circle") {
			// /
			return "circle";
		} else if(game.ac == "circle" && game.bb == "circle" && game.ca == "circle") {
			// \ 
			return "circle";
		} else {
			return "false";
		}
	},
	autoWinCheck: function() {
		autoWinCheckInternal();
		function autoWinCheckInternal() {
			setTimeout(function() {
				var _this = require("./marker.js");
				if(_this.checkWin() == "cross") {
					events.win("cross", game);
				} else if(_this.checkWin() == "circle") {
					events.win("circle", game);
				}
				if(true) {
					autoWinCheckInternal();
				}
			}, parseInt(config.winLoopInterval));
		}
	}
};
