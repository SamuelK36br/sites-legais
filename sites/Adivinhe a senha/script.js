/* SELETORES: */
const fotoCadeado = document.getElementsByClassName("cadeado");
const resposta = document.getElementsByClassName("resposta");
const inputEnigma = document.getElementsByClassName('inputEnigma');

/* SCRIPT: */
function resultado(index, senha) {
  if (inputEnigma[index].value===senha){
    /* Mostrar Mensagem Certa: */
    resposta[index].style.visibility = 'visible';
    resposta[index].style.position = 'relative';
    resposta[index].innerHTML="A senha está CORRETA!";
    fotoCadeado[index].src="https://i.imgur.com/LusLjmS.png";
  }
  else {
    /* Mostrar Mensagem Errada: */
    resposta[index].style.visibility = 'visible';
    resposta[index].style.position = 'relative';
    resposta[index].innerHTML="A senha está ERRADA!";
    /* Ocultar Mensagem Errada: */
    setTimeout(() => {
      resposta[index].style.visibility='hidden';
      resposta[index].style.position='absolute';
    }, 3000);
  }
}

function enigmaUm(){
  resultado(0, '472');
}
function enigmaDois(){
  resultado(1, '095');
}
function enigmaTres(){
  resultado(2, '713');
}
function enigmaQuatro(){
  resultado(3, '473');
}
function enigmaCinco(){
  resultado(4, '459');
}
function enigmaSeis(){
  resultado(5, '042');
}
function enigmaSete(){
  resultado(6, '139');
}
function enigmaBonus(){
  resultado(7, '0953');
}
inputEnigma[0].onchange=enigmaUm;
inputEnigma[1].onchange=enigmaDois;
inputEnigma[2].onchange=enigmaTres;
inputEnigma[3].onchange=enigmaQuatro;
inputEnigma[4].onchange=enigmaCinco;
inputEnigma[5].onchange=enigmaSeis;
inputEnigma[6].onchange=enigmaSete;
inputEnigma[7].onchange=enigmaBonus;