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
			console.log(hero.health);
			generalAttack(wolf, hero);
			console.log("wolf has attacked");
			console.log(hero.health);
		}
		else {
			console.log(wolf.health);
			generalAttack(hero, wolf);
			console.log("hero has attacked");
			console.log(wolf.health);
		}
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
			console.log(hero.health);
			generalAttack(bandit, hero);
			console.log("bandit has attacked");
			console.log(hero.health);
		}
		else {
			console.log(bandit.health);
			generalAttack(hero, bandit);
			console.log("hero has attacked");
			console.log(bandit.health);
		}
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
			console.log(hero.health);
			generalAttack(troll, hero);
			console.log("troll has attacked");
			console.log(hero.health);
		}
		else {
			console.log(troll.health);
			generalAttack(hero, troll);
			console.log("hero has attacked");
			console.log(troll.health);
		}
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
			console.log(hero.health);
			generalAttack(golem, hero);
			console.log("golem has attacked");
			console.log(hero.health);
		}
		else {
			console.log(golem.health);
			generalAttack(hero, golem);
			console.log("hero has attacked");
			console.log(golem.health);
		}
	}
}

function dragonAttacks() {
// atk 30
var dragon = new Character();
		dragon.health = 60;
		dragon.attack = 30;
		dragon.defense = 30;
	while(dragon.health > 0 && hero.health > 0)
	{
		var chance = Math.floor((Math.random() * 100) + 1);
		if(chance < 50){
			console.log(hero.health);
			generalAttack(dragon, hero);
			console.log("dragon has attacked");
			console.log(hero.health);
		}
		else {
			console.log(dragon.health);
			generalAttack(hero, dragon);
			console.log("hero has attacked");
			console.log(dragon.health);
		}
	}
}

function blackSquirrelAttacks() {

}
