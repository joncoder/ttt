var ui = '../../src/console/ui',
	  assert = require('chai').assert,
	  mockery = require('mockery');

describe('gets user input', function () {

  beforeEach(function() {
    mockery.enable({ useCleanCache: true });
    mockery.registerAllowable(ui);
    mockery.registerSubstitute('./io', '../../spec/mocks/mock_console_io');
  });

  afterEach(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should get player1 info', function () {
  	var result = require(ui).get_player1_info(),
  		  options = ["X", "O"];
    assert(result.player === "human");
    assert(result.name === "Mock answer");
    assert(options.indexOf(result.marker) > -1);
  });

  it('should get the play type', function () {
  	var result = require(ui).get_game_type("name"),
  		  options = ["1","2"];
    assert(options.indexOf(result) > -1);
  });

  it('should get the ai level', function () {
    var result = require(ui).get_ai_level(),
        options = ["random", "random_negamax", "negamax"];
    assert(options.indexOf(result) > -1);
  });

  it('should get player2 info for 1 player game', function () {
  	var player1 = {player: "human", name: "test", marker: "X"},
  		  game_type = "1",
  		  player2 = require(ui).get_player2_info(player1, game_type),
        level_options = ["random", "random_negamax", "negamax"];
    
    assert(level_options.indexOf(player2.player) > -1);
    assert(player2.name === "the Computer");
    assert(player2.marker === "O");
  });

  it('should get player2 info for 2 player game', function () {
  	var player1 = {player: "human", name: "test", marker: "O"},
  		  game_type = "2",
  		  player2 = require(ui).get_player2_info(player1, game_type);
    
    assert(player2.player === "human");
    assert(player2.name === "Mock answer");
    assert(player2.marker === "X");
  });

  it('should return choice for play again', function () {
  	var result = require(ui).get_play_again("name1", "name2"),
  		  options = ["1","2","3"];
    assert(options.indexOf(result) > -1);
  });

  it('should get the move', function () {
  	var board = [" ","X","O"," "," "," ","O","X"," "],
  		  marker = "X",
  		  result = require(ui).get_move(board, marker),
  		  options = [0,3,4,5,8];
    assert(options.indexOf(result) > -1);
  });  
});

describe('prints output', function () {

  beforeEach(function() {
    mockery.enable({ useCleanCache: true });
    mockery.registerAllowable(ui);
    mockery.registerSubstitute('./io', '../../spec/mocks/mock_console_io');
  });

  afterEach(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should display players', function () {
  	var player1 = {player: 'human', name: 'name1', marker: 'X'},
  		  player2 = {player: 'human', name: 'name2', marker: 'O'},
  		  result = require(ui).display_players(player1, player2);
    assert(result === "name1 is X, and name2 is O");
  });

  it('should display game tied if game tied', function () {
    var win = false,
  		  name = "name",
  		  result = require(ui).display_result(win, name);
    assert(result === "Game tied!");
  });

  it('should display name and marker of winner if game won', function () {
  	var win = true,
  		  last_player = {name: "name1", marker: "X", player: "human"};
  		  result = require(ui).display_result(win, last_player);
    assert(result === "name1 (X) wins!");
  });

  it('should display board', function () {
  	var board = [" ","X","O"," "," "," ","O","X"," "],
  		  result = require(ui).display_board(board);
  	assert.include(result, "   | X | O \n");
  	assert.include(result, "   |   |   \n");
  	assert.include(result, " O | X |   \n");
  });
});

describe('creates board array where available spaces are positions', function () {

  it('should return unchanged array when no available spaces', function () {
    var board = ["X", "X", "O", "O", "O", "X", "X", "O", "X"],
      spaces = require(ui).number_board_spaces(board);
      assert.deepEqual(board, spaces);
  });

  it('should return array of positions for new board', function () {
    var board = [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      spaces = require(ui).number_board_spaces(board);
      assert.deepEqual([1,2,3,4,5,6,7,8,9], spaces);
  });

  it('should return an array with 1 as first item when first space available', function () {
    var board = [" ", "X", "O", "O", "O", "X", "X", "O", "X"],
      spaces = require(ui).number_board_spaces(board);
      assert.deepEqual([1, "X", "O", "O", "O", "X", "X", "O", "X"], spaces);
  });

  it('should return an array with available spaces represented as their position', function () {
    var board = ["X", " ", "O", " ", "O", "X", "X", " ", " "],
      spaces = require(ui).number_board_spaces(board);
      assert.deepEqual(["X", 2, "O", 4, "O", "X", "X", 8, 9], spaces);
  });
});

describe('creates array of available spaces', function () {

  it('should return an empty array when no available spaces', function () {
    var board = ["X", "X", "O", "O", "O", "X", "X", "O", "X"],
      spaces = require(ui).get_available_spaces(board);
      assert.deepEqual([], spaces);
  });

  it('should return an array with item 1 when first space available', function () {
    var board = [" ", "X", "O", "O", "O", "X", "X", "O", "X"],
      spaces = require(ui).get_available_spaces(board);
      assert.deepEqual([1], spaces);
  });

  it('should return an array with position of available spaces', function () {
    var board = ["X", " ", "O", " ", "O", "X", "X", " ", " "],
      spaces = require(ui).get_available_spaces(board);
      assert.deepEqual([2,4,8,9], spaces);
  });
});