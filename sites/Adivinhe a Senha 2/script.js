const input = document.getElementsByTagName("input");
const resposta = document.getElementsByClassName("resposta");
const imagemPasta = document.getElementsByClassName("imgPasta");
const certoOuErrado = document.getElementsByClassName("certoOuErrado");

function enigmaUm(){
    if (input[0].value === "123"){
        resposta[0].innerHTML = "A senha está CORRETA!";
        imagemPasta[0].src="https://i.imgur.com/6yfWk07.png";
        certoOuErrado[0].src="https://win98icons.alexmeub.com/icons/png/trust0-0.png";
    } else {
        resposta[0].innerHTML = "A senha está ERRADA!";
        certoOuErrado[0].src="https://win98icons.alexmeub.com/icons/png/msg_error-0.png";
    }
}

