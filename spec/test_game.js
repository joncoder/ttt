var assert = require('chai').assert,
    game = require('../src/game.js'),
    helper = require('../src/helper_functions.js'),
    board = require('../src/board.js');

describe('games plays until game over', function () {

  it('should end game when game over', function () {
  	var initial_board = [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        player1 = {'player': 'ai', 'marker': 'X'},
        player2 = {'player': 'ai', 'marker': 'O'},
        final_game_state = game.play_game(initial_board.slice(0), player1, player2),
        final_board = final_game_state.final_board,
        last_player = final_game_state.last_player.marker,
        opponent = final_game_state.opponent.marker;
        
    assert.equal(initial_board.length, final_board.length);
    assert.isTrue(helper.count_items_in_array(initial_board, " ") > helper.count_items_in_array(final_board, " "));
    assert.isTrue(helper.count_items_in_array(final_board, last_player) >= helper.count_items_in_array(final_board, opponent));
  });
});