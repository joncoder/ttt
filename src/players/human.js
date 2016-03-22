var console = require('../console/ui');

function determine_move(board, marker, name) {
	var move = console.get_move(board.slice(0), marker, name);
	return move;
}

exports.determine_move = determine_move;