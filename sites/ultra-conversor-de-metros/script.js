/* SELETORES: */
const resultado = document.getElementById("resultado");
const input = document.querySelector("input");
const medida1 = document.getElementsByClassName("medidaInicial");
const medida2 = document.getElementsByClassName("medidaFinal");
let resultadoMedida = 0;
const erro = "Algo deu errado.";

// SCRIPT:
function calculo(sinal, valor, mensg, inputVal=input.value) {
  if (sinal === '*') {
    resultadoMedida = inputVal * valor;
    resultado.innerHTML = `${resultadoMedida} ${mensg}`;
  }
  else if (sinal === '/') {
    resultadoMedida = inputVal / valor;
    resultado.innerHTML = `${resultadoMedida} ${mensg}`;
  }
  else {
    console.warn('SINAL INESPERADO NA FUNÇÃO: calculo');
  }
}

function conversao(){
  /* NENHUMA MEDIDA SELECIONADA: */
  if (medida1[0].selected && medida2[0].selected){
      resultado.innerHTML = erro;
  }
  
  /* QUILOMETROS: */
  /* Mensgagem erro: */
  else if (medida1[1].selected && medida2[0].selected){
      resultado.innerHTML = erro;
  }
  else if (medida1[1].selected && medida2[1].selected){
      resultado.innerHTML = erro;
  }
  /* Conversão: */
  else if (medida1[1].selected && medida2[2].selected){
      calculo('*', 10, 'hectometros');
  }
  else if (medida1[1].selected && medida2[3].selected){
      calculo('*', 100, 'decâmetros');
  }
  else if (medida1[1].selected && medida2[4].selected){
      calculo('*', 1000, 'metros');
  }
  else if (medida1[1].selected && medida2[5].selected){
      calculo('*', 10000, 'decímetros');
  }
  else if (medida1[1].selected && medida2[6].selected){
      calculo('*', 100000, 'centímetros');
  }
  else if (medida1[1].selected && medida2[7].selected){
      calculo('*', 1000000, 'milímetros');
  }
  
  /* HECTOMETROS: */
  /* Mensagem erro: */
  else if (medida1[2].selected && medida2[0].selected){
      resultado.innerHTML = erro;
  }
  /* Conversão: */
  else if (medida1[2].selected && medida2[2].selected){
      resultado.innerHTML = erro;
  }
  /* Conversão: */
  else if (medida1[2].selected && medida2[1].selected){
      calculo('/', 10, 'quilômetros');
  }
  else if (medida1[2].selected && medida2[3].selected){
      calculo('*', 10, 'decâmetros');
  }
  else if (medida1[2].selected && medida2[4].selected){
      calculo('*', 100, 'metros');
  }
  else if (medida1[2].selected && medida2[5].selected){
      calculo('*', 1000, 'decímetros');
  }
  else if (medida1[2].selected && medida2[6].selected){
      calculo('*', 10000, 'centímetros');
  }
  else if (medida1[2].selected && medida2[7].selected){
      calculo('*', 100000, 'milímetros');
  }
  
  /* DECÂMETRO: */
  /* Mensagem erro: */
  else if (medida1[3].selected && medida2[0].selected){
      resultado.innerHTML = erro;
  }
  /* Conversão: */
  else if (medida1[3].selected && medida2[3].selected){
      resultado.innerHTML = erro;
  }
  /* Conversão: */
  else if (medida1[3].selected && medida2[1].selected){
      calculo('/', 100, 'quilômetros');
  }
  else if (medida1[3].selected && medida2[2].selected){
      calculo('/', 10, 'hectômetros');
  }
  else if (medida1[3].selected && medida2[4].selected){
      calculo('*', 10, 'metros');
  }
  else if (medida1[3].selected && medida2[5].selected){
      calculo('*', 100, 'decímetros');
  }
  else if (medida1[3].selected && medida2[6].selected){
      calculo('*', 1000, 'centímetros');
  }
  else if (medida1[3].selected && medida2[7].selected){
      calculo('*', 10000, 'milímetros');
  }
  
  /* METROS: */
  /* Mensagem erro: */
  else if (medida1[4].selected && medida2[0].selected){
      resultado.innerHTML = erro;
  }
  else if (medida1[4].selected && medida2[4].selected) {
      resultado.innerHTML = erro;
  }
  /* Conversão: */
  else if (medida1[4].selected && medida2[1].selected){
      calculo('/', 1000, 'quilômetros');
  }
  else if (medida1[4].selected && medida2[2].selected){
      calculo('/', 100, 'hectômetros');
  }
  else if (medida1[4].selected && medida2[3].selected){
      calculo('/', 10, 'decâmetros');
  }
  else if (medida1[4].selected && medida2[5].selected){
      calculo('*', 10, 'decímetros');
  }
  else if (medida1[4].selected && medida2[6].selected){
      calculo('*', 100, 'centímetros');
  }
  else if (medida1[4].selected && medida2[7].selected){
      calculo('*', 1000, 'milímetros');
  }
   
  /* DECIMETRO: */
  /* Mensagem erro: */
  else if (medida1[5].selected && medida2[0].selected){
      resultado.innerHTML = erro;
  }
  else if (medida1[5].selected && medida2[5].selected) {
  resultado.innerHTML = erro;
  }
  /* Conversão: */
  else if (medida1[5].selected && medida2[1].selected){
      calculo('/', 10000, 'quilômetros');
  }
  else if (medida1[5].selected && medida2[2].selected){
      calculo('/', 1000, 'hectômetros');
  }
  else if (medida1[5].selected && medida2[3].selected){
      calculo('/', 100, 'decâmetros');
  }
  else if (medida1[5].selected && medida2[4].selected){
      calculo('/', 10, 'metros');
  }
  else if (medida1[5].selected && medida2[6].selected){
      calculo('*', 10, 'centímetros');
  }
  else if (medida1[5].selected && medida2[7].selected){
      calculo('*', 100, 'milímetros');
  }
  
  /* CENTIMETRO: */
  /* Mensagem erro: */
  else if (medida1[6].selected && medida2[0].selected){
      resultado.innerHTML = erro;
  }
  else if (medida1[6].selected && medida2[6].selected) {
  resultado.innerHTML = erro;
  }
  /* Conversão: */
  else if (medida1[6].selected && medida2[1].selected){
      calculo('/', 100000, 'quilômetros');
  }
  else if (medida1[6].selected && medida2[2].selected){
      calculo('/', 10000, 'hectômetros');
  }
  else if (medida1[6].selected && medida2[3].selected){
      calculo('/', 1000, 'decâmetros');
  }
  else if (medida1[6].selected && medida2[4].selected){
      calculo('/', 100, 'metros');
  }
  else if (medida1[6].selected && medida2[5].selected){
      calculo('/', 10, 'decímetros');
  }
  else if (medida1[6].selected && medida2[7].selected){
      calculo('*', 10, 'milímetros');
  }
  
  /* MILIMETRO: */
  /* Mensagem erro: */
  else if (medida1[7].selected && medida2[0].selected){
      resultado.innerHTML = erro;
  }
  else if (medida1[7].selected && medida2[7].selected) {
  resultado.innerHTML = erro;
  }
  /* Conversão: */
  else if (medida1[7].selected && medida2[1].selected){
      calculo('/', 1000000, 'quilômetros');
  }
  else if (medida1[7].selected && medida2[2].selected){
      calculo('/', 100000, 'hectômetros');
  }
  else if (medida1[7].selected && medida2[3].selected){
      calculo('/', 10000, 'decâmetros');
  }
  else if (medida1[7].selected && medida2[4].selected){
      calculo('/', 1000, 'metros');
  }
  else if (medida1[7].selected && medida2[5].selected){
      calculo('/', 100, 'decimetros');
  }
  else if (medida1[7].selected && medida2[6].selected){
      calculo('/', 10, 'centimetros');
  }
}