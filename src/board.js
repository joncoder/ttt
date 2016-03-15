function create_new_board(grid_size) {
	grid_size = grid_size || 3;
	var board = [],
		array_size = square(grid_size);
	for (i = 0; i < array_size; i += 1) {
		board.push(" ");
	} 
	return board;
}

function update_board(board, position, marker) {
	board[position] = marker;
	return board;
}

function valid_space(board, position) {
	return (board[position] === " ");
}

function game_tied(board) {
	return (available_spaces(board) === 0);
}

function win(board, marker) {
	var lines = winning_lines(board);
	for(var i = 0; i < lines.length; i += 1) {
    	if (count_items_in_array(lines[i], marker) === 3) {
        	return true;
    	}
    }
    return false;
}

function winning_lines(board) {
	var lines = [[board[0], board[1], board[2]],
				 [board[3], board[4], board[5]],
				 [board[6], board[7], board[8]],
				 [board[0], board[3], board[6]],
				 [board[1], board[4], board[7]],
				 [board[2], board[5], board[8]],
				 [board[0], board[4], board[8]],
				 [board[2], board[4], board[6]]];
	return lines;
}

function square(number) {
	var square = number * number;
	return square;
}

function available_spaces(board) {
	return (count_items_in_array(board, " "));
}

function count_items_in_array(array, item){
	var count = 0;
	for(var i = 0; i < array.length; i += 1) {
    	if (array[i] === item) {
        	count += 1;
    	}
    }
    return count;
}

exports.create_new_board = create_new_board;
exports.update_board = update_board;
exports.valid_space = valid_space;
exports.game_tied = game_tied;
exports.win = win;