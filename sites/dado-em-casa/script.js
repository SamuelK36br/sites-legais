// -→ SELETORES: {
const dados = {
	d20: document.querySelector("#d20"),
	d12: document.querySelector("#d12"),
	d8: document.querySelector("#d8"),
	d6: document.querySelector("#d6"),
	d4: document.querySelector("#d4")
};
const { d20, d12, d8, d6, d4 } = dados;

const soma = document.querySelector("#soma");

const todosDadosJogados = document.querySelector("#todosDadosJogados");

const labelNumDados = document.querySelector("label[for=numDados]");
const numDados = document.querySelector("#numDados");

const gifDados = document.querySelectorAll(".dadoGif");
//}
/* ------------------------------------- */
// -→ SCRIPT:
function jogarDado(indicador, dado) {
	const div = document.createElement("div");
	div.id="dadosJogados";
	indicadorDadoJogado([indicador, div]);
	for (let i = 0; i < numDados.value; i++) {
		const rngResult = rng(dado);
		lista(rngResult, soma.value, div);
	}
	todosDadosJogados.appendChild(div);
}

/* RNG: */
function rng(num) {
	const a = Math.ceil(Math.random() * num);
	return a;
}

/* Exibição dos dados: */
function lista(rng, somaRng, div) {
	const Soma = Number(somaRng);
	const p = document.createElement("p");
	p.id="valor";
	if (Soma) {
		p.innerHTML = `${rng} + ${Soma} = ${rng + Soma}`;
	} else {
		p.innerHTML = rng;
	}
	div.appendChild(p);
}
function indicadorDadoJogado(p) {
	const nome = document.createElement("p");
	nome.id="indicador";
	nome.innerHTML = p[0];
	p[1].appendChild(nome);
}

/* Quantidade de dados - LABEL & INPUT: */
labelNumDados.innerHTML = numDados.value;
numDados.oninput = () => labelNumDados.innerHTML = numDados.value;

/* Eventos dados: */
d20.onclick = () => jogarDado("D20: ", 20);
d12.onclick = () => jogarDado("D12: ", 12);
d8.onclick = () => jogarDado("D8: ", 8);
d6.onclick = () => jogarDado("D6: ", 6);
d4.onclick = () => jogarDado("D4: ", 4);