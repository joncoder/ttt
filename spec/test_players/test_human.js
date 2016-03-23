var assert = require('chai').assert,
	mockery = require('mockery'),
    human = '../../src/players/human.js';

describe('determines a move', function () {

  it('should select an available space', function () {
	  mockery.enable({ useCleanCache: true });
  	mockery.registerSubstitute('./io', '../../spec/mocks/mock_console_io');
  	mockery.registerAllowables(['../../src/players/human.js', '../console/get_user_move', './ui']);

  	var board = [" ","X","O"," "," "," ","O","X"," "],
  		marker = "X",
  		name = "test_name",
  		result = require(human).determine_move(board, marker, name),
      options = [0,3,4,5,8];
    assert(options.indexOf(result) > -1);
    
    mockery.deregisterAll();
    mockery.disable();
  });  
});