var assert = require('chai').assert,
	mockery = require('mockery'),
    human = '../../src/players/human.js';

describe('determines a move', function () {

  it('should select an available space', function () {
	  mockery.enable({ useCleanCache: true });
  	mockery.registerSubstitute('../console/ui', '../../spec/mocks/mock_console_ui');
  	mockery.registerAllowable('../../src/players/human.js');

  	var board = [" ","X","O"," "," "," ","O","X"," "],
  		marker = "X",
  		name = "test_name",
  		result = require(human).determine_move(board, marker, name);
    assert.equal("selected move", result);
    
    mockery.deregisterAll();
    mockery.disable();
  });  
});