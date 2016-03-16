var board_module = require('./board');

function determine_move(current_board, marker) {
	var depth = 1,
		move = (negamax_move(current_board, marker, depth)).move;
	return move;
}

function negamax_move(board, current_marker, depth) {
	var move_with_best_rank = {best_rank: -Infinity},
		opponent_marker = opponent(current_marker),
		rank,
		game_over = board_module.game_over(board, opponent_marker);
	if (game_over) {
	    return score(board, current_marker, depth);
	}
	for(var i = 0; i < board.length; i += 1) {
    	if (board[i] === " ") {
        	board = board_module.update_board(board, i, current_marker);
        	rank = extract_neg_rank(negamax_move(board, opponent_marker, depth + 1));
        	board = board_module.update_board(board, i, " ");
        	if (rank > move_with_best_rank.best_rank) {
        		move_with_best_rank.best_rank = rank;
        		if (depth === 1) {
        			move_with_best_rank.move = i;
        		}

        	}
    	}
    }
    return move_with_best_rank;
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

function extract_neg_rank(rank_or_obj) {
	// negamax_move returns either a number (score) or an object (move_with_best_rank).
	// if object is returned, need to extract the number.
	// for the negamax, the negative result is required.
	var rank;
	if (isNaN(rank_or_obj)) {
        rank = rank_or_obj.best_rank;
    } else {
    	rank = rank_or_obj;
    }
    return -rank;
}

exports.determine_move = determine_move;
exports.score = score;
exports.opponent = opponent;