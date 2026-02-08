/* SELETORES: */
const input = document.getElementsByClassName('respostaInput');
const imagem = document.getElementsByClassName('imagemConfirmacao');
const condicao = document.getElementsByClassName("condicao");

/* SCRIPT: */
function resposta(index, resposta) {
  // Resposta Vazia:
  if (input[index].value.length === 0) {
    condicao[index].innerHTML = "O Campo de Resposta Não Deve Estar Vazio.";
    imagem[index].style.visibility='hidden';
    imagem[index].style.position='absolute';
    condicao[index].style.visibility='visible';
    condicao[index].style.position='relative';
 }
 // Resposta Maiúscula:
 else if (input[index].value !== input[index].value.toUpperCase()) {
    condicao[index].innerHTML = "A Resposta Deve Estar Com Todas As Letras Maiúsculas.";
    imagem[index].style.visibility='hidden';
    imagem[index].style.position='absolute';
    condicao[index].style.visibility='visible';
    condicao[index].style.position='relative';
    
    // Resposta Correta:
 } else if (input[index].value === resposta) {
    imagem[index].src="https://i.imgur.com/7leMGBl.png";
    imagem[index].style.visibility='visible';
    imagem[index].style.position='relative';
    condicao[index].style.visibility='hidden';
    condicao[index].style.position='absolute';
    
    // Resposta Errada:
  } else {
    imagem[index].src='https://i.imgur.com/Sn52Arv.png';
    imagem[index].style.visibility='visible';
    imagem[index].style.position='relative';
    condicao[index].style.visibility='hidden';
    condicao[index].style.position='absolute';
  }
}

// ENIGMAS:
function enigma1() {
    resposta(0, "MAQUINA");
}

function enigma2() {
    resposta(1, "ENIGMA");
}

function enigma3() {
    resposta(2, "PALAVRAS");
}

function enigma4() {
    resposta(3, "NOVOMUNDO");
}

function enigma5() {
    resposta(4, "INVERTEBRADO");
}

function enigma6() {
    resposta(5, "WHISKEY");
}

function enigma7() {
    resposta(6, "KILO");
}

function enigma8() {
    resposta(7, "AM")
}

function enigma9() {
    resposta(8, "FRUIR");
}

function enigma10() {
   resposta(9, "BANZATIVO");
}

function enigma11() {
   resposta(10, "GRAMATICALMENTE")
}

function enigma12() {
   resposta(11, "POLEN")
}

function enigma13(){
   resposta(12, "POTENCIAL")
}

function enigma14() {
   resposta(13, "INSTITUCIONALIZACAO")
}

function enigma15() {
   resposta(14, "FOGO")
}

function enigma16() {
   resposta(15, "ATOLAR")
}

function enigma17() {
   resposta(16, "AMOR")
}

function enigma18() {
   resposta(17, "OCEANO")
}

function enigma19() {
   resposta(18, "KARTEFOUR")
}

function enigma20() {
   resposta(19, "TITANIC")
}

function enigma21() {
   resposta(20, "OKTOEIGHT")
}