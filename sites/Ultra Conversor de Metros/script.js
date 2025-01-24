const resultado = document.getElementById("resultado");
const input = document.querySelector("input");
const medidaInicial = document.getElementsByClassName("medidaInicial");
const medidaFinal = document.getElementsByClassName("medidaFinal");
let resultadoMedida = 0;
const erro = "Algo deu errado.";

const teste = medidaInicial[1].selected && medidaFinal[2].selected;

function conversao(){
    if (medidaInicial[0].selected && medidaFinal[0].selected){
        resultado.innerHTML = erro;
    }
    
    /* *↓* QUILOMETROS *↓* */
    else if (medidaInicial[1].selected && medidaFinal[0].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[1].selected && medidaFinal[1].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[1].selected && medidaFinal[2].selected){
        resultadoMedida = input.value * 10;
        resultado.innerHTML = resultadoMedida + " hectômetros";
    }
    else if (medidaInicial[1].selected && medidaFinal[3].selected){
        resultadoMedida = input.value * 100;
        resultado.innerHTML = resultadoMedida + " decâmetros";
    }
    else if (medidaInicial[1].selected && medidaFinal[4].selected){
        resultadoMedida = input.value * 1000;
        resultado.innerHTML = resultadoMedida + " metros";
    }
    else if (medidaInicial[1].selected && medidaFinal[5].selected){
        resultadoMedida = input.value * 10000;
        resultado.innerHTML = resultadoMedida + " decímetros";
    }
    else if (medidaInicial[1].selected && medidaFinal[6].selected){
        resultadoMedida = input.value * 100000 + " centímetros";
        resultado.innerHTML = resultadoMedida;
    }
    else if (medidaInicial[1].selected && medidaFinal[7].selected){
        resultadoMedida = input.value * 1000000 + " milímetros";
        resultado.innerHTML = resultadoMedida;
    }
    /* *↑* QUILOMETROS *↑* */
    
    /* *↓* HECTOMETROS *↓* */
    else if (medidaInicial[2].selected && medidaFinal[0].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[2].selected && medidaFinal[1].selected){
        resultadoMedida = input.value / 10;
        resultado.innerHTML = resultadoMedida + " quilômetros";
    }
    else if (medidaInicial[2].selected && medidaFinal[2].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[2].selected && medidaFinal[3].selected){
        resultadoMedida = input.value * 10;
        resultado.innerHTML = resultadoMedida + " decâmetros";
    }
    else if (medidaInicial[2].selected && medidaFinal[4].selected){
        resultadoMedida = input.value * 100;
        resultado.innerHTML = resultadoMedida + " metros";
    }
    else if (medidaInicial[2].selected && medidaFinal[5].selected){
        resultadoMedida = input.value * 1000;
        resultado.innerHTML = resultadoMedida + " decímetros";
    }
    else if (medidaInicial[2].selected && medidaFinal[6].selected){
        resultadoMedida = input.value * 10000 + " centímetros";
        resultado.innerHTML = resultadoMedida;
    }
    else if (medidaInicial[2].selected && medidaFinal[7].selected){
        resultadoMedida = input.value * 100000 + " milímetros";
        resultado.innerHTML = resultadoMedida;
    }
    /* *↑* HECTOMETROS *↑* */
    
    /* *↓* DECÂMETRO *↓* */
    else if (medidaInicial[3].selected && medidaFinal[0].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[3].selected && medidaFinal[1].selected){
        resultadoMedida = input.value / 100;
        resultado.innerHTML = resultadoMedida + " quilômetros";
    }
    else if (medidaInicial[3].selected && medidaFinal[2].selected){
        resultadoMedida = input.value / 10;
        resultado.innerHTML = resultadoMedida + " hectômetros";
    }
    else if (medidaInicial[3].selected && medidaFinal[3].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[3].selected && medidaFinal[4].selected){
        resultadoMedida = input.value * 10;
        resultado.innerHTML = resultadoMedida + " metros";
    }
    else if (medidaInicial[3].selected && medidaFinal[5].selected){
        resultadoMedida = input.value * 100;
        resultado.innerHTML = resultadoMedida + " decímetros";
    }
    else if (medidaInicial[3].selected && medidaFinal[6].selected){
        resultadoMedida = input.value * 1000 + " centímetros";
        resultado.innerHTML = resultadoMedida;
    }
    else if (medidaInicial[3].selected && medidaFinal[7].selected){
        resultadoMedida = input.value * 10000 + " milímetros";
        resultado.innerHTML = resultadoMedida;
    }
    /* *↑* DECÂMETRO *↑* */
    
    /* ↓ METROS ↓ */
     else if (medidaInicial[4].selected && medidaFinal[0].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[4].selected && medidaFinal[1].selected){
        resultadoMedida = input.value / 1000;
        resultado.innerHTML = resultadoMedida + " quilômetros";
    }
    else if (medidaInicial[4].selected && medidaFinal[2].selected){
        resultadoMedida = input.value / 100;
        resultado.innerHTML = resultadoMedida + " hectômetros";
    }
    else if (medidaInicial[4].selected && medidaFinal[3].selected){
        resultadoMedida = input.value / 10;
        resultado.innerHTML = resultadoMedida + " decâmetros";
    }
    else if (medidaInicial[4].selected && medidaFinal[4].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[4].selected && medidaFinal[5].selected){
        resultadoMedida = input.value * 10;
        resultado.innerHTML = resultadoMedida + " decímetros";
    }
    else if (medidaInicial[4].selected && medidaFinal[6].selected){
        resultadoMedida = input.value * 100 + " centímetros";
        resultado.innerHTML = resultadoMedida;
    }
    else if (medidaInicial[4].selected && medidaFinal[7].selected){
        resultadoMedida = input.value * 1000 + " milímetros";
        resultado.innerHTML = resultadoMedida;
    }
    /* ↑ METROS ↑ */
     
    /* ↓ DECIMETRO ↓ */
    else if (medidaInicial[5].selected && medidaFinal[0].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[5].selected && medidaFinal[1].selected){
        resultadoMedida = input.value / 10000;
        resultado.innerHTML = resultadoMedida + " quilômetros";
    }
    else if (medidaInicial[5].selected && medidaFinal[2].selected){
        resultadoMedida = input.value / 1000;
        resultado.innerHTML = resultadoMedida + " hectômetros";
    }
    else if (medidaInicial[5].selected && medidaFinal[3].selected){
        resultadoMedida = input.value / 100;
        resultado.innerHTML = resultadoMedida + " decâmetros";
    }
    else if (medidaInicial[5].selected && medidaFinal[4].selected){
        resultadoMedida = input.value / 10;
        resultado.innerHTML = resultadoMedida + " metros";
    }
    else if (medidaInicial[5].selected && medidaFinal[5].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[5].selected && medidaFinal[6].selected){
        resultadoMedida = input.value * 10 + " centímetros";
        resultado.innerHTML = resultadoMedida;
    }
    else if (medidaInicial[5].selected && medidaFinal[7].selected){
        resultadoMedida = input.value * 100 + " milímetros";
        resultado.innerHTML = resultadoMedida;
    }
    /* ↑ DECIMETRO ↑ */
    
    /* ↓ CENTIMETRO ↓ */
    else if (medidaInicial[6].selected && medidaFinal[0].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[6].selected && medidaFinal[1].selected){
        resultadoMedida = input.value / 100000;
        resultado.innerHTML = resultadoMedida + " quilômetros";
    }
    else if (medidaInicial[6].selected && medidaFinal[2].selected){
        resultadoMedida = input.value / 10000;
        resultado.innerHTML = resultadoMedida + " hectômetros";
    }
    else if (medidaInicial[6].selected && medidaFinal[3].selected){
        resultadoMedida = input.value / 1000;
        resultado.innerHTML = resultadoMedida + " decâmetros";
    }
    else if (medidaInicial[6].selected && medidaFinal[4].selected){
        resultadoMedida = input.value / 100;
        resultado.innerHTML = resultadoMedida + " metros";
    }
    else if (medidaInicial[6].selected && medidaFinal[5].selected){
        resultadoMedida = input.value / 10 + " decimetros";
        resultado.innerHTML = resultadoMedida;
    }
    else if (medidaInicial[6].selected && medidaFinal[6].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[6].selected && medidaFinal[7].selected){
        resultadoMedida = input.value * 10 + " milímetros";
        resultado.innerHTML = resultadoMedida;
    }
    /* ↑ CENTIMETRO ↑ */
    
    /* ↓ MILIMETRO ↓ */
    else if (medidaInicial[7].selected && medidaFinal[0].selected){
        resultado.innerHTML = erro;
    }
    else if (medidaInicial[7].selected && medidaFinal[1].selected){
        resultadoMedida = input.value / 1000000;
        resultado.innerHTML = resultadoMedida + " quilômetros";
    }
    else if (medidaInicial[7].selected && medidaFinal[2].selected){
        resultadoMedida = input.value / 100000;
        resultado.innerHTML = resultadoMedida + " hectômetros";
    }
    else if (medidaInicial[7].selected && medidaFinal[3].selected){
        resultadoMedida = input.value / 10000;
        resultado.innerHTML = resultadoMedida + " decâmetros";
    }
    else if (medidaInicial[7].selected && medidaFinal[4].selected){
        resultadoMedida = input.value / 1000;
        resultado.innerHTML = resultadoMedida + " metros";
    }
    else if (medidaInicial[7].selected && medidaFinal[5].selected){
        resultadoMedida = input.value / 100 + " decimetros";
        resultado.innerHTML = resultadoMedida;
    }
    else if (medidaInicial[7].selected && medidaFinal[6].selected){
        resultadoMedida = input.value / 10 + " centimetros";
        resultado.innerHTML = resultadoMedida;
    }
    else if (medidaInicial[7].selected && medidaFinal[7].selected){
        resultado.innerHTML = erro;
    }
    /* ↑ MILIMETRO ↑ */
}