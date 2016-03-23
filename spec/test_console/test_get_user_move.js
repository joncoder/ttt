var ui = '../../src/console/get_user_move',
	  assert = require('chai').assert,
	  mockery = require('mockery');

describe('gets user input', function () {

  beforeEach(function() {
    mockery.enable({ useCleanCache: true });
    mockery.registerAllowables([ui, './ui']);
    mockery.registerSubstitute('./io', '../../spec/mocks/mock_console_io');
  });

  afterEach(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should get the move', function () {
  	var board = [" ","X","O"," "," "," ","O","X"," "],
  		  marker = "X",
  		  result = require(ui).get_move(board, marker),
  		  options = [0,3,4,5,8];
    assert(options.indexOf(result) > -1);
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