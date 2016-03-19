var board = require('./board');

function play_game(current_board, current_player, opponent) {
	var player_type = current_player.player,
		player_marker = current_player.marker,
		move = require('./' + player_type).determine_move(current_board, player_marker),
		updated_board = board.update_board(current_board, move, player_marker),
		final_state;
	if (board.game_over(updated_board, player_marker)) {
		final_state = {'final_board': updated_board, 'last_player': current_player, 'opponent': opponent, 'win': board.win(updated_board, player_marker)};
		return final_state;
	}
	return play_game(updated_board, opponent, current_player);
}

function new_board(grid_size) {
	return board.create_new_board(grid_size);
}

exports.play_game = play_game;
exports.new_board = new_board;