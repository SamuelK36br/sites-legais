/* -- SELETORES: */
const input = document.getElementsByTagName("input");
const metro = document.getElementsByClassName("metro");
const litro = document.getElementsByClassName("litro");
const resultadoMetro = document.getElementById("respostaMetro");
const resultadoLitro = document.getElementById("respostaLitro");

/* -- SCRIPT: */
let respostaMetro = null;
let respostaLitro = null;

function calMetro(sinal, valor, mensg) {
  if (sinal === '*') {
    respostaMetro = input[0].value * valor;
    resultadoMetro.innerHTML = `${respostaMetro} ${mensg}`;
  }
  else if (sinal === '/') {
    respostaMetro = input[0].value / valor;
    resultadoMetro.innerHTML = `${respostaMetro} ${mensg}`;
  }
  else {
    console.warn('SINAL INESPERADO NA FUNÇÃO: metro');
  }
}
function calLitro(sinal, valor, mensg) {
  if (sinal === '*') {
    respostaLitro = input[1].value * valor;
    resultadoLitro.innerHTML = `${respostaLitro} ${mensg}`;
  }
  else if (sinal === '/') {
    respostaLitro = input[1].value / valor;
    resultadoLitro.innerHTML = `${respostaLitro} ${mensg}`;
  }
  else {
    console.warn('SINAL INESPERADO NA FUNÇÃO: litro');
  }
}

function converterMetro(){
  if(metro[1].selected) {
    calMetro('*', 1000, 'milimetros');
  }
  else if(metro[2].selected) {
    calMetro('*', 100, 'centimetros');
  }
  else if(metro[3].selected) {
    calMetro('*', 10, 'decímetros');
  }
  else if(metro[4].selected) {
    calMetro('/', 10, 'decâmetros');
  }
  else if(metro[5].selected) {
    calMetro('/', 100, 'hectômetros');
  }
  else if(metro[6].selected) {
    calMetro('/', 1000, 'quilometros');
  }
}
function converterLitro(){
  if(litro[1].selected) {
    calLitro('*', 1000, 'milílitros');
  }
  else if(litro[2].selected) {
    calLitro('*', 100, 'centílitros');
  }
  else if(litro[3].selected) {
    calLitro('*', 10, 'decilitros');
  }
  else if(litro[4].selected) {
    calLitro('/', 10, 'decâlitros');
  }
  else if(litro[5].selected) {
    calLitro('/', 100, 'hectôlitros');
  }
  else if(litro[6].selected) {
    calLitro('/', 1000, 'quilôlitros');
  }
}