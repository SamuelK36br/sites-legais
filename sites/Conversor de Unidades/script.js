const input = document.getElementsByTagName("input");
const metro = document.getElementsByClassName("metro");
const litro = document.getElementsByClassName("litro");
const resultadoMetro = document.getElementById("respostaMetro");
const resultadoLitro = document.getElementById("respostaLitro");

function converterMetro(){
    if(metro[1].selected){
        let respostaMetro = input[0].value * 1000;
        resultadoMetro.innerHTML = respostaMetro + " milimetros";
    } else if(metro[2].selected){
        let respostaMetro = input[0].value * 100;
        resultadoMetro.innerHTML = respostaMetro + " centimetros";
    } else if(metro[3].selected){
        let respostaMetro = input[0].value * 10;
        resultadoMetro.innerHTML = respostaMetro + " decimetros"; 
    } else if(metro[4].selected){
        let respostaMetro = input[0].value / 10;
        resultadoMetro.innerHTML = respostaMetro + " decametros";
    } else if(metro[5].selected){
        let respostaMetro = input[0].value / 100;
        resultadoMetro.innerHTML = respostaMetro + " hectometros";
    } else if(metro[6].selected){
        let respostaMetro = input[0].value / 1000;
        resultadoMetro.innerHTML = respostaMetro + " quilometros";
    }
}
function converterLitro(){
    if(litro[1].selected){
        let respostaLitro = input[1].value * 1000;
        resultadoLitro.innerHTML = respostaLitro + " mililitros";
    } else if(litro[2].selected){
        let respostaLitro = input[1].value * 100;
        resultadoLitro.innerHTML = respostaLitro + " centilitros";
    } else if(litro[3].selected){
        let respostaLitro = input[1].value * 10;
        resultadoLitro.innerHTML = respostaLitro + " decilitros"; 
    } else if(litro[4].selected){
        let respostaLitro = input[1].value / 10;
        resultadoLitro.innerHTML = respostaLitro + " decalitros";
    } else if(litro[5].selected){
        let respostaLitro = input[1].value / 100;
        resultadoLitro.innerHTML = respostaLitro + " hectolitros";
    } else if(litro[6].selected){
        let respostaLitro = input[1].value / 1000;
        resultadoLitro.innerHTML = respostaLitro + " quilolitros";
    }
}