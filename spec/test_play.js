var play_again = '../src/play_again',
	  assert = require('chai').assert,
	  mockery = require('mockery');

describe('play again options', function () {

  it('should start game with same players with option 1', function () {
    mockery.enable({ useCleanCache: true });
    mockery.registerAllowables(['../src/play_again', './console_play', './console_io']);
    mockery.registerSubstitute('./play', '../spec/mock_play');
    mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
    var result = require(play_again).play_again({name: 'name1'},{name: 'name2'},"1");
    assert.deepEqual({player1: {name: 'name1'}, player2: {name: 'name2'}}, result);
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should start game with new players with option 2', function () {
    mockery.enable({ useCleanCache: true });
    mockery.registerAllowables(['../src/play_again', './console_play', './console_io']);
    mockery.registerSubstitute('./play', '../spec/mock_play');
    mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
    var result = require(play_again).play_again({},{},"2");
    assert.equal("get_game_info called", result);
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should display Bye with option 3', function () {
  	mockery.enable({ useCleanCache: true });
  	mockery.registerAllowables(['../src/play_again', './console_play', './console_io']);
  	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
    mockery.registerSubstitute('./play', '../spec/mock_play');

  	var result = require(play_again).play_again({},{},"3");
    assert.equal("Bye!", result);
    
    mockery.deregisterAll();
    mockery.disable();
  });

  
});

// it('should start game with new players with option 2', function () {
//     mockery.enable({ useCleanCache: true });
//     mockery.registerAllowables(['../src/play_again', './play', './console_play']);
//     mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

//     var result = require(play).play_again({},{},"3");
//     assert.equal("Bye!", result);
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });
// });

//   it('should get the play type', function () {
//   	mockery.enable({ useCleanCache: true });
//   	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
//   	mockery.registerAllowable('../src/console_play');

//   	var result = require(console_play).get_game_type("name"),
//   		options = [1,2];
//     assert(options.indexOf(result) > -1);
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });

//   it('should get player2 info for 1 player game', function () {
//   	mockery.enable({ useCleanCache: true });
//   	mockery.registerAllowables(['../src/console_play', './UI_helpers']);
//   	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

//   	var player1 = {player: "human", name: "test", marker: "X"},
//   		game_type = "1",
//   		player2 = require(console_play).get_player2_info(player1, game_type);
    
//     assert(player2.player === "negamax");
//     assert(player2.name === "the Computer");
//     assert(player2.marker === "O");
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });

//   it('should get player2 info for 2 player game', function () {
//   	mockery.enable({ useCleanCache: true });
//   	mockery.registerAllowables(['../src/console_play', './UI_helpers']);
//   	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

//   	var player1 = {player: "human", name: "test", marker: "O"},
//   		game_type = "2",
//   		player2 = require(console_play).get_player2_info(player1, game_type);
    
//     assert(player2.player === "human");
//     assert(player2.name === "Mock answer");
//     assert(player2.marker === "X");
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });

//   it('should return choice for play again', function () {
//   	mockery.enable({ useCleanCache: true });
//   	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
//   	mockery.registerAllowable('../src/console_play');

//   	var result = require(console_play).get_play_again("name1", "name2"),
//   		options = [1,2,3];
//     assert(options.indexOf(result) > -1);
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });

//   it('should get the move', function () {
//   	mockery.enable({ useCleanCache: true });
//   	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');
//   	mockery.registerAllowables(['../src/console_play', './UI_helpers']);

//   	var board = [" ","X","O"," "," "," ","O","X"," "],
//   		marker = "X",
//   		result = require(console_play).get_move(board, marker),
//   		options = [0,3,4,5,8];
//     assert(options.indexOf(result) > -1);
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });  
// });

// describe('prints output', function () {

//   it('should display players', function () {
//   	mockery.enable({ useCleanCache: true });
//   	mockery.registerAllowable('../src/console_play');
//   	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

//   	var player1 = {player: 'human', name: 'name1', marker: 'X'},
//   		player2 = {player: 'human', name: 'name2', marker: 'O'},
//   		result = require(console_play).display_players(player1, player2);
//     assert(result === "name1 is X, and name2 is O");
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });

//   it('should display game tied if game tied', function () {
//   	mockery.enable({ useCleanCache: true });
//   	mockery.registerAllowable('../src/console_play');
//   	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

//   	var win = false,
//   		name = "name",
//   		result = require(console_play).display_result(win, name);
//     assert(result === "Game tied!");
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });

//   it('should display name of winner if game won', function () {
//   	mockery.enable({ useCleanCache: true });
//   	mockery.registerAllowable('../src/console_play');
//   	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

//   	var win = true,
//   		name = "name",
//   		result = require(console_play).display_result(win, name);
//     assert(result === "name wins!");
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });

//   it('should display board', function () {
//   	mockery.enable({ useCleanCache: true });
//   	mockery.registerAllowable('../src/console_play');
//   	mockery.registerSubstitute('./console_io', '../spec/mock_console_io');

//   	var board = [" ","X","O"," "," "," ","O","X"," "],
//   		result = require(console_play).display_board(board);
//   	assert.include(result, "   | X | O \n");
//   	assert.include(result, "   |   |   \n");
//   	assert.include(result, " O | X |   \n");
    
//     mockery.deregisterAll();
//     mockery.disable();
//   });
// });