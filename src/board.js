function create_new_board() {
	return [" ", " ", " ", " ", " ", " ", " ", " ", " "];
}

function update_board(board, position, marker) {
	board[position] = marker;
	return board;
}

function valid_space(board, position) {
	return (board[position] === " ");
}

function game_tied(board) {
	var available_spaces = board.filter(function(position){
							 return position === " "
						   }).length
	return (available_spaces === 0);
}

function win(board, marker) {
	var lines = potential_winning_lines(board),
		wins = 	lines.filter(function(line){
					return (winning_line(line, marker))
				}).length
    return (wins > 0);
}

function winning_line(line, marker) {
	var markers = 	line.filter(function(position){
						return position === marker
					}).length
	return (markers === 3);
}

function game_over(board, marker) {
	return (win(board, marker) || game_tied(board));
}

function potential_winning_lines(board) {
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

exports.create_new_board = create_new_board;
exports.update_board = update_board;
exports.valid_space = valid_space;
exports.game_tied = game_tied;
exports.win = win;
exports.winning_line = winning_line;
exports.game_over = game_over;