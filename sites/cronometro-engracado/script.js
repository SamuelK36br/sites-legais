// -- SELETORES:
const botao = document.querySelector('button');
const cronoText = document.getElementById('crono');

// -- SCRIPT:
/* Cronometro: */
let segundos = 0;
let minutos = 0;
let horas = 0;

let intervalo = null;
let clique = 0;

function cronometrar(){
  if (intervalo === null && clique === 0) {
    botao.innerHTML='Parar Cronometragem';
    botao.classList.add('apertado');
    clique=1;
    
    intervalo = setInterval(() => {
      if (segundos >= 0 && segundos < 59) {
        segundos++;
        display();
      }
      else if (segundos === 59) {
        segundos = 0;
        minutos++;
        display();
      }
      if (minutos === 59) {
        minutos=0;
        horas++;
      }
    }, 1000);
  }
  else if (clique === 1) {
    parar();
  }
}

const display = () => {
  cronoText.innerHTML = `${horas}h : ${minutos}m : ${segundos}s`;
}

function parar() {
  clearInterval(intervalo);
  botao.innerHTML='Iniciar Cronometragem';
  botao.classList.remove('apertado');
  intervalo=null;
  clique=0;
}

// Eventos:
botao.onclick=cronometrar;