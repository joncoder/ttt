var ui = require('./ui');

function get_move(board, marker, name) {
	var board_with_numbers = number_board_spaces(board),
		spaces = get_available_spaces(board),
		choice;
	choice = ui.get_move_choice(name, marker, spaces, board_with_numbers);
	return (choice - 1);
}

function number_board_spaces(board) {
	return board.map(function(value, index){
				return value === " " ? (index + 1) : value
			 });
}

function get_available_spaces(board) {
	return board.map(function(value, index){
				return value === " " ? (index + 1) : value
			 }).filter(function(map_value) {
				return (typeof(map_value) === 'number')
			 });
}

exports.get_move = get_move;
exports.number_board_spaces = number_board_spaces;
exports.get_available_spaces = get_available_spaces;