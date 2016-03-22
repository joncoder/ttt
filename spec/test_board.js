var assert = require('chai').assert,
    board = require('../src/board.js');

describe('creates a default new board', function () {

  it('should default return a nine-element array containing empty spaces', function () {
    var new_board = board.create_new_board();
    assert(Array.isArray(new_board));
    assert.equal(9, new_board.length);
    assert.deepEqual([" ", " ", " ", " ", " ", " ", " ", " ", " "], new_board);
  });
});

describe('updates a board with marker', function () {
  
  it('should return board with X in first position', function () {
    var initial_board = [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        updated_board = board.update_board(initial_board, 0, "X");
    assert(Array.isArray(updated_board));
    assert.equal(9, updated_board.length);
    assert.deepEqual(["X", " ", " ", " ", " ", " ", " ", " ", " "], updated_board);
  });

  it('should return board with O in index position 2', function () {
    var initial_board = [" ", "O", " ", " ", "X", " ", " ", " ", " "],
      updated_board = board.update_board(initial_board, 2, "O");
    assert(Array.isArray(updated_board));
    assert.equal(9, updated_board.length);
    assert.deepEqual([" ", "O", "O", " ", "X", " ", " ", " ", " "], updated_board);
  });
});

describe('determines if a valid board position', function () {

  it('should return true if valid space', function () {
    var initial_board = ["X", "O", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(true, board.valid_space(initial_board, 2));
    assert.equal(true, board.valid_space(initial_board, 8));
  });

  it('should return false if not valid space', function () {
    var initial_board = ["X", "O", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(false, board.valid_space(initial_board, 0));
    assert.equal(false, board.valid_space(initial_board, -1));
    assert.equal(false, board.valid_space(initial_board, 9));
  });
});

describe('determine if game tied', function () {

  it('should return true if no available space', function () {
    assert.equal(true, board.game_tied(["X", "X", "O", "O", "O", "X", "X", "O", "X"]));
  });

  it('should return false if available space', function () {
    assert.equal(false, board.game_tied(["X", "X", "O", " ", "O", "X", "X", "O", "X"]));
    assert.equal(false, board.game_tied(board.create_new_board()));
  });
});

describe('determine if game won', function () {

  it('should return true if line contains all player markers', function () {
    assert.equal(true, board.winning_line(["X", "X", "X"], "X"));
    assert.equal(true, board.winning_line(["O", "O", "O"], "O"));
  });

  it('should return false if line contains all opposite markers', function () {
    assert.equal(false, board.winning_line(["X", "X", "X"], "O"));
    assert.equal(false, board.winning_line(["O", "O", "O"], "X"));
  });

  it('should return false if line does not contain all player markers', function () {
    assert.equal(false, board.winning_line(["X", "X", "O"], "X"));
    assert.equal(false, board.winning_line(["O", " ", "O"], "O"));
  });

  it('should return true if board contains a winning line', function () {
    assert.equal(true, board.win(["X", "X", "X", " ", " ", " ", " ", " ", " "], "X"));
    assert.equal(true, board.win([" ", " ", " ", "X", "X", "X", " ", " ", " "], "X"));
    assert.equal(true, board.win([" ", " ", " ", " ", " ", " ", "X", "X", "X"], "X"));
    assert.equal(true, board.win(["O", " ", " ", "O", " ", " ", "O", " ", " "], "O"));
    assert.equal(true, board.win([" ", "O", " ", " ", "O", " ", " ", "O", " "], "O"));
    assert.equal(true, board.win([" ", " ", "O", " ", " ", "O", " ", " ", "O"], "O"));
    assert.equal(true, board.win(["O", " ", " ", " ", "O", " ", " ", " ", "O"], "O"));
    assert.equal(true, board.win([" ", " ", "X", " ", "X", " ", "X", " ", " "], "X"));
  });

  it('should return false if board contains winning line of opposite marker', function () {
    assert.equal(false, board.win(["X", "X", "X", " ", " ", " ", " ", " ", " "], "O"));
  });

  it('should return false if board contains no wins', function () {
    var current_board = ["X", "X", "O", "O", "O", "X", "X", "O", "X"];
    assert.equal(false, board.win(current_board, "X"));
    assert.equal(false, board.win(current_board, "O"));
  });
});

describe('determine if game over', function () {

  it('should return true if game is a tie', function () {
    assert.equal(true, board.game_over(["X", "X", "O", "O", "O", "X", "X", "O", "X"], "X"));
  });

  it('should return true if game is won', function () {
    assert.equal(true, board.game_over(["X", "X", "X", "O", "O", " ", " ", " ", " "], "X"));
  });
});