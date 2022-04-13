document.querySelector(".envoi").addEventListener("click", prevent);
function prevent(event) {
	event.preventDefault();
	add();
}
function add() {
	for (let i=0;i<7;i++) {
	let div = document.querySelector('body>div');
	let input = document.createElement('input');
	input.className = "text";
	setInterval(
		()=>{
			let random1=Math.random()*1000000000 + 1000000000; 
			input.value = Math.round(random1);}
		,50)
	div.appendChild(input);
	}
	barre();
}
function barre() {
	let body = document.querySelector('body');
	let div = document.createElement('div');
	div.className = "barreZone";
	body.appendChild(div);
	for (let i=0;i<7;i++) {
		let barre = document.createElement('div');
		barre.className="barre";
		div.appendChild(barre);
	}
	barreRandom();
	document.querySelector('.envoi').remove();
}
function barreRandom() {
	for (i=0;i<1000;i++){
	setInterval(
		()=>{
			for (i=0;i<7;i++){
				let random2 = Math.random()*500;
				barre = document.querySelector("div.barreZone").children[i];
				barre.style.width = random2+"px";
			}
		},500);
}
}