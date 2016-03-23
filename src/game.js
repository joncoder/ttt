var board = require('./board');

function play_game(current_board, current_player, opponent) {
	var player = require('./players/' + current_player.player),
		player_marker = current_player.marker,
		player_name = current_player.name,
		move,
		updated_board;
	move = player.determine_move(current_board, player_marker, player_name);
	updated_board = board.update_board(current_board, move, player_marker);
	if (board.game_over(updated_board, player_marker)) {
		return get_final_state(updated_board, current_player, opponent);
	}
	return play_game(updated_board, opponent, current_player);
}

function get_final_state(updated_board, current_player, opponent) {
	var final_state = {};
	final_state.final_board = updated_board;
	final_state.last_player = current_player;
	final_state.opponent = opponent;
	final_state.win = board.win(updated_board, current_player.marker);
	return final_state;
}

exports.play_game = play_game;
exports.get_final_state = get_final_state;