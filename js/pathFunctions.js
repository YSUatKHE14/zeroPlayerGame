function generalAttack(attacker, receiver){
	if(attacker.attack > receiver.defense){
		receiver.health = receiver.health - (attacker.attack - receiver.defense);
	}
	else {
		 receiver.health -= 2;
	}
}
function wolvesAttack() {
var wolf = new Character();
		wolf.health = 30;
		wolf.attack = 5;
		wolf.defense = 5;

	while(wolf.health > 0 && hero.health > 0)
	{
		var chance = Math.floor((Math.random() * 100) + 1);
		if(chance < 20){
			document.getElementById("path").innerHTML += "<br />" + hero.health;
			generalAttack(wolf, hero);
			document.getElementById("path").innerHTML += "<br />wolf has attacked";
			document.getElementById("path").innerHTML += "<br />" + hero.health;
		}
		else {
			document.getElementById("path").innerHTML += "<br />" + wolf.health;
			generalAttack(hero, wolf);
			document.getElementById("path").innerHTML += "<br />hero has attacked";
			document.getElementById("path").innerHTML += "<br />" + wolf.health;
		}
		update_status();
	}
}

function banditsAttack() {
var bandit = new Character();
		bandit.health = 40;
		bandit.attack = 10;
		bandit.defense = 5;
	while(bandit.health > 0 && hero.health > 0)
	{
		var chance = Math.floor((Math.random() * 100) + 1);
		if(chance < 30){
			document.getElementById("path").innerHTML += "<br />" + hero.health;
			generalAttack(bandit, hero);
			document.getElementById("path").innerHTML += "<br />bandit has attacked";
			document.getElementById("path").innerHTML += "<br />" + hero.health;
		}
		else {
			document.getElementById("path").innerHTML += "<br />" + bandit.health;
			generalAttack(hero, bandit);
			document.getElementById("path").innerHTML += "<br />hero has attacked";
			document.getElementById("path").innerHTML += "<br />" + bandit.health;
		}
		update_status();
	}
}
function trollsAttack() {
var troll = new Character();
		troll.health = 50;
		troll.attack = 25;
		troll.defense = 15;
	while(troll.health > 0 && hero.health > 0)
	{
		var chance = Math.floor((Math.random() * 100) + 1);
		if(chance < 35){
			document.getElementById("path").innerHTML += "<br />" + hero.health;
			generalAttack(troll, hero);
			document.getElementById("path").innerHTML += "<br />troll has attacked";
			document.getElementById("path").innerHTML += "<br />" + hero.health;
		}
		else {
			document.getElementById("path").innerHTML += "<br />" + troll.health;
			generalAttack(hero, troll);
			document.getElementById("path").innerHTML += "<br />hero has attacked";
			document.getElementById("path").innerHTML += "<br />" + troll.health;
		}
		update_status();
	}
}

function golemsAttack() {
var golem = new Character();
		golem.health = 60;
		golem.attack = 10;
		golem.defense = 50;
	while(golem.health > 0 && hero.health > 0)
	{
		var chance = Math.floor((Math.random() * 100) + 1);
		if(chance < 40){
			document.getElementById("path").innerHTML += "<br />" + hero.health;
			generalAttack(golem, hero);
			document.getElementById("path").innerHTML += "<br />golem has attacked";
			document.getElementById("path").innerHTML += "<br />" + hero.health;
		}
		else {
			document.getElementById("path").innerHTML += "<br />" + golem.health;
			generalAttack(hero, golem);
			document.getElementById("path").innerHTML += "<br />hero has attacked";
			document.getElementById("path").innerHTML += "<br />" + golem.health;
		}
		update_status();
	}
}

function dragonAttack() {
// atk 30
var dragon = new Character();
		dragon.health = 60;
		dragon.attack = 30;
		dragon.defense = 30;
	while(dragon.health > 0 && hero.health > 0)
	{
		var chance = Math.floor((Math.random() * 100) + 1);
		if(chance < 50){
			document.getElementById("path").innerHTML += "<br />" + hero.health;
			generalAttack(dragon, hero);
			document.getElementById("path").innerHTML += "<br />dragon has attacked";
			document.getElementById("path").innerHTML += "<br />" + hero.health;
		}
		else {
			document.getElementById("path").innerHTML += "<br />" + dragon.health;
			generalAttack(hero, dragon);
			document.getElementById("path").innerHTML += "<br />hero has attacked";
			document.getElementById("path").innerHTML += "<br />" + dragon.health;
		}
		update_status();
	}
}

function blackSquirrelAttacks() {

}
