// Functions to implement effects of items which will need to be added to the UI
// I'd say we should have a checkbox full of ~10 items where the player can pick about 3
// Shield can be implemented with this
function useItem(){
	for(var i = 0; i < 3; i++){
		switch(hero.item[i]){
			case "healthPotion":
				healthPotion(hero);
				break;
			case "shield":
				shield(hero);
				break;
			case "rabidToad":
				rabidToad(hero);
				break;
			case "bigMac":
				bigMac(hero);
				break;
			case "theLiteralHeartOfALion":
				theLiteralHeartOfALion(hero);
				break;
			case "soupThatIsTooHot":
				soupThatIsTooHot(hero);
				break;
			case "throwingStar":
				throwingStar(hero);
				break;
			case "poison":
				poison(hero);
				break;
			case "aBucketOfChildrensTears":
				aBucketOfChildrensTears(hero);
				break;
		}
	}
}

function healthPotion(hero){
	if(hero.health < 30){
		var potionChance = Math.floor((Math.random() * 20) + 10);
		var print = hero.name+" has ingested a potion and gained "+potionChance+" points of health!";
		hero.health += potionChance;
		print_to_path(print);
		print_to_path(hero.name+"'s health: "+hero.health);
	}
}
function shield(){
}
function rabidToad(){
}
function bigMac(){
}
function theLiteralHeartOfALion(){
}
function soupThatIsTooHot(){
}
function throwingStar(){
}
function poison(){
}
function aBucketOfChildrensTears(){
}
function theLastKnownBison(){
}