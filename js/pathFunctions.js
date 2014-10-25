function generalAttack(attacker, receiver){
	if(attacker.attack > receiver.defense){
		receiver.health = receiver.health - (receiver.defense - attacker.attack);
	}
	else {
		return;
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
