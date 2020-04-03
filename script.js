var counter = 3;

function thumbup() {
 counter = counter + 1;
 
 document.getElementById("likes")
  .innerHTML = counter + " votes";
}


