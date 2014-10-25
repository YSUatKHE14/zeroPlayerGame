//take variables from from
var hero = {
  name: "Hero",
  health: 100,
  attack: 10,
  defense: 10
}

//initialize character
function initialize_character() {
  hero.name = document.getElementById('fname');
  hero.health = 100; // Starting health
  hero.attack = 10; // document.getElementById("attack").value
  hero.defense = 10; // document.getElementById("defense").value
}

function switch_to_gameplay() {
  document.getElementById('initialization').style.display = "none";
  document.getElementById('gameplay').style.display = "block";
}

function update_status() {
  // document.getElementById("health").value = hero.health
}

function gameplay() {
	//pathFunction1();
	//pathFunction2();
	//pathFunction3();
	//pathFunction4();
	//pathFunction5();

	//finalBoss();
}

function run () {
  initialize_character();
  switch_to_gameplay();
  gameplay();
}
