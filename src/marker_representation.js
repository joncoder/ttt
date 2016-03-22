function empty_space_representation() {
	return " ";
}

function marker1_representation() {
	return "X";
}

function marker2_representation() {
	return "O";
}

function number_board_spaces(board) {
	for (var i = 0; i < board.length; i += 1) {
    	if (board[i] === empty_space_representation()) {
    		board[i] = i + 1;
    	}
	}
	return board;
}

function get_available_spaces(board) {
	var spaces = [];
	for (var i = 0; i < board.length; i += 1) {
    	if (board[i] === empty_space_representation()) {
    		spaces.push((i + 1));
    	}
	}
	return spaces;
}

function opponent(marker) {
	return (marker === marker1_representation() ? marker2_representation() : marker1_representation());
}

exports.empty_space_representation = empty_space_representation;
exports.marker1_representation = marker1_representation;
exports.marker2_representation = marker2_representation;
exports.number_board_spaces = number_board_spaces;
exports.get_available_spaces = get_available_spaces;
exports.opponent = opponent;