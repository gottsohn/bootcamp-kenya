
function reverseIt(data){
 var strChar = String(data).split("");
 var i = strChar.length;
 var revStr = "";
 for (var j = (i-1); j >= 0; j--){ 
   revStr += strChar[j];  
 }
 console.log(revStr);
 }
 reverseIt("");