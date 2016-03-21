var rl = require('readline-sync'),
	ui_help = require('./UI_helpers');

function get_game_info() {
	var player1,
		player2;
	
	clear_screen();
	player1 = get_player1_info();
	player2 = get_player2_info(player1);
	start_game(player1, player2);	
}

function start_game(player1, player2) {
	var game = require('./game'),
		final_state;
	
	display_players(player1, player2);
	final_state = game.play_game(game.new_board(), player1, player2);
	display_result(final_state);
	play_again(player1, player2);	
}

function display_result(final_state) {
	print_board(final_state.final_board);
	print_result(final_state);
}

function display_players(player1, player2) {
	clear_screen();
	print(player1.name + " is " + player1.marker + ", and " + player2.name + " is " + player2.marker);
}

function play_again(player1, player2) {
	var play = ask(player1.name + ", would you like to\n\n" +
					"  1) play another game against " + player2.name + "?\n" +   
	   				"  2) play a new game?\n" +
	   				"  3) or, leave for now?", {limit: [1, 2, 3]})
	if (play === "1") {
		start_game(player1, player2);
	}
	else if (play === "2") {
		get_game_info();
	} else {
		print("Bye!");
	}
}

function ask(question, limit) {
	return rl.question("\n" + question + "\n", limit);
}

function clear_screen() {
	process.stdout.write('\033c');
}

function get_player1_info() {
	var player1 = {player: "human"},
		marker1 = ui_help.marker1_representation(),
		marker2 = ui_help.marker2_representation();
	
	player1.name = ask("May I have your name?");
	player1.marker = ask(player1.name + ", would you like to be " + marker1 + " or " + marker2 + "?", {limit: [marker1, marker2]}).toUpperCase();
	return player1;
}

function get_player2_info(player1) {
	var player2 = {},
		game_type = get_game_type(player1.name);;
	
	player2.marker = ui_help.opponent(player1.marker);
	player2.player = game_type === "1" ? "negamax" : "human";
	player2.name = game_type === "1" ? "the Computer" : ask("What is your friend's name?");
	return player2;
}

function get_game_type(name) {
	return ask(name + ", would you like a 1 or 2 player game?", {limit: ["1", "2"]});
}

function get_move(board, marker) {
	var spaces = ui_help.get_available_spaces(board),
		board_with_numbers = ui_help.number_board_spaces(board),
		choice;
	print_board(board_with_numbers);
	choice = ask("Where would you like to play your " + marker + "?", {limit: spaces});
	return (choice - 1);
}

function print_board(board) {
	var display = "   |   |   \n" + 
				  " " + board[0] + " | " + board[1] + " | " + board[2] + " \n" +
				  "___|___|___\n" +
				  "   |   |   \n" + 
				  " " + board[3] + " | " + board[4] + " | " + board[5] + " \n" +
				  "___|___|___\n" +
				  "   |   |   \n" + 
				  " " + board[6] + " | " + board[7] + " | " + board[8] + " \n" +
				  "   |   |   \n";
	print(display);
}

function print (string) {
	console.log("\n" + string);
}

function print_result(final_state) {
	if (final_state.win === true) {
		print(final_state.last_player.name + " wins!")
	} else {
		print("Game tied!");
	}
}

exports.get_move = get_move;
exports.get_game_info = get_game_info;


