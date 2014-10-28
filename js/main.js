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
  var checkedValue = null; 
  hero.inventory = document.querySelector('.inventory:checked').value;
  for(var i=0; hero.inventory[i]; ++i){
        if(hero.inventory[i].checked){
             checkedValue = inputElements[i].value;
             break;
        }
  }
  console.log(hero.inventory);
  console.log(checkedValue);
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
  console.log(hero);
  switch_to_gameplay();
  gameplay();
  showResults();
}

