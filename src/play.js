var ui = require('./console/ui'),
	play_again = require('./play_again'),
	game = require('./game');

function get_game_info() {
	var players;
	players = get_players();	
	start_game(players.player1, players.player2);	
}

function get_players() {
	player1 = ui.get_player1_info();
	game_type = ui.get_game_type(player1.name);
	player2 = ui.get_player2_info(player1, game_type);
	return {player1: player1, player2: player2};
}

function start_game(player1, player2) {
	var final_state,
		player_order;
	coin_toss = Math.random();
	player_order = get_player_order(coin_toss, player1, player2);
	play_game(player_order.first, player_order.second);	
}

function get_player_order(coin_toss, player1, player2) {
	var play_order = coin_toss < 0.5 ? {first: player1, second: player2} : {first: player2, second: player1};
	ui.display_players(player1, player2);
	ui.display_player_start(play_order.first);
	return play_order; 
}

function play_game(player1, player2) {
	var board = require('./board').create_new_board(),
		final_state;
	final_state = game.play_game(board, player1, player2);
	end_game(final_state);
}

function end_game(final_state) {
	ui.display_final_state(final_state);
	play_again.play_again(player1, player2, ui.get_play_again(player1.name, player2.name));
}

function exit() {
	return ui.display_goodbye();
}

exports.get_game_info = get_game_info;
exports.get_players = get_players;
exports.get_player_order = get_player_order;
exports.start_game = start_game;
exports.exit = exit;