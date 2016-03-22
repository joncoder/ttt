var play_again = '../src/play_again',
	  assert = require('chai').assert,
	  mockery = require('mockery');

describe('play again options', function () {

  it('should start game with same players with option 1', function () {
    var result;
    mockery.enable({ useCleanCache: true });
    mockery.registerAllowable('../src/play_again');
    mockery.registerSubstitute('./play', '../spec/mocks/mock_play');
    result = require(play_again).play_again({name: 'name1'},{name: 'name2'},"1");
    assert.deepEqual({player1: {name: 'name1'}, player2: {name: 'name2'}}, result);
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should start game with new players with option 2', function () {
    var result;
    mockery.enable({ useCleanCache: true });
    mockery.registerSubstitute('./play', '../spec/mocks/mock_play');
    mockery.registerSubstitute('./play', '../spec/mocks/mock_play');
    result = require(play_again).play_again({},{},"2");
    assert.equal("get_game_info called", result);
    
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should display Bye with option 3', function () {
  	var result;
    mockery.enable({ useCleanCache: true });
    mockery.registerSubstitute('./play', '../spec/mocks/mock_play');
    mockery.registerSubstitute('./play', '../spec/mocks/mock_play');

  	result = require(play_again).play_again({},{},"3");
    assert.equal("Bye!", result);
    
    mockery.deregisterAll();
    mockery.disable();
  });
 
});