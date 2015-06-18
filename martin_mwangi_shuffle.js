Array.prototype.shuffle = function(){
    var index1 = this.length, index2, temporary;
    while (--index1 > 0){
        index2 = Math.floor(Math.random() * (index1 + 1));
        temporary = this[index2];
        array[index2] = this[index1];
        array[index1] = temporary;
    }
    return this;
}
var array = ['A','B','C','D','E','F','G','H'];
var result = array.shuffle();
console.log(result);