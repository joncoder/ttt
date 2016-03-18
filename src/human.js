var console = require('./console_play'),
	board = require('./board');

function determine_move(b, marker) {
	var move = console.get_move(b.slice(0), marker);
	return move;
	// if (board.valid_space(b, move)) {
	// 	return move;
	// }
	// return determine_move(b, marker);
}

exports.determine_move = determine_move;