// Functions to implement effects of items which will need to be added to the UI
// I'd say we should have a checkbox full of ~10 items where the player can pick about 3
// Shield can be implemented with this
function useItem(hero){
	for(var i = 0; i < 3; i++){
		switch(hero.items[i]){
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
				break:
			case "throwingStar":
				throwingStar(hero);
				break;
			case "poison":
				poison(hero);
				break;
			case "aBucketOfChildrensTears":
				aBucketOfChildrensTears(hero);
				break;
			case "theLastKnownBison":
				theLastKnownBison(hero);
				break;
		}
	}
}

function healthPotion(){
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