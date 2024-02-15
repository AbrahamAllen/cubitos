class dicePool{
	constructor(){
		this.dice = [];
		this.dieCount = 0;
		this.drawZone = [];
		this.rollZone = [];
		this.activeZone = [];
		this.discardZone = [];
	}
	addGreyDie(){
		this.dice.push(new greyDie(this.dieCount));
		this.dice[this.dieCount].gen();
		this.dieCount++;
	}
}

class greyDie{
	constructor(id){
		this.id = id;
		this.faces = ["1 Money", false, false, false, false, false];
		this.activeFace = this.faces[0];
		this.location = "discard";
	}
	
	gen(){
		let die = document.createElement("div");
		die.id = this.id.toString();
		die.className = "die";
		die.style.backgroundColor = "grey";
		document.body.appendChild(die);
	}
	
	roll(){
		this.activeFace = this.faces[Math.floor(Math.random()*6)];
		id.innerHTML = this.activeFace;	
	}
}








const dicepool = new dicePool();
function test(){
	dicepool.addGreyDie();
}