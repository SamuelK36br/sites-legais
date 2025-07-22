/* SELETORES: */
const fotoCadeado = document.getElementsByClassName("cadeado");
const resposta = document.getElementsByClassName("resposta");
const input = document.getElementsByClassName('inputEnigma');
const botao = document.getElementsByTagName('button');

/* SCRIPT: */
function ocultar(elemento) {
  elemento.style.visibility='hidden';
  elemento.style.position='absolute';
}
function mostrar(elemento) {
  elemento.style.visibility = 'visible';
  elemento.style.position = 'relative';
}

let timeout = null;
function resultado(index, senha) {
  /* Mostrar Mensagem Certa: */
  if (input[index].value===senha){
    mostrar(resposta[index]);
    resposta[index].innerHTML="A senha está CORRETA!";
    fotoCadeado[index].src="https://i.imgur.com/LusLjmS.png";
    /* Alteração do Estilo do Input: */
    input[index].disabled=true;
    input[index].style.color='silver';
    input[index].style.borderColor='green';
    clearTimeout(timeout);
  }
  /* Mostrar Mensagem Errada: */
  else {
    mostrar(resposta[index]);
    resposta[index].innerHTML="A senha está ERRADA!";
    /* Ocultar Mensagem Errada: */
    timeout = setTimeout(() => {
      ocultar(resposta[index]);
    }, 3000);
  }
}

const e = [
  {ind: 0, s: '472'},
  {ind: 1, s: '095'},
  {ind: 2, s: '713'},
  {ind: 3, s: '473'},
  {ind: 4, s: '459'},
  {ind: 5, s: '042'},
  {ind: 6, s: '139'},
  {ind: 7, s: '0953'}
]
for (let i = 0; i < e.length; i++) {
  botao[i].onclick=() => {
    resultado(e[i].ind, e[i].s);
  }
  input[i].onchange=() => {
    resultado(e[i].ind, e[i].s)
  }
}