var play = require('./play');

function play_again(player1, player2, option) {
	if (option === "1") {
		return play.start_game(player1, player2);
	}
	else if (option === "2") {
		return play.get_game_info();
	}
	return play.exit();	
}

exports.play_again = play_again;