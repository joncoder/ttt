var assert = require('chai').assert,
    board = require('../src/board.js');

describe('creates a default new board', function () {

  it('should return a nine-element array containing strings of spaces', function () {
    var new_board = board.create_new_board();
    assert(Array.isArray(new_board));
    assert.equal(9, new_board.length);
    assert.deepEqual([" ", " ", " ", " ", " ", " ", " ", " ", " "], new_board);
  });
});


describe('creates a new board with input grid-size', function () {

  it('should return a nine-element array with grid-size of 3', function () {
    var new_board = board.create_new_board(3);
    assert(Array.isArray(new_board));
    assert.equal(9, new_board.length);
    assert.deepEqual([" ", " ", " ", " ", " ", " ", " ", " ", " "], new_board);
  });

  it('should return a four-element array with grid-size of 2', function () {
    var new_board = board.create_new_board(2);
    assert(Array.isArray(new_board));
    assert.equal(4, new_board.length);
    assert.deepEqual([" ", " ", " ", " "], new_board);
  });

  it('should return a 16-element array with grid-size of 4', function () {
    var new_board = board.create_new_board(4);
    assert(Array.isArray(new_board));
    assert.equal(16, new_board.length);
  });
});


describe('updates a board with marker', function () {
  
  it('should return board with X in first position', function () {
    var initial_board = board.create_new_board(),
        updated_board = board.update_board(initial_board, 0, "X");
    assert(Array.isArray(updated_board));
    assert.equal(9, updated_board.length);
    assert.deepEqual(["X", " ", " ", " ", " ", " ", " ", " ", " "], updated_board);
  });

  it('should return board with 0 in third position', function () {
    var initial_board = [" ", "O", " ", " ", "X", " ", " ", " ", " "],
      updated_board = board.update_board(initial_board, 2, "O");
    assert(Array.isArray(updated_board));
    assert.equal(9, updated_board.length);
    assert.deepEqual([" ", "O", "O", " ", "X", " ", " ", " ", " "], updated_board);
  });
});