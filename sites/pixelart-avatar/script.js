import api from 'api';

import customs from './customs.js';

import colors from './colors.js';

import save from './save.js';

// --- SELETORES: ---

const persona = document.getElementById('persona');

const avatarBox = document.getElementById('avatar-box');

const prox = Array.from(document.getElementsByClassName("prox"));

const antr = Array.from(document.getElementsByClassName("antr"));

const count = Array.from(document.getElementsByClassName("count"));

const cores = Array.from(document.getElementsByClassName("cor"));

const hexValues = Array.from(document.getElementsByClassName('hex-value'));

const baixar = document.getElementById('baixar');

const redefinir = document.getElementById("redefinir");

// --- SCRIPT: ---

function search() {
	const s = {};
	
	Object.entries(customs).forEach(arr => {
		const key = arr[0];
		const value = arr[1].value;
		
		switch (key) {
			case 'beard':
			case 'glasses':
			case 'hat':
				if (value) {
					s[`${key}Variant`] = value;
					s[`${key}Probability`] = 100;
				}
				break;
				
			case 'skin':
				s[`${key}Color`] = value;
				break;
				
			default:
				s[`${key}Variant`] = value;
		}
	});
	
	Object.entries(colors).forEach(arr => {
		const key = arr[0];
		const value = arr[1];
		
		s[key] = value;
	});
	
	return new URLSearchParams(s).toString();
}

function updatePersona() {
	api(
		`https://api.dicebear.com/10.x/pixel-art/svg?${search()}`,
		'text'
	).then(p => {
		persona.innerHTML = p;
		document.body.classList.remove('hidden');
	});
}

function updateCustoms(e) {
	const key = customs[e.target.parentElement.id];
	const botao = e.target.className;
	const c = e.target.parentElement.querySelector(".count");
	
	switch (botao) {
		case 'prox':
			key.i++;
			if (key.i >= key.arr.length) key.i--;
			key.value = key.arr[key.i];
			break;
			
		case 'antr':
			key.i--;
			if (key.i < 0) key.i++;
			key.value = key.arr[key.i];
			break;
			
		default:
			throw new Error('Algo de errado.');
	}
	
	updatePersona();
	c.innerHTML = `(${key.i + 1}/${key.arr.length})`;
	save.customs = customs;
	save.set();
}

function updateColors(e) {
	const id = e.target.parentElement.id;
	const corEscolhida = e.target.value.split("#").pop();
	const hexValue = e.target.nextElementSibling;
	
	colors[id] = corEscolhida;
	hexValue.value = corEscolhida;
		
	updatePersona();
	save.colors = colors;
	save.set();
}

function updateHexValues(e) {
	const id = e.target.parentElement.id;
	const corEscolhida = e.target.value.split("#").pop();
	const corInput = e.target.previousElementSibling;
	
	colors[id] = corEscolhida;
	corInput.value = "#" + corEscolhida;
	
	updatePersona();
	save.colors = colors;
	save.set();
}

async function baixarAvatar() {
	const png = await api(`https://api.dicebear.com/10.x/pixel-art/png?size=200&${search()}`, 'blob');
	
	const url = URL.createObjectURL(png);
	
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = "avatar.png";
	document.body.appendChild(anchor);
	anchor.click();
	anchor.remove();
	
	URL.revokeObjectURL(url);
}

function redefinirAvatar() {
	const confirm = window.confirm("Tem certeza que quer redefinir o avatar? Isso não poderá ser desfeito.");
	if (confirm) {
		save.remove();
		location.reload();
	}
}

prox.forEach(b => b.onclick = updateCustoms);
antr.forEach(b => b.onclick = updateCustoms);
cores.forEach(i => i.onchange = updateColors);
hexValues.forEach(hv => hv.onchange = updateHexValues);
baixar.onclick = baixarAvatar;
redefinir.onclick = redefinirAvatar;

// Executados ao carregar a página:
/* Mostrar avatar: */
updatePersona();

/* Mostrar count: */
count.forEach((c) => {
	const key = customs[c.parentElement.id];
	
	c.innerHTML = `(${key.i+1}/${key.arr.length})`;
});

/* Mostrar input cores: */
cores.forEach((c) => {
	const value = colors[c.parentElement.id];
	const hexValue = c.nextElementSibling;
	
	c.value = "#" + value;
	hexValue.value = value;
});

save.set();