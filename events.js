module.exports = {
	placeTaken: function(player, position, takenBy) {
		// Event called when player tries to put marker on position that is taken
		// player is player that tried to put marker (cross or circle)
		// position is position where player tried to put marker (ex. ab is A2)
		// takenBy is name of player that took that place (cross or circle)
		console.log(player + " tried to put his marker on " + position + ", but this place is already taken");
	},
	markerPlaced: function(player, position) {
		// Event called when player successfully placed marker
		// player is player that put marker (cross or circle)
		// position is position where player put marker (ex. ab is A2)
		console.log(player + " put his marker on " + position);
	},
	win: function(winner, game) {
		// THIS EVENT IS ONLY CALLED WHEN checkWinLoop IS SET TO TRUE IN CONFIG FILE! 
		// Event called when player wins. It's automaticly checked with interval of winLoopInterval (from config file)
		// To manually check win use <marker class object>.checkWin() (returns "cross", "circle" or "false")
		// winner is name of winner (cross or circle)
		// game is JSON object that stores all places. Using it you can show how player won
		console.log(winner + " won!");
		process.exit(0);
	}
}

// game JSON object structure
// aa, ab, ac
// ba, bb, bc
// ca, cb, cc
