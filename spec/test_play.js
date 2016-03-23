var play = '../src/play',
	  assert = require('chai').assert,
	  mockery = require('mockery');

describe('play games functions', function () {

  beforeEach(function() {
    mockery.enable({ useCleanCache: true });
    mockery.registerAllowables([play, './console/ui', './play_again', './game', './play', './board']);
    mockery.registerSubstitute('./io', '../../spec/mocks/mock_console_io');
  });

  afterEach(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should get players', function () {
    var players = require(play).get_players();
    assert.isDefined(players.player1);
    assert.isDefined(players.player2);
    assert.isDefined(players.player1.name);
    assert.isDefined(players.player1.player);
    assert.isDefined(players.player1.marker);
    assert.isDefined(players.player2.name);
    assert.isDefined(players.player2.player);
    assert.isDefined(players.player2.marker);  
  });

  it('should put player1 first with coin-toss <0.5', function () {
    var player1 = {name: "name1"},
        player2 = {name: "name2"},
        coin_toss = 0.4,
        player_order = require(play).get_player_order(coin_toss, player1, player2);
    assert.deepEqual({first: player1, second: player2}, player_order);  
  });

  it('should put player2 first with coin-toss >0.5', function () {
    var player1 = {name: "name1"},
        player2 = {name: "name2"},
        coin_toss = 0.6,
        player_order = require(play).get_player_order(coin_toss, player1, player2);
    assert.deepEqual({first: player2, second: player1}, player_order);  
  });

  it('should display Bye! on exit', function () {
    var result = require(play).exit();
    assert.equal("Bye!", result);  
  });
});