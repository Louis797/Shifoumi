myList = ['pierre', 'feuille', 'ciseaux'];
let pierre = document.getElementById('pierre');
let feuille = document.getElementById('feuille');
let ciseaux = document.getElementById('ciseaux');
let thing = document.getElementById('result');
let emoji = document.getElementById('emoji');
let ordi = document.getElementById('ordi');
let joueur = document.getElementById('joueur');
let score_ordi = 0;
let score_joueur = 0;

pierre.addEventListener('click', () => {
	pick = 'pierre';
	var result = myList[Math.floor(Math.random() * 3)];
	if (pick == result) {
		thing.innerHTML = 'Egalité';
		emoji.innerHTML = '👊 - 👊';
	} else if (result == 'feuille') {
		thing.innerHTML = 'Perdu';
		emoji.innerHTML = '✋ - 👊';
		score_ordi += 1;
		ordi.innerHTML = 'Ordinateur : ' + score_ordi;
	} else {
		thing.innerHTML = 'Gagné';
		emoji.innerHTML = '✌️ - 👊';
		score_joueur += 1;
		joueur.innerHTML = 'Moi : ' + score_joueur;
	}
});
feuille.addEventListener('click', () => {
	pick = 'feuille';
	var result = myList[Math.floor(Math.random() * 3)];
	if (pick == result) {
		thing.innerHTML = 'Egalité';
		emoji.innerHTML = '✋ - ✋';
	} else if (result == 'ciseaux') {
		thing.innerHTML = 'Perdu';
		emoji.innerHTML = '✌️ - ✋';
		score_ordi += 1;
		ordi.innerHTML = 'Ordinateur : ' + score_ordi;
	} else {
		thing.innerHTML = 'Gagné';
		emoji.innerHTML = '👊 - ✋';
		score_joueur += 1;
		joueur.innerHTML = 'Moi : ' + score_joueur;
	}
});
ciseaux.addEventListener('click', () => {
	pick = 'ciseaux';
	var result = myList[Math.floor(Math.random() * 3)];
	if (pick == result) {
		thing.innerHTML = 'Egalité';
		emoji.innerHTML = '✌️ - ✌️';
	} else if (result == 'pierre') {
		thing.innerHTML = 'Perdu';
		emoji.innerHTML = '👊 - ✌️';
		score_ordi += 1;
		ordi.innerHTML = 'Ordinateur : ' + score_ordi;
	} else {
		thing.innerHTML = 'Gagné';
		emoji.innerHTML = '✋ - ✌️';
		score_joueur += 1;
		joueur.innerHTML = 'Moi : ' + score_joueur;
	}
});

/*

Red,
Orange,
Yellow,
Green,
Blue,
Indigo,
Violet,
Red,
Orange,
Yellow,
Green,
Blue,
Indigo,
Violet,
Red

*/
