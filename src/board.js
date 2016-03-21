var helper = require('./helper_functions'),
	representation = require('./UI_helpers');

function create_new_board(grid_size) {
	grid_size = grid_size || 3;
	var board = [],
		array_size = Math.pow(grid_size, 2);
	for (i = 0; i < array_size; i += 1) {
		board.push(empty_space());
	} 
	return board;
}

function update_board(board, position, marker) {
	board[position] = marker;
	return board;
}

function valid_space(board, position) {
	return (board[position] === empty_space());
}

function game_tied(board) {
	var available_spaces = helper.count_items_in_array(board, empty_space());
	return (available_spaces === 0);
}

function win(board, marker) {
	var lines = winning_lines(board),
		grid_size = Math.sqrt(board.length);
	for(var i = 0; i < lines.length; i += 1) {
    	if (helper.count_items_in_array(lines[i], marker) === grid_size) {
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
	col_lines = helper.transpose(row_lines);
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

function empty_space() {
	return representation.empty_space_representation();
}



exports.create_new_board = create_new_board;
exports.update_board = update_board;
exports.valid_space = valid_space;
exports.game_tied = game_tied;
exports.win = win;
exports.game_over = game_over;
exports.empty_space = empty_space;