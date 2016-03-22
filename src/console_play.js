var io = require('./console_io');

function get_player1_info() {
	var ui_help = require('./UI_helpers'),
		player1 = {player: "human"},
		marker1 = ui_help.marker1_representation(),
		marker2 = ui_help.marker2_representation();
	
	io.clear_screen();
	player1.name = io.ask("May I have your name?");
	player1.marker = io.ask(player1.name + ", would you like to be " + marker1 + " or " + marker2 + "?", {limit: [marker1, marker2]}).toUpperCase();
	return player1;
}

function get_game_type(name) {
	return io.ask(name + ", would you like a 1 or 2 player game?", {limit: [1,2]});
}

function get_player2_info(player1, game_type) {
	var ui_help = require('./UI_helpers'),
		player2 = {};
	
	player2.marker = ui_help.opponent(player1.marker);
	player2.player = game_type === "1" ? "negamax" : "human";
	player2.name = game_type === "1" ? "the Computer" : io.ask("What is your friend's name?");
	return player2;
}

function display_players(player1, player2) {
	io.clear_screen();
	return io.print(player1.name + " is " + player1.marker + ", and " + player2.name + " is " + player2.marker);
}

function get_move(board, marker) {
	var ui_help = require('./UI_helpers'),
		spaces = ui_help.get_available_spaces(board),
		board_with_numbers = ui_help.number_board_spaces(board),
		choice;
	display_board(board_with_numbers);
	choice = io.ask("Where would you like to play your " + marker + "?", {limit: spaces});
	return (choice - 1);
}

function display_board(board) {
	var display = "   |   |   \n" + 
				  " " + board[0] + " | " + board[1] + " | " + board[2] + " \n" +
				  "___|___|___\n" +
				  "   |   |   \n" + 
				  " " + board[3] + " | " + board[4] + " | " + board[5] + " \n" +
				  "___|___|___\n" +
				  "   |   |   \n" + 
				  " " + board[6] + " | " + board[7] + " | " + board[8] + " \n" +
				  "   |   |   \n";
	return io.print(display);
}

function display_final_state(final_state) {
	display_board(final_state.final_board);
	display_result(final_state.win, final_state.last_player.name);
}

function display_result(win, name) {
	if (win === true) {
		return io.print(name + " wins!")
	} else {
		return io.print("Game tied!");
	}
}

function get_play_again(player1_name, player2_name) {
	return io.ask(player1_name + ", would you like to\n\n" +
					"  1) play another game against " + player2_name + "?\n" +   
	   				"  2) play a new game?\n" +
	   				"  3) or, leave for now?", {limit: [1, 2, 3]});
}

function display_goodbye() {
	return io.print("Bye!");
}


exports.get_move = get_move;
exports.get_game_type = get_game_type;
exports.get_player1_info = get_player1_info;
exports.get_player2_info = get_player2_info;
exports.get_play_again = get_play_again;
exports.display_players = display_players;
exports.display_result = display_result;
exports.display_goodbye = display_goodbye;
exports.display_board = display_board;
exports.display_final_state = display_final_state;



