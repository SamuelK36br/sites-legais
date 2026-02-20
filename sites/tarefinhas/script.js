// >> SELETORES:
const criarTarefa = {
	section: document.querySelector("#criar-tarefa"),
	form: document.querySelector("#criar-tarefa form"),
	input: document.querySelector("#criar-tarefa input"),
	salvarTarefa: document.querySelector("#criar-tarefa #salvarTarefa"),
	stt: document.querySelector("#criar-tarefa #stt"),
	audio: {
		salvar: document.querySelector("#saltarTarefa-audio"),
		apagar: document.querySelector("#apagarTarefa-audio")
	}
}

const tarefasAnotadas = document.querySelector("#tarefasAnotadas");

// >> SCRIPT:
// Cancelar envio do formulário:
criarTarefa.form.onsubmit = e => e.preventDefault();

// Speech to Text:
const captarVoz = new webkitSpeechRecognition();

captarVoz.onresult = (e) => criarTarefa.input.value = e.results[0][0].transcript;

captarVoz.onnomatch = () => alert("Não foi possível transcrever sua voz.");

criarTarefa.stt.onclick = () => captarVoz.start();

// Criar Tarefas:
criarTarefa.salvarTarefa.onclick = () => {
	if (criarTarefa.input.value != 0) {
		tarefasAnotadas.classList.remove("hidden");
		criarTarefa.audio.salvar.play();
		criarTarefa.salvarTarefa.disabled = true;
		escreverNovaTarefa();
		
		criarTarefa.audio.salvar.onended = () => criarTarefa.salvarTarefa.disabled = false;
	}
}

let tarefasCriadas = 0;
function escreverNovaTarefa() {
	// Contagem de tarefas criadas:
	tarefasCriadas++;
	
  // Elemetos:
  const tarefa = criarElemento.div();
	const inputELabel = criarElemento.inputELabel();
	const checkbox = criarElemento.checkbox();
	const label = criarElemento.label();
	const img = criarElemento.img();
	
  //	Anexar elementos:
  	/* checkbox e input em div.inputELabel: */
		inputELabel.appendChild(checkbox);
		inputELabel.appendChild(label);
		
		/* div-inputELabel e img ao div.tarefa: */
		tarefa.appendChild(inputELabel);
		tarefa.appendChild(img);
		
		/* tudo: */
		tarefasAnotadas.appendChild(tarefa);
	
	// Concluir tarefa tarefa:
	const todosOsInputs = tarefa.querySelectorAll("input");
	todosOsInputs.forEach((element) => {
		element.onclick = (e) => {
			const labelDoInput = e.target.nextElementSibling;
			labelDoInput.classList.toggle("cortado");
		}
	})
	
	// Deletar tarefa:
	const todasAsImgs = tarefa.querySelectorAll("img");
	todasAsImgs.forEach((element) => {
		element.onclick = (e) => {
			// Confirmação de deleção de tarefa:
			const confirmacao = confirm("Tem certeza que quer deletar essa tarefa?");
			if (confirmacao) {
				criarTarefa.audio.apagar.play();
				tarefasAnotadas.removeChild(tarefa);
			}
			
			// Se houver nenhuma tarefa, ocultar div:
			if (tarefasAnotadas.childElementCount === 0) {
				tarefasAnotadas.classList.add("hidden");
			} else {
				tarefasAnotadas.classList.remove("hidden");
			}
		}
	})
}

// Funções da criação de cada elemento:
const criarElemento = {
	div: function () {
		const div = document.createElement("div");
		div.classList.add("tarefa");
		
		return div;
	},
	
	inputELabel: function () {
		const inputELabel = document.createElement("div");
		inputELabel.classList.add("inputELabel");
		
		return inputELabel;
	},
	
	checkbox: function () {
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.id = `tarefa${tarefasCriadas}`;
		
		return checkbox;
	},
	
	label: function () {
		const label = document.createElement("label");
		label.textContent = criarTarefa.input.value;
		label.setAttribute("for", `tarefa${tarefasCriadas}`);
		
		return label;
	},
	
	img: function () {
		const img = document.createElement("img");
		img.src = "assets/deletarTarefa.svg";
		img.setAttribute("id", `img${tarefasCriadas}`);
		
		return img;
	}
}