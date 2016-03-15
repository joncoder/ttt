function create_new_board(grid_size) {
	grid_size = grid_size || 3;
	var board = [],
		array_size = Math.pow(grid_size, 2);
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
    	if (count_items_in_array(lines[i], marker) === Math.sqrt(board.length)) {
        	return true;
    	}
    }
    return false;
}

function game_over(board, marker) {
	return (win(board, marker) || game_tied(board));
}

function winning_lines(board) {
	var r = rows(board),
		l = columns(r),
		d = diagonals(r),
		lines = [].concat(r, l, d);
	return lines;
}

function rows(board) {
	var row_lines = [],
		row_length = Math.sqrt(board.length);
	for (var i = 0; i < board.length; i += row_length) {
    	row_lines.push(board.slice(i, (i + row_length)));
	}
	return row_lines;
}

function columns(row_lines) {
	col_lines = transpose(row_lines);
	return col_lines;
}

function diagonals(row_lines) {
	var left_diag = [],
		right_diag = [],
		diag_lines = [],
		row_length = row_lines.length;
	for (var i = 0; i < row_length; i += 1) {
		left_diag.push(row_lines[i][i]);
    	right_diag.push(row_lines[i][row_length - (i + 1)]);;
	}
	diag_lines.push(left_diag, right_diag);
	return diag_lines;
}

function transpose(array) {
 	var transposed = array[0].map(function(_, i) { 
  		return array.map(function(row) { 
    		return row[i] 
  		})
	});
	return transposed;
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
exports.game_over = game_over;