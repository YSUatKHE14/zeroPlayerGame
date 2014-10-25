function generalAttack(attacker, receiver){
	if(attacker.attack > receiver.defense){
		receiver.health = receiver.health - (receiver.defence - attacker.attack);
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
			generalAttack(wolf, hero);
			console.log("wolf has attacked");
		}
		else {
			generalAttack(hero, wolf);
			console.log("hero ahs attacked");
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