var likesV = [];
var like = {};

function likesF(item) {
 likesV.push(item);
 
 document.getElementById("likesP").innerHTML = likesV.length + " people have liked the page";
 return(likesV);
}

