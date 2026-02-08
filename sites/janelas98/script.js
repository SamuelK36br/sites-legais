// Hora:
const spanHora = document.querySelector("#hora");
setInterval(() => getDate(new Date()), 0);
function getDate(date) {
  let hora = updtDate(date.getHours());
  let min = updtDate(date.getMinutes());
  
  spanHora.innerText = `${hora}:${min}`;
}
function updtDate(param) {
  if (param < 10) {
    return "0" + param;
  } else {
    return param;
  }
}


// Botão e menu iniciar:
const botaoIniciar = document.querySelector(".botao-iniciar");
const menuIniciar = document.querySelector(".menu-iniciar");
/* Mostrar menu ao clicar no botão: */
function mostrarMenuIniciar() {
  botaoIniciar.classList.toggle("ativo");
  menuIniciar.classList.toggle("hidden");
}
botaoIniciar.onclick = mostrarMenuIniciar;
/* Fechar menu iniciar se clicar fora: */
document.querySelector("main").onclick = () => {
  if (!menuIniciar.classList.contains("hidden")) {
    mostrarMenuIniciar();
  }
}


// Desligar (fechar página):
const desligar = document.querySelector("#desligar");
desligar.onclick = () => {
  window.close();
}



// Reload página ao clicar "Atualizar Janelas98":
const atualizar = document.querySelector("#atualizar");
atualizar.onclick = () => {
  location.reload();
}


// Wallpaper:
const wallpaper = {
  div: document.querySelector("#wallpaper"),
  
  listaExec: document.querySelector("#wallpaper-lista-exec"),
  
  botaoFechar: document.querySelector("#fecharWallpaper"),
  
  opcoes: document.querySelectorAll(".wallpaper-opt"),
  
  CSSVar: [
    "--wallpaper01",
    "--wallpaper02",
    "--wallpaper03",
    "--wallpaper04",
    "--wallpaper05",
    "--wallpaper06",
    "--wallpaper07",
    "--wallpaper08",
  ],
  
  fecharOutros: function() {
    /* Ocultar menu iniciar ao abrir programa: */
    if (!wallpaper.div.classList.contains("hidden")) {
      mostrarMenuIniciar();
    }
    
    /* Ocultar erro se aberto: */
    if (!erro.div.classList.contains("hidden")) {
      erro.div.classList.add("hidden");
    }
    
    /* Ocultar notepad se aberto: */
    else if (!notepad.div.classList.contains("hidden")) {
      notepad.div.classList.add("hidden");
    }
    
    /* Ocultar internet se aberto:*/
    else if (!internet.div.classList.contains("hidden")) {
      internet.div.classList.add("hidden");
    }
  }
}

/* Fechar wallpaper: */
Object.keys(wallpaper).forEach(el => {
  switch (el) {
    case 'listaExec':
      wallpaper[el].onclick = () => {
        wallpaper.div.classList.remove("hidden");
        wallpaper.fecharOutros();
      }
      break;
      
    case 'botaoFechar':
      wallpaper[el].onclick = () => {
        wallpaper.div.classList.add("hidden");
        wallpaper.fecharOutros();
      }
      break;
  }
})

/* Trocar Wallpaper: */
wallpaper.opcoes.forEach((opt, i) => {
  opt.onclick=() => {
    document.body.style.background = `var(${wallpaper.CSSVar[i]})`;
    localStorage.setItem("wallpaper", wallpaper.CSSVar[i]);
  }
})


// Erro:
const erro = {
  div: document.querySelector("#erro"),
  
  botaoFechar: document.querySelector("#fecharErro"),
  
  botaoBeleza: document.querySelector(".erro-botao button"),
  
  som: document.querySelector("#som-erro"),
  
  fecharOutros: function () {
    /* Ocultar notepad se aberto: */
    if (!notepad.div.classList.contains("hidden")) {
      notepad.div.classList.add("hidden");
    }
    
    /* Ocultar internet se aberto: */
    else if (!internet.div.classList.contains("hidden")) {
      internet.div.classList.add("hidden");
    }
    
    /* Ocultar wallpaper se aberto:*/
    else if (!wallpaper.div.classList.contains("hidden")) {
      wallpaper.div.classList.add("hidden");
    }
  }
}

