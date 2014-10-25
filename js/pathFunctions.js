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
			print_to_path(hero.health);
			generalAttack(wolf, hero);
			print_to_path("wolf has attacked");
			print_to_path(hero.health);
		}
		else {
			print_to_path(wolf.health);
			generalAttack(hero, wolf);
			print_to_path("hero has attacked");
			print_to_path(wolf.health);
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
			print_to_path(hero.health);
			generalAttack(bandit, hero);
			print_to_path("bandit has attacked");
			print_to_path(hero.health);
		}
		else {
			print_to_path(bandit.health);
			generalAttack(hero, bandit);
			print_to_path("hero has attacked");
			print_to_path(bandit.health);
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
			print_to_path(hero.health);
			generalAttack(troll, hero);
			print_to_path("troll has attacked");
			print_to_path(hero.health);
		}
		else {
			print_to_path(troll.health);
			generalAttack(hero, troll);
			print_to_path("hero has attacked");
			print_to_path(troll.health);
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
		if(chance < 20){
			print_to_path(hero.health);
			generalAttack(golem, hero);
			print_to_path("golem has attacked");
			print_to_path(hero.health);
		}
		else {
			print_to_path(golem.health);
			generalAttack(hero, golem);
			print_to_path("hero has attacked");
			print_to_path(golem.health);
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
		if(chance < 20){
			print_to_path(hero.health);
			generalAttack(dragon, hero);
			print_to_path("dragon has attacked");
			print_to_path(hero.health);
		}
		else {
			print_to_path(dragon.health);
			generalAttack(hero, dragon);
			print_to_path("hero has attacked");
			print_to_path(dragon.health);
		}
		update_status();
	}
}

function blackSquirrelAttacks() {

}
