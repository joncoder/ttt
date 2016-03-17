var board_module = require('./board');

function determine_move(current_board, marker) {
	var depth = 1,
		move = negamax_move(current_board, marker, depth);
	return move;
}

function negamax_move(board, current_marker, depth) {
	var best_rank = -Infinity,
		opponent_marker = opponent(current_marker),
		game_over = board_module.game_over(board, opponent_marker),
		rank,
		temp_board,
		move;
	if (game_over) {
	    return score(board, current_marker, depth);
	}
	for(var i = 0; i < board.length; i += 1) {
    	if (board[i] === " ") {
        	temp_board = board_module.update_board(board.slice(0), i, current_marker);
        	rank = -negamax_move(temp_board, opponent_marker, depth + 1);
        	if (rank > best_rank) {
        		best_rank = rank;
        		if (depth === 1) {
        			move = i;
        		}
        	}
    	}
    }
    return (depth === 1 ? move : best_rank);
}

function score(board, current_marker, depth) {
	if (board_module.win(board, current_marker)) {
		return (100 - depth);
	}
	else if (board_module.win(board, opponent(current_marker))) {
	    return (-(100 - depth));
	}
	return 0;
}	

function opponent(marker) {
	return (marker === "X" ? "O" : "X");
}

exports.determine_move = determine_move;
exports.score = score;
exports.opponent = opponent;