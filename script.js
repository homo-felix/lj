var likesV = [];
var like = {};

function likesF(item) {
 likesV.push(item);
 
 document.getElementById("likesP").innerHTML = str(likesV.length) + " likes";
}


