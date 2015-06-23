//	https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

var shuffles = function(indicies) {

	for (var i = indicies.length-1; i > 0; i--) {

		var j = Math.floor(Math.random() * indicies.length);
		var left = indicies[i];
		var right = indicies[j];

		indicies[i] = right;
		indicies[j] = left;
	}
	
	return indicies;
};

console.log( shuffles(['A','B','C','D','E','F','G']) );