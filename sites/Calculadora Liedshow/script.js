// -- SELETORES:
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');

const select = document.querySelector('select');

const calcular = document.getElementById('calcular');

const operacao = document.getElementsByTagName('option');

const resultado = document.getElementById('resultado');

// -- SCRIPT:
/* CONVERSAO STRING PARA NÚMERO: */
function converter(numero) {
  const conversao = Number(numero);
  return conversao;
}

/* OPERAÇÕES MATEMÁTICAS: */
function somar(v1, v2) {
  let a = converter(v1);
  let b = converter(v2);
  resultado.innerHTML = `Resultado: ${a + b}`;
}
function subtrair(v1, v2) {
  let a = converter(v1);
  let b = converter(v2);
  resultado.innerHTML = `Resultado: ${a - b}`;
}
function multiplicar(v1, v2) {
  let a = converter(v1);
  let b = converter(v2);
  resultado.innerHTML = `Resultado: ${a * b}`;
}
function dividir(v1, v2) {
  if (v2 === '0') {
    resultado.innerHTML = 'Erro! Divisão por zero! <br> Digite um novo "valor número 2" sem ser zero.';
    sumirResultado();
  }
  else {
    let a = converter(v1);
    let b = converter(v2);
    resultado.innerHTML = `Resultado: ${a / b}`;
  }
}

/* SUMIR RESULTADO APÓS 5 SEGUNDOS: */
function sumirResultado() {
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 3000);
}

/* REALIZAR CÁLCULO: */
function realizarCalculo() {
  // Realizar Operações:
  if (operacao[1].selected) {
    somar(valor1.value, valor2.value);
  }
  else if (operacao[2].selected) {
    subtrair(valor1.value, valor2.value);
  }
  else if (operacao[3].selected) {
    multiplicar(valor1.value, valor2.value);
  }
  else if (operacao[4].selected) {
    dividir(valor1.value, valor2.value);
  }
}
calcular.onclick = realizarCalculo;

/* HABILTAR SELECT E BOTÃO APÓS OS 2 INPUTS SEREM PREENCHIDOS: */
setInterval(() => {
  if (valor1.value.length===0 || valor2.value.length===0) {
    select.disabled=true;
    calcular.disabled=true;
  }
  else {
    select.disabled=false;
    calcular.disabled=false;
  }
},0);
select.onchange=realizarCalculo;