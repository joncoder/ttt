function create_new_board(grid_size) {
	grid_size = grid_size || 3;
	var board = [],
		array_size = square(grid_size);
	for (i = 0; i < array_size; i += 1) {
		board.push(" ");
	} 
	return board;
}

function square(number) {
	var square = number * number;
	return square;
}

exports.create_new_board = create_new_board;