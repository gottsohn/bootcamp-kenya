Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    while(--i>=0) {
        j=Math.floor(Math.random() * (i+1));
        
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
};

var array = ['Monday','Tuesday','Wednesday','Friday','Saturday','Sunday'];
var result = array.shuffle();
console.log(result);