var io = require('./console_io'),
	rep = require('./marker_representation');

function get_player1_info() {
	var player1 = {player: "human"},
		marker1 = rep.marker1_representation(),
		marker2 = rep.marker2_representation();
	
	io.clear_screen();
	player1.name = io.ask("May I have your name?");
	player1.marker = io.ask(player1.name + ", would you like to be " + marker1 + " or " + marker2 + "?", {limit: [marker1, marker2]}).toUpperCase();
	return player1;
}

function get_game_type(name) {
	return io.ask(name + ", would you like a 1 or 2 player game?", {limit: ["1","2"]});
}

function get_player2_info(player1, game_type) {
	var player2 = {};
	
	player2.marker = rep.opponent(player1.marker);
	player2.player = game_type === "1" ? get_ai_level() : "human";
	player2.name = game_type === "1" ? "the Computer" : io.ask("What is your friend's name?");
	return player2;
}

function get_ai_level() {
	var answer = io.ask("What computer level? 1 (easy), 2 (medium), or 3 (hard)?", {limit: ["1","2","3"]});
	if (answer === "1") {
		return "random";
	}
	else if (answer === "2") {
		return "random_negamax";
	} else if (answer === "3"){
		return "negamax";
	}
}

function display_players(player1, player2) {
	io.clear_screen();
	return io.print(player1.name + " is " + player1.marker + ", and " + player2.name + " is " + player2.marker);
}

function get_move(board, marker, name) {
	var spaces = rep.get_available_spaces(board),
		board_with_numbers = rep.number_board_spaces(board),
		choice;
	io.clear_screen();
	display_board(board_with_numbers);
	choice = get_move_choice(name, marker, spaces);
	return (choice - 1);
}

function get_move_choice(name, marker, spaces) {
	return io.ask(name + ", where would you like to play your " + marker + "?", {limit: spaces});
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
	display_result(final_state.win, final_state.last_player);
}

function display_result(win, last_player) {
	if (win === true) {
		return io.print(last_player.name + " (" + last_player.marker + ") wins!");
	} else {
		return io.print("Game tied!");
	}
}

function get_play_again(player1_name, player2_name) {
	return io.ask(player1_name + ", would you like to\n\n" +
					"  1) play another game against " + player2_name + "?\n" +   
	   				"  2) play a new game?\n" +
	   				"  3) or, leave for now?", {limit: ["1", "2", "3"]});
}

function display_goodbye() {
	return io.print("Bye!");
}


exports.get_move = get_move;
exports.get_game_type = get_game_type;
exports.get_player1_info = get_player1_info;
exports.get_player2_info = get_player2_info;
exports.get_play_again = get_play_again;
exports.get_ai_level = get_ai_level;
exports.display_players = display_players;
exports.display_result = display_result;
exports.display_goodbye = display_goodbye;
exports.display_board = display_board;
exports.display_final_state = display_final_state;



