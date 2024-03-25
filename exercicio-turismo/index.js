const nome = prompt("Insira o seu nome:")
let nova_cidade = prompt("Você já visitou alguma cidade?")
let nome_cidade
let saida = ""
let i = 0

while (nova_cidade === "Sim") {
    i++
    nome_cidade = prompt("Insira o nome da cidade visitada: ")
    saida += nome_cidade + " "
    
    nova_cidade = prompt("Você visitou mais alguma outra cidade?")
}

document.write("Nome do Turista: " + nome + "<br>Total de Cidades visitadas: " + i + " <br>As cidades visitadas foram: " + saida)