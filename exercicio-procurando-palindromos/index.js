const palindromo = prompt("Olá, eu sou o Verificador de Palíndromos!\n" + "Digite a palavra a ser verificada:")
let verify = ""

for (let i = palindromo.length - 1; i >=0 ; i--){
    verify += palindromo[i]
}

if (palindromo === verify){
    alert("Perfeito! " + palindromo + " é um palíndromo!")
}

else {
    alert("Ops! A palavra inserida não é um palíndromo!\n" + "Resultado da palavra ao contrário: " + verify + "!")
}