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