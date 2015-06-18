// Extend the built in array class
Array.prototype.compareAndGetDifference = function(inputArray) {
    // assign the array being compared to currentArray
    var currentArray = this;

    // Now get the one which is longer in length
    if (currentArray.length > inputArray.length) {
        var longerArray = currentArray;
        var shorterArray = inputArray;
    } else {
        var longerArray = inputArray;
        var shorterArray = currentArray;
    }

    // create new array
    // it will carry all the differences
    var differences = [];

    // Now loop over the longer array of data
    // longerArray == longer array
    for (var x = 0; x <= longerArray.length; x++) {

        // 1st check for missing counterparts existing in longer array
        // and do not exist in shorter array
        if (shorterArray[x] && longerArray.indexOf(shorterArray[x]) == -1) {
            differences.push(shorterArray[x]);
        }

        // console.log(longerArray[x])
        if (longerArray[x] && shorterArray.indexOf(longerArray[x]) == -1) {
            // console.log(shorterArray[x]);
            // do not add undefined variable
            if (longerArray[x]) differences.push(longerArray[x]);
        }

    }

    // return the results
    return differences.sort(function(currentArray, inputArray) {
        return typeof currentArray !== 'string';
    });
}

var array_one = [4, 2, 1, 5, 3, 'apple', 11, 21, 8, 'grapes', {}];

var array_two = [4, 2, 1, 5, 3, 'string', 'true', 'orange'];

var the_diff = array_one.compareAndGetDifference(array_two);

// print out currentArray
// console.log(array_one);
// document.write('<h2>Array 1: ' + JSON.stringify(array_one) + "</h2><br/>");

// print out inputArray
// console.log(array_two);
// document.write('<h2>Array 2: ' + JSON.stringify(array_two) + "</h2><br/>");

// print out the differences found between currentArray & inputArray
// console.log(the_diff);
// document.write('<h2>Differences: ' + JSON.stringify(the_diff) + "<br/>");
