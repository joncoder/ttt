var user_move = require('../console/get_user_move');

function determine_move(board, marker, name) {
	var move = user_move.get_move(board.slice(0), marker, name);
	return move;
}

exports.determine_move = determine_move;