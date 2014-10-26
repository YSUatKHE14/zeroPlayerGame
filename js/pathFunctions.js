function generalAttack(attacker, receiver){
	if(attacker.attack > receiver.defense){
		receiver.health = receiver.health - (attacker.attack - receiver.defense);
	}
	else {
		 receiver.health -= 2;
	}
}
var damageTaken = 0;
var totalDamageDealt = 0;
var totalDamageTaken = 0;
var totalKills = 0;
var totalTurns = 0;
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
			damageTaken = hero.health;
			generalAttack(wolf, hero);
			if(chance % 2 == 0){
				print_to_path("The wolf ran up to you and bit you for " + (damageTaken - hero.health) + " Damage");
			}else{
				print_to_path("The wolf clawed you for " + (damageTaken - hero.health) + " Damage");
			}
		}
		else {
			print_to_path(wolf.health);
			generalAttack(hero, wolf);
			print_to_path("hero has attacked");
			print_to_path(wolf.health);
		}
		update_status();
		totalKills += 1;
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
			damageTaken = hero.health;
			generalAttack(bandit, hero);
			if(chance % 2 == 0){
				print_to_path("A clan of bandits knock you on the ground kicking you for " + (damageTaken - hero.health) + " Damage");
			}else{
				print_to_path("A bandit snuck up from behind you and stabbed you dealing " + (damageTaken - hero.health) + " Damage");
			}
		}
		else {
			print_to_path(bandit.health);
			generalAttack(hero, bandit);
			print_to_path("hero has attacked");
			print_to_path(bandit.health);
		}
		update_status();
		totalKills += 1;
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
			damageTaken = hero.health;
			generalAttack(troll, hero);
			if(chance % 2 == 0){
				print_to_path("Threw a small axe at you, hitting your chest dealing " + (damageTaken - hero.health) + " Damage");
			}else{
				print_to_path("The Troll smashed you with his club for " + (damageTaken - hero.health) + " Damage");
			}
		}
		else {
			print_to_path(troll.health);
			generalAttack(hero, troll);
			print_to_path("hero has attacked");
			print_to_path(troll.health);
		}
		update_status();
		totalKills += 1;
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
			damageTaken = hero.health;
			generalAttack(golem, hero);
			if(chance % 2 == 0){
				print_to_path("Flails its arms smashing you into the ground. You took " + (damageTaken - hero.health) + " Damage");
			}else{
				print_to_path("Stomps its foot on the ground causing rocks to fall on you from the nearby mountain. You took " + (damageTaken - hero.health) + " Damage");
			}
		}
		else {
			print_to_path(golem.health);
			generalAttack(hero, golem);
			print_to_path("hero has attacked");
			print_to_path(golem.health);
		}
		update_status();
		totalKills += 1;
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
			damageTaken = hero.health;
			generalAttack(dragon, hero);
			if(chance % 2 == 0){
				print_to_path("Breaths green flames at you which inflicted a burn on you. You took " + (damageTaken - hero.health) + " Damage");
			}else{
				print_to_path("Swipes its tail along the floor flinging you into the wall. You took " + (damageTaken - hero.health) + " Damage");
			}
		}
		else {
			print_to_path(dragon.health);
			generalAttack(hero, dragon);
			print_to_path("hero has attacked");
			print_to_path(dragon.health);
		}
		update_status();
		totalKills += 1;
	}
}

function blackSquirrelAttacks() {

}



function Statistics() {
	print_to_path("totalKills: " + totalKills);
	
}
