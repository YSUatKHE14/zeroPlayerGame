function generalAttack(attacker, receiver, weaponBonus){
	//Weapon bonus of one means attacker gets bonus, 0 = neutral, and -1 = penalty
	if(attacker.attack > receiver.defense){
		if(weaponBonus == 1){
			receiver.health = receiver.health - ((attacker.attack + 2) - receiver.defense);
		}else if(weaponBonus == -1){
			receiver.health = receiver.health - ((attacker.attack - 2) - receiver.defense);
		}else{
			receiver.health = receiver.health - (attacker.attack - receiver.defense);
		}
	}else {
		 receiver.health -= 2;
	}
}
function death(){
	console.log("should be dead");
	hero.alive = false;
}
var healthPlaceholder = 0;
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
			healthPlaceholder = hero.health;
			generalAttack(wolf, hero);
			damageTaken = healthPlaceholder - hero.health;
			totalDamageTaken += damageTaken;
			if(chance % 2 == 0){
				print_to_path("The wolf ran up to you and bit you for " + damageTaken + " Damage");
			}else{
				print_to_path("The wolf clawed you for " + damageTaken + " Damage");
			}
		}
		else {
			healthPlaceholder = wolf.health;
			generalAttack(hero, wolf,0);
			totalDamageDealt += (healthPlaceholder - wolf.health);
			print_to_path(hero.name+" has attacked the wolf!");
			print_to_path("wolfs health: "+wolf.health);
		}
		totalTurns += 1;
	}
	if(wolf.health <= 0){
	console.log("wolf kill");
		totalKills += 1;
	}
	if(hero.health<= 0){
		death();
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
			healthPlaceholder = hero.health;
			generalAttack(bandit, hero);
			damageTaken = healthPlaceholder - hero.health;
			totalDamageTaken += damageTaken;
			if(chance % 2 == 0){
				print_to_path("A clan of bandits knock you on the ground kicking you for " + damageTaken + " Damage");
			}else{
				print_to_path("A bandit snuck up from behind you and stabbed you dealing " + damageTaken + " Damage");
			}
		}
		else {
			healthPlaceholder = bandit.health;
			if(hero.weapon == "Sword"){
				generalAttack(hero, bandit,1);
			}else if(hero.weapon == "Bow"){
				generalAttack(hero, bandit,-1);
			}else{
				generalAttack(hero, bandit,0);
			}
			totalDamageDealt += (healthPlaceholder - bandit.health);
			print_to_path(hero.name+" has attacked a bandit");
			print_to_path("bandit health: "+bandit.health);
		}
		totalTurns += 1;
	}
	if(bandit.health <= 0){
	console.log("bandit kill");
		totalKills += 1;
	}
	if(hero.health<= 0){
		death();
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
			healthPlaceholder = hero.health;
			generalAttack(troll, hero);
			damageTaken = healthPlaceholder - hero.health;
			totalDamageTaken += damageTaken;
			if(chance % 2 == 0){
				print_to_path("a troll threw a small axe at you, hitting your chest dealing " + damageTaken + " Damage");
			}else{
				print_to_path("The Troll smashed you with his club for " + damageTaken + " Damage");
			}
		}
		else {
			healthPlaceholder = troll.health;
			generalAttack(hero, troll);
			totalDamageDealt += (healthPlaceholder - troll.health);
			print_to_path(hero.name+" has attacked the troll");
			print_to_path("troll health: "+troll.health);
		}
		totalTurns += 1;
	}
	if(troll.health <= 0){
		console.log("troll kill");
		totalKills += 1;
	}
	if(hero.health<= 0){
		death();
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
			healthPlaceholder = hero.health;
			generalAttack(golem, hero);
			damageTaken = healthPlaceholder - hero.health;
			totalDamageTaken += damageTaken;
			if(chance % 2 == 0){
				print_to_path("Flails its arms smashing you into the ground. You took " + damageTaken + " Damage");
			}else{
				print_to_path("Stomps its foot on the ground causing rocks to fall on you from the nearby mountain. You took " + damageTaken + " Damage");
			}
		}
		else {
			healthPlaceholder = golem.health;
			if(hero.weapon == "Mace"){
				generalAttack(hero, golem,1);
			}else if(hero.weapon == "Sword"){
				generalAttack(hero, golem,-1);
			}else{
				generalAttack(hero, golem,0);
			}
			totalDamageDealt += (healthPlaceholder - golem.health);
			print_to_path(hero.name+" has attacked the golem");
			print_to_path("golem health: "+golem.health);
		}
		totalTurns += 1;
	}
	if(golem.health <= 0){
	console.log("golem kill");
		totalKills += 1;
	}
	if(hero.health<= 0){
		death();
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
			healthPlaceholder = hero.health;
			generalAttack(dragon, hero);
			damageTaken = healthPlaceholder - hero.health;
			totalDamageTaken += damageTaken;
			if(chance % 2 == 0){
				print_to_path("Breaths green flames at you which inflicted a burn on you. You took " + damageTaken + " Damage");
			}else{
				print_to_path("Swipes its tail along the floor flinging you into the wall. You took " + damageTaken + " Damage");
			}
		}
		else {
			healthPlaceholder = dragon.health;
			if(hero.weapon == "Bow"){
				generalAttack(hero, dragon,1);
			}else if(hero.weapon == "Mace"){
				generalAttack(hero, dragon,-1);
			}else{
				generalAttack(hero, dragon,0);
			}
			totalDamageDealt += (healthPlaceholder - dragon.health);
			print_to_path(hero.name+" has attacked the dragon!");
			print_to_path("dragon health: "+dragon.health);
		}
		totalTurns += 1;
	}
	if(dragon.health <= 0){
	console.log("dragon kill");
		totalKills += 1;
	}
	if(hero.health<= 0){
		death();
	}
}

function blackSquirrelAttacks() {
	// I has no Tail D:
}



function statistics() {
	print_to_path("totalKills: " + totalKills);
	print_to_path("totalTurns: " + totalTurns);
	print_to_path("totalDamageDealt: " + totalDamageDealt);
	print_to_path("totalDamageTaken: " + totalDamageTaken);
}
