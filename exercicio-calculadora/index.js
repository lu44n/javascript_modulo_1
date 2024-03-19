const num1 = window.prompt("Digite o primeiro valor:");
const num2 = window.prompt("Digite o segundo valor:");

const num1_convert = parseFloat(num1);
const num2_convert = parseFloat(num2);

const soma = num1_convert + num2_convert;
const subtracao = num1_convert - num2_convert;
const multiplicacao = num1_convert * num2_convert;
const divisao = num1_convert / num2_convert;

document.write('SOMA: ' + soma + '<br>');
document.write('SUBTRAÇÃO: ' + subtracao + '<br>');
document.write('MULTIPLICAÇÃO: ' + multiplicacao + '<br>');
document.write('DIVISÃO: ' + divisao);