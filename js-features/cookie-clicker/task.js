let counter = 0;

function func() {
  let counter = document.getElementById("clicker__counter");
  if (document.onclick == counter) {
   counter++;
   console.log(counter);
  }
 }

 const image = document.getElementById("cookie");

 function changeSizes() {
    image.width = 200;
    image.height = 200;
    }
 onclick = changeSizes;