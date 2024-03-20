let veiculo1 = prompt("Insira o modelo do primeiro veículo:")
let velocidade1 = prompt("Insira a velocidade do primeiro veículo em km/h:")
let veiculo2 = prompt("Insira o modelo do segundo veículo:")
let velocidade2 = prompt("Insira a velocidade do segundo veículo em km/h:")

const velocidade1_converted = parseFloat(velocidade1)
const velocidade2_converted = parseFloat(velocidade2)

if (velocidade1_converted > velocidade2_converted) {
    document.write("O " + veiculo1 + " é mais rápido que o " + veiculo2 + "!")
}

else if (velocidade1_converted < velocidade2_converted) {
    document.write("O " + veiculo2 + " é mais rápido que o " + veiculo1 + "!")
}

else {
    document.write("O " + veiculo1 + " possui a mesma velocidade que o " + veiculo2 + "!")
}