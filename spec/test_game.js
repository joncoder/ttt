var assert = require('chai').assert,
    game = require('../src/game.js'),
    helper = require('../src/helper_functions.js'),
    board = require('../src/board.js');

describe('games plays until game over', function () {

  it('should end game when game over random ai', function () {
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

  it('should end game when game over negamax ai', function () {
    var initial_board = [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        player1 = {'player': 'negamax', 'marker': 'X'},
        player2 = {'player': 'negamax', 'marker': 'O'},
        final_game_state = game.play_game(initial_board.slice(0), player1, player2),
        final_board = final_game_state.final_board,
        last_player = final_game_state.last_player.marker,
        opponent = final_game_state.opponent.marker;
        
    assert.equal(initial_board.length, final_board.length);
    assert.isTrue(helper.count_items_in_array(initial_board, " ") > helper.count_items_in_array(final_board, " "));
    assert.isTrue(helper.count_items_in_array(final_board, last_player) >= helper.count_items_in_array(final_board, opponent));
  });

  it('game with two unbeatable ai 4x4 board should end in tie', function () {
    var initial_board = board.create_new_board(4),
        player1 = {'player': 'negamax', 'marker': 'X'},
        player2 = {'player': 'negamax', 'marker': 'O'},
        final_game_state = game.play_game(initial_board, player1, player2),
        final_board = final_game_state['final_board'];
    assert.equal(false, board.win(final_board, "O"));
    assert.equal(false, board.win(final_board, "X"));
  });

  it('game from partway with two unbeatable ai should end in tie', function () {
    var initial_board = ["X", " ", " ", " ", "O", " ", " ", " ", " "],
        player1 = {'player': 'negamax', 'marker': 'X'},
        player2 = {'player': 'negamax', 'marker': 'O'},
        final_game_state = game.play_game(initial_board, player1, player2),
        final_board = final_game_state['final_board'];
    assert.equal(false, board.win(final_board, "O"));
    assert.equal(false, board.win(final_board, "X"));
  });

  it('game with two unbeatable ai should end in tie', function () {
    var initial_board = [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        player1 = {'player': 'negamax', 'marker': 'X'},
        player2 = {'player': 'negamax', 'marker': 'O'},
        final_game_state = game.play_game(initial_board, player1, player2),
        final_board = final_game_state['final_board'];
    assert.equal(false, board.win(final_board, "O"));
    assert.equal(false, board.win(final_board, "X"));
  });
});