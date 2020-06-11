# TTTE
TicTacToe game engine programmed using NodeJS


# Functions
After copying library to your directory, use `var ttte = require("PATH/TO/TTTE.js");`<br/><br/>
Use `ttte.marker.place(player, position);` to place marker. Player is "cross" or "circle", it defines the player that is placing the marker. Position is position where player want to place a marker (See "Game object structure" section for positioning help)<br/><br/>
Use `ttte.marker.game` to retrieve the JSON game object (See "Game object structure" section for help)<br/><br/>
Use `ttte.marker.checkWin()` to manually check if someone won (returns string "cross", "cricle" or "false")<br/><br/>
# Configuration
You can set everything in *config.json* file. Here is it structure:
```json
{
	"TTT Engine configuration file": "Version v1.0",
	"Be careful when changin the content of this file": "",
	"_": "_",
	"eventsFile": "events.js",
	"checkWinLoop": "false",
	"winLoopInterval": "1000"
}
```
*eventsFile* defines the file with all events<br/><br/>
*checkWinLoop* set to true if you want to use auto-checker. Basiclly it checks if someone won with interval of *winLoopInterval* (defined in miliseconds)

# Game object structure
Its an JSON object that stores all markers data. Looks like this:
```js
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
```
And thats how it would look like as game:
```
aa, ab, ac
ba, bb, bc
ca, cb, cc
```
