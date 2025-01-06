const fotoCadeado = document.getElementsByClassName("cadeado");
const resposta = document.getElementsByClassName("resposta");

function enigmaUm(){
    const inputEnigmaUm = document.getElementById("inputEnigmaUm").value;
    if (inputEnigmaUm === "472"){
        resposta[0].innerHTML="A senha está CORRETA!";
        fotoCadeado[0].src="https://i.imgur.com/LusLjmS.png";
    } else {
        resposta[0].innerHTML="A senha está ERRADA!";
    }
}
function enigmaDois(){
    const inputEnigmaDois = document.getElementById("inputEnigmaDois").value;
    if (inputEnigmaDois === "095"){
        resposta[1].innerHTML="A senha está CORRETA!";
        fotoCadeado[1].src="https://i.imgur.com/LusLjmS.png";
    } else {
        resposta[1].innerHTML="A senha está ERRADA!";
    }
}
function enigmaTres(){
    const inputEnigmaTres = document.getElementById("inputEnigmaTres").value;
    if (inputEnigmaTres === "713"){
        resposta[2].innerHTML="A senha está CORRETA!";
        fotoCadeado[2].src="https://i.imgur.com/LusLjmS.png";
    } else {
        resposta[2].innerHTML="A senha está ERRADA!";
    }
}
function enigmaQuatro(){
    const inputEnigmaQuatro = document.getElementById("inputEnigmaQuatro").value;
    if (inputEnigmaQuatro === "473"){
        resposta[3].innerHTML="A senha está CORRETA!";
        fotoCadeado[3].src="https://i.imgur.com/LusLjmS.png";
    } else {
        resposta[3].innerHTML="A senha está ERRADA!";
    }
}
function enigmaCinco(){
    const inputEnigmaCinco = document.getElementById("inputEnigmaCinco").value;
    if (inputEnigmaCinco === "459"){
        resposta[4].innerHTML="A senha está CORRETA!";
        fotoCadeado[4].src="https://i.imgur.com/LusLjmS.png";
    } else {
        resposta[4].innerHTML="A senha está ERRADA!";
    }
}
function enigmaSeis(){
    const inputEnigmaSeis = document.getElementById("inputEnigmaSeis").value;
    if (inputEnigmaSeis === "042"){
        resposta[5].innerHTML="A senha está CORRETA!";
        fotoCadeado[5].src="https://i.imgur.com/LusLjmS.png";
    } else {
        resposta[5].innerHTML="A senha está ERRADA!";
    }
}
function enigmaSete(){
    const inputEnigmaSete = document.getElementById("inputEnigmaSete").value;
    if (inputEnigmaSete === "139"){
        resposta[6].innerHTML="A senha está CORRETA!";
        fotoCadeado[6].src="https://i.imgur.com/LusLjmS.png";
    } else {
        resposta[6].innerHTML="A senha está ERRADA!";
    }
}
function enigmaBonus(){
    const inputEnigmaBonus = document.getElementById("inputEnigmaBonus").value;
    if (inputEnigmaBonus === "0953"){
        resposta[7].innerHTML="A senha está CORRETA!";
        fotoCadeado[7].src="https://i.imgur.com/LusLjmS.png";
    } else {
        resposta[7].innerHTML="A senha está ERRADA!";
    }
}