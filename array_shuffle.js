Array.prototype.shuffleMe = function() {
    // Get the length
    var array_length = this.length;

    // during looping it will start with the length of the array
    // which is the highest value of the array
    var loop_no = array_length;
    while (--loop_no > 0) {
        // generate a random number
        var random_number = Math.floor(Math.random() * (loop_no + 1));
        // console.log(random_number);

        // get the value of the array in the random no position.
        var value = this[random_number];

        // now re-assign the array value above with a value
        // from the same array, value provided by loop_no position
        this[random_number] = this[loop_no];

        // now give the value variable to the array position thar replaced it
        this[loop_no] = value;
    }

    return this;
}

var array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var result = array.shuffleMe();
console.log(result);
