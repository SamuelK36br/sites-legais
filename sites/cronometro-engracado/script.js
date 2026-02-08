// -- SELETORES:
const elmt = {
  hr: document.querySelector("#hr"),
  min: document.querySelector("#min"),
  seg: document.querySelector("#seg")
}

const varl = {
  hr: 0,
  min: 0,
  seg: 0,
}

const btn = document.querySelector("button");
// -- SCRIPT:
let cronometroVarl;
function cronometro() {
  cronometroVarl = setInterval(() => {
    varl.seg++;
    if (varl.seg > 59) {
      varl.min++;
      varl.seg = 0;
    }
    updateHtml()
  }, 1000);
}

function updateHtml() {
  const hrStrg = String(varl.hr);
  const minStrg = String(varl.min);
  const segStrg = String(varl.seg);
  
  if (segStrg.length > 1) {
    elmt.seg.innerHTML = varl.seg;
  } else {
    elmt.seg.innerHTML = `0${varl.seg}`;
  }
  
  if (minStrg.length > 1) {
    elmt.min.innerHTML = varl.min;
  } else {
    elmt.min.innerHTML = `0${varl.min}`;
  }
  
  if (hrStrg.length > 1) {
    elmt.hr.innerHTML = varl.hr;
  } else {
    elmt.hr.innerHTML = `0${varl.hr}`;
  }
}

// Evento botão:
btn.onclick = () => {
  // Desativar Cronometro:
  if 
  (btn.classList.value
  .includes("btn-apertado")) {
    btn.classList.remove("btn-apertado");
    btn.innerHTML = "Iniciar cronometragem";
    clearInterval(cronometroVarl);
  }
  // Ativar Cronometro.
  else {
    btn.classList.add("btn-apertado");
    btn.innerHTML = "Parar cronometragem";
    cronometro()
  }
}