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
	// Total Jankery is happening below
  hero.inventory = document.querySelectorAll('.inventory:checked'); // hey future people, this is an array of checkbox values. so use hero.inventory[i].value; to get what you want. Idk what else to do :'-(
  console.log("peanut butter"+hero.inventory[0].value);
}

function switch_to_gameplay() {
  document.getElementById('initialForm').style.display = "none";
  document.getElementById('gameplay').style.display = "block";
}

function update_status() {
  document.getElementById("status_health").innerHTML = hero.health;
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
  useItem();
  wolvesAttack();
  useItem();
  banditsAttack();
  useItem();
  trollsAttack();
  useItem();
  dragonAttack();
  statistics();
}

function showResults() {
  $("div#path").children("p").each( function(index) {
	multiplier = Math.floor((Math.random() * 4) + 1);
    $(this).delay(400*index).fadeIn(300, function() {document.getElementById("path").scrollTop = document.getElementById("path").scrollHeight;});
  });
}

function run () {
  initialize_character();
  console.log(hero.inventory);
  switch_to_gameplay();
  gameplay();
  showResults();
}

