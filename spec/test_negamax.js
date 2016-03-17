var assert = require('chai').assert,
    negamax = require('../src/negamax.js');

describe('selects a move', function () {

  it('should select an available space', function () {
  	var current_board = [" ", "O", "O", " ", "X", " ", " ", "X", " "],
        marker = "O",
        move = negamax.determine_move(current_board, marker);
    assert.equal(" ", current_board[move]);
  });

  it('should select a winning space', function () {
    assert.equal(0, negamax.determine_move([" ", "O", "O", " ", "X", " ", " ", "X", "X"], "O"));
    assert.equal(7, negamax.determine_move(["O", "X", " ", "O", "X", " ", " ", " ", " "], "X"));
  });

  it('should block opponent winning space', function () {
    assert.equal(0, negamax.determine_move([" ", "O", "O", " ", "X", " ", " ", "X", " "], "X"));
    assert.equal(6, negamax.determine_move(["X", "O", "O", "X", " ", " ", " ", " ", " "], "O"));
    assert.equal(6, negamax.determine_move(["X", "X", "O", " ", "O", " ", " ", " ", " "], "X"));
  });

  it('should create a fork', function () {
    assert.equal(2, negamax.determine_move(['O', ' ', ' ', ' ', ' ', ' ', 'X', 'O', 'X'], "X"));
    assert.equal(7, negamax.determine_move(['X', 'O', 'X', ' ', ' ', ' ', ' ', ' ', 'O'], "O"));
  });

  it('should block a potential fork', function () {
    assert.equal(1, negamax.determine_move([' ', ' ', 'X', ' ', 'O', ' ', 'X', ' ', ' '], "O"));
  });

  it('should start in corner', function () {
    assert.equal(0, negamax.determine_move([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], "O"));
  });

  it('should play in center', function () {
    assert.equal(4, negamax.determine_move(['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], "O"));
  });

  // it('wht', function () {
  //   assert.equal(1, negamax.determine_move([ 'X', 'X', 'O', 'X', 'O', ' ', 'O', ' ', ' ' ]))
  // })
});



describe('returns a score', function () {

  it('should return a score of 0 if no win', function () {
    var board = ["X", " ", " ", " "],
        marker = "O",
        depth = 1;
    assert.equal(0, negamax.score(board, marker, depth));
  })

  it('should return a score of 98 if win and depth 2', function () {
    var board = ["X", "X", " ", " "],
        marker = "X",
        depth = 2;
    assert.equal(98, negamax.score(board, marker, depth));
  })

  it('should return a score of -98 if opponent win and depth 2', function () {
    var board = ["X", "X", " ", " "],
        marker = "O",
        depth = 2;
    assert.equal(-98, negamax.score(board, marker, depth));
  })
});

describe('changes marker', function () {

  it('should return X when passed O', function () {
    assert.equal("X", negamax.opponent("O"));
  })

  it('should return O when passed X', function () {
    assert.equal("O", negamax.opponent("X"));
  })
});