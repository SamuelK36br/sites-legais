// >> SELETORES:
const salvarTarefa = document.querySelector("#salvarTarefa");

const stt_btn = document.querySelector("#stt");

const form = document.querySelector("#criar-tarefa form");

const audio = {
	salvar: document.getElementById("#salvarTarefa-audio"),
	apagar: document.getElementById("#apagarTarefa-audio")
}

const input = document.querySelector("#criar-tarefa input");

const tarefasContainer = document.querySelector("#tarefas-container");

// >> SCRIPT:
// Cancelar envio do formulário:
form.onsubmit = e => e.preventDefault();

// Criar Tarefas:



// Speech to Text:
const captarVoz = new webkitSpeechRecognition();

captarVoz.onresult = (e) => input.value = e.results[0][0].transcript;

captarVoz.onnomatch = () => alert("Não foi possível transcrever sua voz.");

stt_btn.onclick = () => captarVoz.start();

// Aviso ao sair:
window.onbeforeunload = function(e) {
	e.preventDefault();
	e.returnValue = "";
}