function generalAttack(attacker, receiver){
	if(attacker.attack > receiver.defense){
		receiver.health = receiver.health - (receiver.defence - attacker.attack);
	}
	else {
		return;
	}
}
function wolvesAttack() {
var wolf = {
		health: 30,
		attack: 5,
		defense: 5
	}
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
			generalAttack(hero, wolf);
			console.log("hero has attacked");
		}
	}
}

function banditsAttack() {
	
}

function trollsAttack() {
	
}

function golemsAttack() {
	
}

function dragonAttacks() {
// atk 30
// 
}

function blackSquirrelAttacks() {
	
}