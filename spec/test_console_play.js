var console_play = '../src/console_play',
	assert = require('chai').assert,
	mockery = require('mockery');

describe('gets user input', function () {

  it('should get player1 info', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerAllowables(['../src/console_play', './UI_helpers']);
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

  	var result = require(console_play).get_player1_info(),
  		options = ["X", "O"];
    assert(result.player === "human");
    assert(result.name === "Mock answer");
    assert(options.indexOf(result.marker) > -1);
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should get the play type', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
  	mockery.registerAllowable('../src/console_play');

  	var result = require(console_play).get_game_type("name"),
  		options = ["1","2"];
    assert(options.indexOf(result) > -1);
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should get the ai level', function () {
    mockery.enable({ useCleanCache: true });
    mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
    mockery.registerAllowable('../src/console_play');

    var result = require(console_play).get_ai_level(),
        options = ["random", "random_negamax", "negamax"];
    assert(options.indexOf(result) > -1);
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should get player2 info for 1 player game', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerAllowables(['../src/console_play', './UI_helpers']);
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

  	var player1 = {player: "human", name: "test", marker: "X"},
  		  game_type = "1",
  		  player2 = require(console_play).get_player2_info(player1, game_type),
        level_options = ["random", "random_negamax", "negamax"];
    
    assert(level_options.indexOf(player2.player) > -1);
    assert(player2.name === "the Computer");
    assert(player2.marker === "O");
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should get player2 info for 2 player game', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerAllowables(['../src/console_play', './UI_helpers']);
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

  	var player1 = {player: "human", name: "test", marker: "O"},
  		game_type = "2",
  		player2 = require(console_play).get_player2_info(player1, game_type);
    
    assert(player2.player === "human");
    assert(player2.name === "Mock answer");
    assert(player2.marker === "X");
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should return choice for play again', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
  	mockery.registerAllowable('../src/console_play');

  	var result = require(console_play).get_play_again("name1", "name2"),
  		options = ["1","2","3"];
    assert(options.indexOf(result) > -1);
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should get the move', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
  	mockery.registerAllowables(['../src/console_play', './UI_helpers']);

  	var board = [" ","X","O"," "," "," ","O","X"," "],
  		marker = "X",
  		result = require(console_play).get_move(board, marker),
  		options = [0,3,4,5,8];
    assert(options.indexOf(result) > -1);
    
    mockery.deregisterAll();
    mockery.disable();
  });  
});

describe('prints output', function () {

  it('should display players', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerAllowable('../src/console_play');
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

  	var player1 = {player: 'human', name: 'name1', marker: 'X'},
  		player2 = {player: 'human', name: 'name2', marker: 'O'},
  		result = require(console_play).display_players(player1, player2);
    assert(result === "name1 is X, and name2 is O");
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should display game tied if game tied', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerAllowable('../src/console_play');
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

  	var win = false,
  		  name = "name",
  		  result = require(console_play).display_result(win, name);
    assert(result === "Game tied!");
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should display name and marker of winner if game won', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerAllowable('../src/console_play');
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

  	var win = true,
  		  last_player = {name: "name1", marker: "X", player: "human"};
  		  result = require(console_play).display_result(win, last_player);
    assert(result === "name1 (X) wins!");
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should display board', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerAllowable('../src/console_play');
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

  	var board = [" ","X","O"," "," "," ","O","X"," "],
  		result = require(console_play).display_board(board);
  	assert.include(result, "   | X | O \n");
  	assert.include(result, "   |   |   \n");
  	assert.include(result, " O | X |   \n");
    
    mockery.deregisterAll();
    mockery.disable();
  });
});