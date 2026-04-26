// >> SELETORES:
const salvarTarefa = document.querySelector("#salvarTarefa");

const stt_btn = document.querySelector("#stt");

const form = document.querySelector("#criar-tarefa form");

const audio = {
	salvar: document.getElementById("salvarTarefa-audio"),
	apagar: document.getElementById("apagarTarefa-audio")
}

const input = document.querySelector("#criar-tarefa input");

const tarefasContainer = document.querySelector(".tarefas-container");

// >> SCRIPT:
// Cancelar reload do formulário:
form.onsubmit = e => e.preventDefault();

// Criar Tarefas:
function criarElementos(c = false, l = input.value) {
	/* div.tarefa: */
	const tarefa = document.createElement("div");
	tarefa.classList.add("tarefa");
	
	/* div.input-e-label: */
	const inputELabel = document.createElement("div");
	inputELabel.classList.add("input-e-label");
	
	/* checkbox: */
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.checked = c;
	
	/* label: */
	const label = document.createElement("label");
	label.innerText = l;
	
	/* img (apagar tarefa): */
	const apagarTarefa = document.createElement("img");
	apagarTarefa.src = "assets/deletarTarefa.svg";
	
	/* Eventos: */
	checkbox.onchange = function() {
		label.classList.toggle("cortado");
		salvarElementosCriados();
	}
	
	if (c) label.classList.add("cortado");
	
	apagarTarefa.onclick = function() {
		const resposta = confirm("Tem certeza que quer apagar essa tarefa?");
		if (resposta) {
			tarefa.remove();
			audio.apagar.play();
			salvarElementosCriados();
			esconderTarefasContainer();
		};
	}
	
	/* Anexar elementos: */
	inputELabel.appendChild(checkbox);
	inputELabel.appendChild(label);
	tarefa.appendChild(inputELabel);
	tarefa.appendChild(apagarTarefa);
	tarefasContainer.appendChild(tarefa);
	
	// Salvar elementos:
	salvarElementosCriados();
}
/* Executar função ao clicar no botão: */
salvarTarefa.onclick = () => {
	if (!(input.validity.valueMissing)) {
		audio.salvar.play();
		criarElementos();
		esconderTarefasContainer();
	}
}


// Salvar elementos criados:
function salvarElementosCriados() {
	const checkboxes = document.querySelectorAll("input[type=checkbox]");
	const labels = document.querySelectorAll(".input-e-label label");
	
	function Objeto(c, l) {
		this.checkbox = c;
		this.label = l;
	}
	
	const arr = [];
	for (let i = 0; i < labels.length; i++) {
		const obj = new Objeto(checkboxes[i].checked, labels[i].innerText);
		arr.push(obj)
	}
	
	localStorage.setItem(
		"tarefinhas-save",
		JSON.stringify(arr)
	)
}


// Criar elementos que estão no localStorage:
function criarElementosPeloSave(item) {
	JSON.parse(item).forEach(obj => {
		criarElementos(obj.checkbox, obj.label);
	})
}
/* Criar elementos ao carregar a página: */
const storage = localStorage.getItem("tarefinhas-save");
if (storage) criarElementosPeloSave(storage);


// Esconder div.tarefas-container, quando não tiver nenhum filho:
function esconderTarefasContainer() {
	if (tarefasContainer.childElementCount < 1) {
		tarefasContainer.classList.add("hidden");
	} else {
		tarefasContainer.classList.remove("hidden")
	}
}
/* Esconder ao carregar a página: */
esconderTarefasContainer();


// Voz para texto (stt):
const captarVoz = new webkitSpeechRecognition();

captarVoz.onresult = e => input.value = e.results[0][0].transcript;

captarVoz.onnomatch = () => alert("Não foi possível transcrever sua voz.");

stt_btn.onclick = () => captarVoz.start();