let menu_interativo = parseFloat(prompt("Escolha uma das opções: \n1. Opção 1 \n2. Opção 2 \n3. Opção 3 \n4. Opção 4 \n5. Encerrar"))

while (menu_interativo != 5){
    if (menu_interativo < 1 || menu_interativo > 5){
        alert("ERROR: Opção Inválida!")
    }

    else if (menu_interativo === 1){
        alert("Opção escolhida: 1")
    }

    else if (menu_interativo === 2){
        alert("Opção escolhida: 2")
    }

    else if (menu_interativo === 3){
        alert("Opção escolhida: 3")
    }

    else if(menu_interativo === 4){
        alert("Opção escolhida: 4")
    }

    menu_interativo = parseFloat(prompt("Escolha uma das opções: \n1. Opção 1 \n2. Opção 2 \n3. Opção 3 \n4. Opção 4 \n5. Encerrar"))
}

alert("Programa encerrado.")