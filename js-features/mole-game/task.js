const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);
for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
 let hole = getHole(holeIndex);
 hole.addEventListener ("click", function() {
  if ( hole.classList.contains( "hole_has-mole" )) {
    counterDead++;
    dead.textContent = counterDead;
  } else {
    counterLost++;
    lost.textContent = counterLost;
  }
 });
}
if (counterDead == 3) {
alert ("win");
counterDead = 0;
dead.textContent = counterDead;
} else if (counterLost == 3) {
   alert ("defeat");
   counterLost = 0;
   lost.textContent = counterLost;
}