const nome = prompt("Insira o seu nome:")
let nova_cidade = prompt("Você já visitou alguma cidade?")
let contador = 0
let saida = ""

while (nova_cidade === "Sim") {
    let nome_cidade = prompt("Insira o nome da cidade visitada: ")
    saida += nome_cidade + " "
    contador++
    
    nova_cidade = prompt("Você visitou mais alguma outra cidade?")
}

document.write("Nome do turista: " + nome + "<br>Total de cidades visitadas: " + contador + " <br>As cidades visitadas foram: " + saida)