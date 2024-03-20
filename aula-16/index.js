// If e Else  
const idade = prompt("Informe a sua Idade:")

if (idade >= 18){
    alert("Maior de Idade")
} 

else if (idade > 12) {
    alert("Menor de Idade")
} 

else if (idade > 4) {
    alert("Criança")
}

else {
    alert("..")
}

// Operador Ternário
const resultado = (6 === 6) ? "Verdadeiro" : "Falso"
alert(resultado)