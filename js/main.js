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
  wolvesAttack();
  banditsAttack();
  trollsAttack();
  dragonAttack();
  //pathFunction5();

  //finalBoss();
}

function run () {
  initialize_character();
  switch_to_gameplay();
  gameplay();
}