/* Fechar aviso de erro: */
Object.keys(erro).forEach(el => {
  switch (el) {
    case 'botaoBeleza':
    case 'botaoFechar':
      erro[el].onclick = () => {
        erro.div.classList.add("hidden");
        erro.fecharOutros()
      }
      break;
  }
})

/* Erro ao clicar programa com erro: */
const programasComErro = document.querySelectorAll(".erro");
for (let programa of programasComErro) {
  programa.onclick = () => {
    erro.som.play();
    
    if (erro.div.classList.contains("hidden")) {
      erro.div.classList.remove("hidden");
      erro.fecharOutros();
    }
    
    menuIniciar.classList.add("hidden");
  }
}


// Bloco de Nota:
const notepad = {
  div: document.querySelector("#notepad"),
  
  textarea: document.querySelector(".notepad-main textarea"),
  
  programa: document.querySelector("#notepad-programa"),
  
  botaoFechar: document.querySelector("#notepad .programa-botao"),
  
  fecharOutros: function () {
    /* Ocultar erro se aberto: */
    if (!erro.div.classList.contains("hidden")) {
      erro.div.classList.add("hidden");
    }
    
    /* Ocultar internet se aberto: */
    else if (!internet.div.classList.contains("hidden")) {
      internet.div.classList.add("hidden");
    }
    
    /* Ocultar wallpaper se aberto:*/
    else if (!wallpaper.div.classList.contains("hidden")) {
      wallpaper.div.classList.add("hidden");
    }
  }
}

/* Fechar/Abrir bloco de notas: */
Object.keys(notepad).forEach(el => {
  switch (el) {
    case 'programa':
      notepad[el].onclick = () => {
        notepad.div.classList.remove("hidden");
        notepad.fecharOutros();
      }
      break;
    
    case 'botaoFechar':
      notepad[el].onclick = () => {
        notepad.div.classList.add("hidden");
        notepad.fecharOutros();
      }
      break;
  }
})

/* Salvar nota escrita: */
notepad.textarea.oninput = (e) => {
  localStorage.setItem("notepad-value", e.target.value);
}


// Internet Explorer:
const internet = {
  div: document.querySelector("#internet"),
  
  programa: document.querySelector("#internet-programa"),
  
  botaoFechar: document.querySelector("#internet .programa-botao"),
  
  fecharOutros: function () {
    /* Ocultar erro se aberto: */
    if (!erro.div.classList.contains("hidden")) {
      erro.div.classList.add("hidden");
    }
    
    /* Ocultar notepad se aberto: */
    else if (!notepad.div.classList.contains("hidden")) {
      notepad.div.classList.add("hidden");
    }
    
    /* Ocultar wallpaper se aberto:*/
    else if (!wallpaper.div.classList.contains("hidden")) {
      wallpaper.div.classList.add("hidden");
    }
  }
}

/* Fechar/Abrir internet explorer: */
Object.keys(internet).forEach((el)=>{
  switch (el) {
    case 'programa':
      internet[el].onclick = () => {
        internet.div.classList.remove("hidden");
        internet.fecharOutros();
      }
      break;
    
    case 'botaoFechar':
      internet[el].onclick = () => {
        internet.div.classList.add("hidden")
        internet.fecharOutros();
      };
      break;
  }
})


// Eventos de tecla pressionada:
document.onkeydown = (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    mostrarMenuIniciar();
  }
  
  if (botaoIniciar.classList.contains("ativo")) {
    if (e.key === "d") { window.close() }
    
    if (e.key === "w") {wallpaper.fechar()}
  }
}


// Localstorage:
document.body.onload = () => {
  /* Carregar wallpaper ao entrar: */
  const wallpaperStorage = localStorage.getItem("wallpaper");
  if (wallpaperStorage) {
    document.body.style.background = `var(${wallpaperStorage})`;
  } else {
    document.body.style.background = `var(${wallpaper.CSSVar[0]})`;
  }
  
  /* Obter nota escrita anteriormente: */
  const notepadValue = localStorage.getItem("notepad-value");
  notepad.textarea.value = notepadValue;
}