function goTo(name) {
	document.querySelector(name).scrollIntoView({block: "center", behavior: "smooth"});
}

function setPlayerMax(e) {
	document.querySelector('div.number-players').innerText = 'Кол-во игроков ' + e.value;
}

function setCode() {
	let codes = document.querySelectorAll('div.select-code > input[type="range"]');
	var code = '';
	for (var i = codes.length - 1; i >= 0; i--) {
		code = codes[i].value + code;
	}
	document.querySelector('div.room-code').innerText = 'Введённый код '+ code;
}
