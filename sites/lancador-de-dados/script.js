// -- SELETORES:
/* BOTÕES: */
const btn = document.getElementsByTagName('button');
const [btnD6, btnD20] = btn;

/* MENSAGENS: */
const mensg = document.getElementsByClassName('mensagem');
const [mensgD6, mensgD20] = mensg;

/* FOTOS DADOS: */
const fotosDados = document.getElementsByClassName('fotoDado');
const [fotoD6, fotoD20] = fotosDados;

/* ULTIMO VALOR: */
const ultimosValores = document.getElementsByClassName('ultimoValor');
const [ultimoD6, ultimoD20] = ultimosValores;
// ----------------------------------------
// -- SCRIPT:
/* FOTOS DOS DADOS: */
function imagem(fotoDado, pasta, valor) {
  fotoDado.classList.remove('oculto');
  fotoDado.src=`${pasta}/${valor}.png`;
}

/* FUNÇÃO MENSAGENS: */
function mensagemD6(valor) {
  mensgD6.classList.remove('oculto');
  if (valor===1) {
    mensgD6.innerHTML="Seu dado foi horrível!";
    mensgD6.style.color="red";
  }
  else if (valor===2) {
    mensgD6.innerHTML="Seu dado foi péssimo!";
    mensgD6.style.color="khaki";
  }
  else if (valor===3) {
    mensgD6.innerHTML="Seu dado foi mais ou menos!";
    mensgD6.style.color="orange";
  }
  else if (valor===4) {
    mensgD6.innerHTML="Seu dado foi OK!";
    mensgD6.style.color="green";
  }
  else if (valor===5) {
    mensgD6.innerHTML="Seu dado foi jóia!";
    mensgD6.style.color="aqua";
  }
  else if (valor===6) {
    mensgD6.innerHTML="Seu dado foi extraordinário!!!";
    mensgD6.style.color="magenta";
  }
}
function mensagemD20(valor) {
  mensgD20.classList.remove('oculto');
  if (valor <= 5) {
    mensgD20.innerHTML='Seu dado foi horrível!';
    mensgD20.style.color="red";
  }
  else if (valor>5 && valor<=10) {
    mensgD20.innerHTML="Seu dado foi até que razoável!";
    mensgD20.style.color='orange';
  }
  else if (valor>10 && valor<=15) {
    mensgD20.innerHTML="Seu dado foi muito bom!";
    mensgD20.style.color="green";
  }
  else if (valor>15 && valor<=19) {
    mensgD20.innerHTML="Seu dado é jóia!";
    mensgD20.style.color="aqua";
  }
  else if (valor===20) {
    mensgD20.innerHTML="Seu dado é EXTRAORDINÁRIO!";
    mensgD20.style.color="yellow";
  }
}

/* SUMIR DADO E MOSTRAR ÚLTIMO VALOR: */
function sumirDado(fotoDado, mensgDado) {
  fotoDado.classList.add('oculto');
  mensgDado.classList.add('oculto');
}
function ultimoValor(ultimoDado, valor) {
  ultimoDado.classList.remove('oculto');
  ultimoDado.innerHTML=`Valor do último dado jogado: ${valor}`;
}

/* LANCAR DADO FUNÇÃO: */
function lancarDado(botao, numeroDado, fotoDado, pastaFotoDado, mensagemDado, funcaoMensgDado, ultimoDado) {
  let valor = Math.ceil(Math.random()*numeroDado);
  imagem(fotoDado, pastaFotoDado, valor)
  funcaoMensgDado(valor);
  botao.disabled = true;
  ultimoDado.classList.add('oculto');
  setTimeout(() => {
    sumirDado(fotoDado, mensagemDado);
    ultimoValor(ultimoDado, valor);
    botao.disabled = false;
  }, 5000);
}
/* LANÇAR D6: */
btnD6.onclick=() => {
  lancarDado(btnD6, 6, fotoD6, 'imgD6', mensgD6, mensagemD6, ultimoD6);
}
/* LANÇAR D20: */
btnD20.onclick=() => {
  lancarDado(btnD20, 20, fotoD20, 'imgD20', mensgD20, mensagemD20, ultimoD20);
}
