var console = require('./console_play'),
	board = require('./board');

function determine_move(b, marker) {
	var move = console.get_move(b, marker);
	if (board.valid_space(b, move)) {
		return move;
	}
	return determine_move(b, marker);
}

exports.determine_move = determine_move;