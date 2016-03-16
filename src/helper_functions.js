function transpose(array) {
 	var transposed = array[0].map(function(_, i) { 
  		return array.map(function(row) { 
    		return row[i] 
  		})
	});
	return transposed;
}

function count_items_in_array(array, item){
	var count = 0;
	for(var i = 0; i < array.length; i += 1) {
    	if (array[i] === item) {
        	count += 1;
    	}
    }
    return count;
}


exports.transpose = transpose;
exports.count_items_in_array = count_items_in_array;