var assert = require('chai').assert,
    game = require('../src/game.js'),
    helper = require('../src/helper_functions.js'),
    board = require('../src/board.js');

describe('games plays until game over', function () {

  it('should end game when game over random ai', function () {
  	var initial_board = [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        player1 = {'player': 'random', 'marker': 'X'},
        player2 = {'player': 'random', 'marker': 'O'},
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

  it('game from partway with two unbeatable ai should end in tie', function () {
    var initial_board = ["X", " ", " ", " ", "O", " ", " ", " ", " "],
        player1 = {'player': 'negamax', 'marker': 'X'},
        player2 = {'player': 'negamax', 'marker': 'O'},
        final_game_state = game.play_game(initial_board, player1, player2),
        final_board = final_game_state['final_board'];
        win = final_game_state.win;
    assert.equal(false, board.win(final_board, "O"));
    assert.equal(false, board.win(final_board, "X"));
    assert.equal(false, win);
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

describe('creates a new board', function () {

  it('should create a new 3x3 board', function () {
    assert.deepEqual(board.create_new_board(), game.new_board());
  });
});

describe('creates final state', function () {

  it('should create final state with win false for tie', function () {
    var updated_board = ["X", "X", "O", "O", "O", "X", "X", "O", "X"];
        current_player = {player: "human", name: "name1", marker: "X"};
        opponent = {player: "human", name: "name1", marker: "O"};
        final_state = game.get_final_state(updated_board, current_player, opponent);
    assert.deepEqual(final_state.final_board, updated_board);
    assert.deepEqual(final_state.last_player, current_player);
    assert.deepEqual(final_state.opponent, opponent);
    assert.equal(false, final_state.win);
  });

  it('should create final state with win true for a win', function () {
    var updated_board = ["X", "X", "X", "O", "O", " ", " ", " ", " "];
        current_player = {player: "human", name: "name1", marker: "X"};
        opponent = {player: "human", name: "name2", marker: "O"};
        final_state = game.get_final_state(updated_board, current_player, opponent);
    assert.deepEqual(final_state.final_board, updated_board);
    assert.deepEqual(final_state.last_player, current_player);
    assert.deepEqual(final_state.opponent, opponent);
    assert.equal(true, final_state.win);
  });
});