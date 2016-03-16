var assert = require('chai').assert,
    ai = require('../src/ai.js');

describe('selects a move', function () {

  it('should select an available space', function () {
  	var board = [" ", "O", "O", " ", "X", " ", " ", "X", " "];
  		//move = ai.determine_move(board);
    assert.equal(" ", board[ai.determine_move(board)]);
    assert.equal(" ", board[ai.determine_move(board)]);
    assert.equal(" ", board[ai.determine_move(board)]);
    assert.equal(" ", board[ai.determine_move(board)]);
    assert.equal(" ", board[ai.determine_move(board)]);
    assert.equal(" ", board[ai.determine_move(board)]);
    assert.equal(" ", board[ai.determine_move(board)]);
    assert.equal(" ", board[ai.determine_move(board)]);
  });
});