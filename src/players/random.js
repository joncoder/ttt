function determine_move(board) {
	var spaces;
	spaces = board.map(function(value, index){
				return value === " " ? index : value
			 }).filter(function(map_value) {
				return (typeof(map_value) === 'number')
			 });
	random = Math.floor(Math.random() * spaces.length);
	return spaces[random];	
}

exports.determine_move = determine_move;