let qnt_dinheiro = parseFloat(prompt("Digite o valor disponível em (R$):"))
let opc_banco = parseFloat(prompt("O valor atual disponível é de: R$" + qnt_dinheiro + "\nEscolha uma opção listada abaixo: \n1. Adicionar \n2. Remover \n3. Encerrar"))

while (opc_banco != 3) {
    if (opc_banco < 1 || opc_banco > 3){
        alert("ERROR: Opção Inválida!")
    }

    else if (opc_banco === 1){
        let valor_adc = parseFloat(prompt("Escolha um valor a ser adicionado em (R$):"))
        qnt_dinheiro += valor_adc
    }

    else if (opc_banco === 2){
        let valor_rmv = parseFloat(prompt("Escolha um valor a ser removido em (R$):"))
        qnt_dinheiro -= valor_rmv
    }

    opc_banco = parseFloat(prompt("O valor atual disponível é de: R$" + qnt_dinheiro + "\nEscolha uma opção listada abaixo: \n1. Adicionar \n2. Remover \n3. Encerrar"))
}

alert("Programa Encerrado.")