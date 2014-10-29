//take variables from from
function Character() {
  this.name = "idkMyBFFGil";
  this.health = 100;
  this.attack = 10;
  this.defense = 10;
}
var hero = new Character();

//initialize character
function initialize_character() {
  hero.name = document.getElementById('fname').value;
  hero.health = 100; // Starting health
  hero.attack = document.getElementById('stats').value; // document.getElementById("attack").value
  hero.defense = 10 - document.getElementById('stats').value; // document.getElementById("defense").value
  hero.weapon = document.getElementById('weapon').value; //get chosen weapon
  hero.shield = false; // who knows if they chose the shield?
  hero.alive = true;
	// Total Jankery is happening below
  hero.inventory = document.querySelectorAll('.inventory:checked'); // hey future people, this is an array of checkbox values. so use hero.inventory[i].value; to get what you want. Idk what else to do :'-(
  hero.numberOfItems = hero.inventory.length;
  if(hero.numberOfItems > 3){
	alert("you have too many items!");
  }
  else {
	run();
  }
}

// Black magic
var enemyArray = [wolvesAttack, banditsAttack, trollsAttack, golemsAttack, dragonAttack];

function switch_to_gameplay() {
  document.getElementById('initialForm').style.display = "none";
  document.getElementById('gameplay').style.display = "block";
}

function print_to_path( stringToPrint ) {
  var childElement = document.createElement("p");
  childElement.innerHTML = stringToPrint;
  childElement.style.display = "none";
  document.getElementById("path").appendChild(childElement);
  //document.getElementById("path").scrollTop = document.getElementById("path").scrollHeight;
}

function gameplay() {
  // hero is such a global variable... someone should be smacked
  for(var i = 0; i<enemyArray.length; i++){
    if(hero.alive){
		useItem();
		enemyArray[i](); // the blackest of magic
	}
  }
  statistics();
}

function showResults() {
  $("div#path").children("p").each( function(index) {
	multiplier = Math.floor((Math.random() * 4) + 1);
    $(this).delay(400*index).fadeIn(300, function() {document.getElementById("path").scrollTop = document.getElementById("path").scrollHeight;});
  });
}

function run () {
  switch_to_gameplay();
  gameplay();
  showResults();
}

