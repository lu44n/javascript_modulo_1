const valor_metros = parseFloat(prompt("Insira um valor de medida em Metros:"))
const opcao_conversao = parseFloat(prompt("Escolha a opção desejada de conversão:\n1. milímetro (mm)\n2. centímetro (cm)\n3. decímetro (dm)\n4. decâmetro (dam)\n5. hectômetro (hm)\n6. quilômetro (km)"))

let resultado;

switch (opcao_conversao) {
    case 1:
        resultado = valor_metros * 1000
        alert("Resultado: " + resultado + " mm.")
        break
    case 2:
        resultado = valor_metros * 100
        alert("Resultado: " + resultado + " cm.")
        break
    case 3:
        resultado = valor_metros * 10
        alert("Resultado: " + resultado + " dm.")
        break
    case 4:
        resultado = valor_metros / 10
        alert("Resultado: " + resultado + " dam.")
        break
    case 5:
        resultado = valor_metros / 100
        alert("Resultado: " + resultado + " hm.")
        break
    case 6:
        resultado = valor_metros / 1000
        alert("Resultado: " + resultado + " km.")
        break
    default:
        alert("Opção inválida.")
}
