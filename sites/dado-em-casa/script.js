// -→ SELETORES: {
const dados = {
  d20: document.querySelector("#d20"),
  d12: document.querySelector("#d12"),
  d8: document.querySelector("#d8"),
  d6: document.querySelector("#d6"),
  d4: document.querySelector("#d4"),
  d100: document.querySelector("#d100")
};
const { d20, d12, d8, d6, d4, d100 } = dados;

const soma = document.querySelector("#soma");

const todosDadosJogados = document.querySelector("#todosDadosJogados");

const labelNumDados = document.querySelector("label[for=numDados]");
const numDados = document.querySelector("#numDados");

const gifDados = document.querySelectorAll(".dadoGif");

const audioDado = document.querySelector("#audioDado");
//}
/* ------------------------------------- */
// -→ SCRIPT:
function jogarDado(indicador, dado) {
  audioDado.play();
  cooldown();
  
  const div = criarDiv();
  indicadorDadoJogado([indicador, div]);
  for (let i = 0; i < numDados.value; i++) {
    const rngResult = rng(dado);
    lista(rngResult, soma.value, div);
  }
  todosDadosJogados.appendChild(div);
}


/* RNG: */
function rng(num) {
  if (num == 100) {
    const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const rngValArr = Math.floor(Math.random() * arr.length);
    return arr[rngValArr];
  }
  else {
    const rngVal = Math.ceil(Math.random() * num);
    return rngVal;
  }
}


/* Exibição de dados jogados: */
let coresIndex = 0;

function criarDiv() {
  const div = document.createElement("div");
  div.id = "dadosJogados";
  
  const cores = ['red', 'blue', 'orange', 'purple', 'gold', 'green', 'aqua', 'Gray', 'DodgerBlue', 'DeepPink'];
  div.style.borderColor = cores[coresIndex];
  if (coresIndex >= cores.length - 1) {
    coresIndex = 0;
  } else {
    coresIndex++;
  }
  return div;
}

function lista(rng, somaRng, div) {
  const Soma = Number(somaRng);
  const p = document.createElement("p");
  p.id = "valor";
  if (Soma) {
    p.innerHTML = `${rng} + ${Soma} = ${rng + Soma}`;
  } else {
    p.innerHTML = rng;
  }
  div.appendChild(p);
}

function indicadorDadoJogado(p) {
  const nome = document.createElement("p");
  nome.id = "indicador";
  nome.innerHTML = p[0];
  p[1].appendChild(nome);
}


/* Quantidade de dados - LABEL & INPUT: */
labelNumDados.innerHTML = numDados.value;
numDados.oninput = () => labelNumDados.innerHTML = numDados.value;


/* Cooldown dado: */
function cooldown() {
  const dadosArr = ["d20", "d12", "d8", "d6", "d4", "d100"];
  for (let i = 0; i < dadosArr.length; i++) {
    dados[dadosArr[i]].disabled=true;
    setTimeout(() => {
      dados[dadosArr[i]].disabled=false;
    }, 1500);
  }
}


/* Eventos dados: */
d20.onclick = () => jogarDado("D20: ", 20);
d12.onclick = () => jogarDado("D12: ", 12);
d8.onclick = () => jogarDado("D8: ", 8);
d6.onclick = () => jogarDado("D6: ", 6);
d4.onclick = () => jogarDado("D4: ", 4);
d100.onclick = () => jogarDado("D100 ", 100);