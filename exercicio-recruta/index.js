const nome = window.prompt("Digite o seu nome:");
const sobrenome = window.prompt("Digite o seu sobrenome:");
const campoDeEstudo = window.prompt("Digite o seu campo de estudo:");
const anoNascimento = window.prompt("Digite o seu ano de nascimento:");

const idade = 2024 - parseFloat(anoNascimento)

document.write('Seu nome completo é ' + nome + ' ' + sobrenome + ', seu campo de estudo é ' + campoDeEstudo + ' e você tem ' + idade + ' anos.');