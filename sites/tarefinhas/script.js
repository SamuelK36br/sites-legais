// >> SELETORES:
const salvarTarefa = document.querySelector("#salvarTarefa");

const stt_btn = document.querySelector("#stt");

const form = document.querySelector("#criar-tarefa form");

const audio = {
	salvar: document.getElementById("#salvarTarefa-audio"),
	apagar: document.getElementById("#apagarTarefa-audio")
}

const input = document.querySelector("#criar-tarefa input");

const tarefasContainer = document.querySelector(".tarefas-container");

// >> SCRIPT:
// Cancelar envio do formulário:
form.onsubmit = e => e.preventDefault();

// Criar Tarefas:
function criarElementos() {
	/* div.tarefa: */
	const tarefa = document.createElement("div");
	tarefa.classList.add("tarefa");
	
	/* div.input-e-label: */
	const inputELabel = document.createElement("div");
	inputELabel.classList.add("input-e-label");
	
	/* checkbox: */
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	
	/* label: */
	const label = document.createElement("label");
	label.innerText = input.value;
	
	/* img (apagar tarefa): */
	const apagarTarefa = document.createElement("img");
	apagarTarefa.src = "assets/deletarTarefa.svg";
	
	/* Eventos: */
	checkbox.onchange = function () {
		label.classList.toggle("cortado");
	}
	
	label.onclick = function () {
		checkbox.checked = !checkbox.checked;
		label.classList.toggle("cortado");
	}
	
	apagarTarefa.onclick = function () {
		const resposta = confirm("Tem certeza que quer apagar essa tarefa?");
		if (resposta) tarefa.remove();
	}
	
	/* Anexar elementos: */
	inputELabel.appendChild(checkbox);
	inputELabel.appendChild(label);
	tarefa.appendChild(inputELabel);
	tarefa.appendChild(apagarTarefa);
	tarefasContainer.appendChild(tarefa);
}

salvarTarefa.onclick = criarElementos;

// Voz para texto (stt):
const captarVoz = new webkitSpeechRecognition();

captarVoz.onresult = e => input.value = e.results[0][0].transcript;

captarVoz.onnomatch = () => alert("Não foi possível transcrever sua voz.");

stt_btn.onclick = () => captarVoz.start();

// Aviso ao sair:
window.onbeforeunload = function(e) {
	e.preventDefault();
	e.returnValue = "";
}