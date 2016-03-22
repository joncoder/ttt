function get_game_info() {
	return "get_game_info called";	
}

function start_game(p1, p2) {
	return {player1: p1, player2: p2};	
}

function play_game(player1, player2) {}

function exit() {
	return "Bye!";
}

exports.get_game_info = get_game_info;
exports.start_game = start_game;
exports.play_game = play_game;
exports.exit = exit;