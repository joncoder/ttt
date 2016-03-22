var board = require('./board');

function determine_move(b) {
	var move = Math.floor(Math.random() * b.length);
	if (board.valid_space(b, move)) {
		return move;
	}
	return determine_move(b);
}

exports.determine_move = determine_move;
