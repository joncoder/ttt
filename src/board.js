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