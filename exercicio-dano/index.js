// Informações necessárias
let personagem1 = prompt("Insira o nome do personagem que está atacando:");
let poder_atk = prompt("Insira o poder de ataque deste personagem:");
let personagem2 = prompt("Insira o nome do personagem que vai sofrer o ataque:");
let pts_vida = prompt("Insira a quantidade de pontos de vida deste personagem:");
let poder_def = prompt("Insira o poder de defesa deste personagem:");
let escudo = prompt("O personagem possui escudo? ('s' ou 'n'):");

// Conversões
const poderatk_converted = parseFloat(poder_atk);
const ptsvida_converted = parseFloat(pts_vida);
const poderdef_converted = parseFloat(poder_def);

// Lógica do Exercício
let dano_causado;

if (poderatk_converted > poderdef_converted && escudo === "n") {
    dano_causado = poderatk_converted - poderdef_converted;
}

else if (poderatk_converted > poderdef_converted && escudo === "s") {
    dano_causado = (poderatk_converted - poderdef_converted) / 2;
}

else {
    dano_causado = 0;
}

// Resultado
const danocausado_converted = parseFloat(dano_causado);
const result = ptsvida_converted - danocausado_converted;

document.write("Personagem 1: <br> Nome: " +  personagem1 + "<br> Poder de Ataque: " + poderatk_converted);
document.write("<br> Personagem 2: <br> Nome: " + personagem2 + "<br> Pontos de Vida: " + ptsvida_converted + "<br> Poder de Defesa: " + poderdef_converted + "<br> Escudo: " + escudo);
document.write("<br> Dano causado: " + danocausado_converted + "<br> Resultado dos pontos de vida após o ataque: " + result);