import { vbts, rng_palavra } from './verbetes.js';

// -> SELETORES: {
/* Palavras e verbetes: */
const palavra = document.querySelector('div#palavra-e-verbetes h2');
const verbetes = document.querySelectorAll('ol#verbetes li');

/* Select e opções: */
const select = document.querySelector('select')
const opcaoVerbetes = document.querySelectorAll('select option.verbete');
const verificarResposta = document.querySelector('div#palavra-e-verbetes button');

/* Resposta: */
const divisoriaResposta = document.querySelector('main div.divisoria');
const divResposta = document.querySelector('div#resposta');
const resultadoHeader = document.querySelector('div#resposta h2');
const resultadoTexto = document.querySelector('div#resposta p');
const jogarNovamente = document.querySelector('div#resposta button');

/* Audios: */
const audio = {
  // Elementos:
  correto: document.querySelector('#correto'),
  errado: document.querySelector('#errado'),
  
  // Métodos:
  habilitado: function () {
    imgAudio.src = 'imgs/audioLigado.svg';
    imgAudio.alt = "Áudio Habilitado";
    imgAudio.classList.remove("audioDesativado");
  },
  desabilitado: function () {
    imgAudio.src = 'imgs/audioDesligado.svg';
    imgAudio.alt = "Áudio Desabilitado";
    imgAudio.classList.add("audioDesativado");
    },
  obterImagem: function (numero) {
    if (numero === "1") {
      this.habilitado();
    }
    else if (numero === "0") {
      this.desabilitado();
    }
  },
  state: function () {
    const audioStorage = localStorage.getItem("audio");
    
    this.obterImagem(audioStorage);
    
    if (audioStorage) {
      this.correto.volume = audioStorage;
      this.errado.volume = audioStorage;
    }
    else {
      this.correto.volume = "1";
      this.errado.volume = "1";
    }
  }
}
/* Imagem Áudio: */
const imgAudio = document.querySelector('#imgAudio');

/* Recordes: */
const recordes = document.querySelectorAll('#recordes span');
const [recAtual, recMaior] = recordes;
//}

/* ------------------------------------- */

// -> SCRIPT:
console.info('Palavras no total:', vbts.length);

/* RECORDE: */
let recordeAtual = localStorage.getItem("recordeAtual");
let recordeMaior = localStorage.getItem("recordeMaior");
function novoRecordeMaior() {
  if (recordeAtual > recordeMaior) {
    recordeMaior = recordeAtual;
    localStorage.setItem("recordeMaior", recordeMaior);
    recMaior.innerHTML=recordeMaior;
  }
}

window.onload=() => {
  /* OBTER PALAVRA ALEATORIA: */
  palavra.innerText = vbts[rng_palavra].palavra;
  
  /* OBTER VERBETES E OPCÕES: */
  for (let i = 0; i < 4; i++) {
    verbetes[i].innerHTML = vbts[rng_palavra].vbt[i].txt;
    opcaoVerbetes[i].value = vbts[rng_palavra].vbt[i].res;
  }
  
  /* AUDIO STATE: */
  audio.state();
  
  /* RECORDE: */
  recAtual.innerHTML=recordeAtual ? recordeAtual : "0";
  recMaior.innerHTML=recordeMaior ? recordeMaior : "0";
}

/* HABILITAR E DESABILITAR ÁUDIO: */
imgAudio.onclick=() => {
  // Desativar Áudio:
  if (imgAudio.className==="") {
    audio.desabilitado();
    // Local Storage:
    audio.correto.volume="0";
    audio.errado.volume="0";
    localStorage.setItem("audio", "0");
  }
  // Habilitar Áudio:
  else if (imgAudio.className.includes('audioDesativado')) {
    audio.habilitado();
    // Local Storage:
    audio.correto.volume="1";
    audio.errado.volume="1";
    localStorage.setItem("audio", "1");
  }
}

/* FUNÇÕES APÓS VERBETE SELECIONADO: */
select.onchange = () => {
  verificarResposta.classList.remove('oculto');
  verificarResposta.disabled=true;
  
  // Scrollar até verificarResposta:
  window.scrollTo({
  	top: verificarResposta.offsetTop,
  	behavior: 'smooth'
  });
  setTimeout(() => {
    verificarResposta.disabled=false;
  }, 1200);
}

/* APARECER DIV RESPOSTA APÓS BOTÃO APERTADO: */
function aparecerResposta() {
  verificarResposta.classList.add('oculto');
  select.classList.add('oculto')
  verificarResposta.classList.add('oculto');
  
  divResposta.classList.remove('oculto');
  divisoriaResposta.classList.remove('oculto');
}

/* TABELA DE RESULTADO: */
function resultado() {
  for (let i = 0; i < opcaoVerbetes.length; i++) {
    tabelaDeResultados(i);
  }
}
function tabelaDeResultados(num) {
  if (opcaoVerbetes[num].selected) {
    // OPÇÃO CERTA:
    if (opcaoVerbetes[num].value.includes('cer')) {
      resultadoHeader.innerText="Meus parabéns!";
      resultadoTexto.innerText="Este é o real significado!";
      audio.correto.play();
      // Recorde:
      recordeAtual++;
      recAtual.innerHTML=recordeAtual;
      localStorage.setItem("recordeAtual", recordeAtual);
      novoRecordeMaior();
    }
    // OPÇÃO ERRADA:
    else {
      resultadoHeader.innerText="Que pena!";
      resultadoTexto.innerText="Este não é o real significado. Boa sorte na próxima vez!";
      audio.errado.play();
      // Recorde:
      recordeAtual = 0;
      recAtual.innerHTML = recordeAtual;
      localStorage.setItem("recordeAtual", recordeAtual);
      novoRecordeMaior();
    }
  }
}
function verbeteComValueCer() {
  const rayFrom = Array.from(opcaoVerbetes);
  const ray = rayFrom.map((el, i) => {
    if (el.value.includes('err')) {
      verbetes[i].classList.add('err');
    }
    else {
      verbetes[i].classList.add('cer');
    }
  });
  return ray;
}

/* BOTÃO VERIFICAR RESPOSTA: */
verificarResposta.onclick = () => {
  aparecerResposta();
  resultado();
  verbeteComValueCer();
  // Scrollar até jogarNovamente:
  window.scrollTo({
  	top: jogarNovamente.offsetTop,
  	behavior: 'smooth'
  })
  jogarNovamente.disabled=true;
  setTimeout(() => {
    jogarNovamente.disabled=false;
  }, 1200);
};

/* BOTÃO JOGAR NOVAMENTE (reload): */
jogarNovamente.onclick = () => window.location.reload();
