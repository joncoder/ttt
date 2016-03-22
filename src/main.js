var ui = require('./console_play');

function get_game_info() {
	var player1,
		game_type,
		player2;	
	player1 = ui.get_player1_info();
	game_type = ui.get_game_type(player1.name);
	player2 = ui.get_player2_info(player1, game_type);
	start_game(player1, player2);	
}

function start_game(player1, player2) {
	var final_state;	
	ui.display_players(player1, player2);
	final_state = play_game(player1, player2);
	ui.display_final_state(final_state);
	play_again(player1, player2, ui.get_play_again(player1.name, player2.name));	
}

function play_game(player1, player2) {
	var game = require('./game');
	return game.play_game(game.new_board(), player1, player2);
}

function play_again(player1, player2, play) {
	if (play === "1") {
		start_game(player1, player2);
	}
	else if (play === "2") {
		get_game_info();
	} else {
		ui.display_goodbye();
	}
}

get_game_info();