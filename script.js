var counter = [];

function likesF(item) {
 counter.push(item);
 
 document.getElementById("likesP")
  .innerHTML = counter.length;
}


