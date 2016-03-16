var assert = require('chai').assert,
    helper = require('../src/helper_functions.js');

describe('counts items in an array', function () {
  
  it('should return 9 for count of spaces in array with 9 spaces', function () {
    assert.equal(9, helper.count_items_in_array([" ", " ", " ", " ", " ", " ", " ", " ", " "], " "));
  });
});

describe('transposes a multidimentional array', function () {
  
  it('should return transposed array', function () {
    assert.deepEqual([[1,4,7],[2,5,8],[3,6,9]], helper.transpose([[1,2,3],[4,5,6],[7,8,9]]));
  });
});