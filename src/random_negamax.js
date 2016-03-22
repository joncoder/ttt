var random = require('./random'),
	negamax = require('./negamax');

function determine_move(board, marker) {
	if (Math.random() < 0.5) {
		return random.determine_move(board);
	}
	return negamax.determine_move(board, marker);
}

exports.determine_move = determine_move;