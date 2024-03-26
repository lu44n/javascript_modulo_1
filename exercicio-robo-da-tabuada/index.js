const num_tabuada = parseFloat(prompt("Insira o número desejado: "))
let resultado = ""

for (let i = 1; i <= 20; i++){
    let produto = parseFloat(i * num_tabuada)
    resultado += "-> " + num_tabuada + " x " + i + " = " + produto + "\n"
}

alert("Resultados:\n" + resultado)