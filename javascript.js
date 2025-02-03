function calcular(){
    altura = Number(document.getElementById('altura').value)
    peso = Number(document.getElementById('peso').value)
    imc = peso / (altura * altura)


    if(imc < 18.5){
        document.getElementById('resultado').innerHTML = 'IMC = '+ imc.toFixed(2) + ' / ' + 'Abaixo do peso'
    } else if(imc >= 18.6 && imc <= 24.9){
        document.getElementById('resultado').innerHTML = 'IMC = ' + imc.toFixed(2) + ' / ' + 'Peso normal'
    } else if(imc >= 25 && imc <= 29.9){
        document.getElementById('resultado').innerHTML = 'IMC = ' + imc.tofixed(2) + ' / ' + 'Sobrepeso'
    } else if(imc >= 30 && imc <= 34.9){
        document.getElementById('resultado').innerHTML = 'IMC = ' + imc.toFixed(2) + '/ ' + 'Obesidade Grau I'
    } else if(imc >= 35 && imc <= 39.9){
        document.getElementById('resultado').innerHTML = 'IMC = ' + imc.toFixed(2) + '/ ' + 'Obesidade Grau II'
    } else if(imc > 40){
        document.getElementById('resultado').innerHTML = 'IMC = ' + imc.toFixed(2) + '/ ' + 'Obesidade Grau III'
    }



}


