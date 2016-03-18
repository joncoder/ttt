var rl = require('readline-sync');

function start() {
	var game = require('./game'),
		player1,
		player2,
		game_type,
		final_state;
	
	clear_screen();
	player1 = get_player1_info();
	game_type = get_game_type(player1.name);
	player2 = get_player2_info(game_type, player1);
	final_state = game.play_game([" ", " ", " ", " ", " ", " ", " ", " ", " "], player1, player2);
	console.log(final_state);
	console.log(player1.name + " is " + player1.marker + ", and " + player2.name + " is " + player2.marker)
}

function ask(question, limit) {
	return rl.question(question + "\n", limit);
}

function opponent(marker) {
	return (marker === "X" ? "O" : "X");
}

function clear_screen() {
	process.stdout.write('\033c');
}

function get_player1_info() {
	var player1 = {player: "human"};
	player1.name = ask("May I have your name?");
	player1.marker = ask(player1.name + ", would you like to be X or O?", {limit: ["X", "O"]}).toUpperCase();
	return player1;
}

function get_player2_info(game_type, player1) {
	var player2 = {};
	player2.marker = opponent(player1.marker);
	player2.player = game_type === "1" ? "negamax" : "human";
	player2.name = game_type === "1" ? "the Computer" : ask("What is your friend's name?");
	return player2;
}

function get_game_type(name) {
	return ask(name + ", would you like a 1 or 2 player game?", {limit: ["1", "2"]});
}

function get_move(board, marker) {
	print_board(board);
	return ask(marker + ", where would you like to play?");
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
	console.log(display);
}

exports.get_move = get_move;
exports.start = start;


