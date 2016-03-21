var assert = require('chai').assert,
    ui_help = require('../src/UI_helpers.js'),
    empty = ui_help.empty_space_representation(),
    m1 = ui_help.marker1_representation(),
    m2 = ui_help.marker2_representation();

describe('creates empty space and marker representations', function () {

  it('should return string containing a space for empty space', function () {
    	assert.equal(" ", empty);
  });

  it('should return X for marker1', function () {
    	assert.equal("X", m1);
  });

  it('should return O for marker2', function () {
    	assert.equal("O", m2);
  });
});

describe('creates board array where available spaces are positions', function () {

  it('should return unchanged array when no available spaces', function () {
    var board = ["X", "X", "O", "O", "O", "X", "X", "O", "X"],
    	spaces = ui_help.number_board_spaces(board);
    	assert.deepEqual(board, spaces);
  });

  it('should return array of positions for new board', function () {
    var board = [empty,empty,empty,empty,empty,empty,empty,empty,empty],
    	spaces = ui_help.number_board_spaces(board);
    	assert.deepEqual([1,2,3,4,5,6,7,8,9], spaces);
  });

  it('should return an array with 1 as first item when first space available', function () {
    var board = [empty, "X", "O", "O", "O", "X", "X", "O", "X"],
    	spaces = ui_help.number_board_spaces(board);
    	assert.deepEqual([1, "X", "O", "O", "O", "X", "X", "O", "X"], spaces);
  });

  it('should return an array with available spaces represented as their position', function () {
    var board = ["X", empty, "O", empty, "O", "X", "X", empty, empty],
    	spaces = ui_help.number_board_spaces(board);
    	assert.deepEqual(["X", 2, "O", 4, "O", "X", "X", 8, 9], spaces);
  });
});

describe('creates array of available spaces', function () {

  it('should return an empty array when no available spaces', function () {
    var board = ["X", "X", "O", "O", "O", "X", "X", "O", "X"],
    	spaces = ui_help.get_available_spaces(board);
    	assert.deepEqual([], spaces);
  });

  it('should return an array with item 1 when first space available', function () {
    var board = [empty, "X", "O", "O", "O", "X", "X", "O", "X"],
    	spaces = ui_help.get_available_spaces(board);
    	assert.deepEqual([1], spaces);
  });

  it('should return an array with position of available spaces', function () {
    var board = ["X", empty, "O", empty, "O", "X", "X", empty, empty],
    	spaces = ui_help.get_available_spaces(board);
    	assert.deepEqual([2,4,8,9], spaces);
  });
});

describe('changes marker', function () {

  it('should return marker 1 when passed marker 2', function () {
    assert.equal(m1, ui_help.opponent(m2));
  })

  it('should return marker 2 when passed marker 1', function () {
    assert.equal(m2, ui_help.opponent(m1));
  })
});