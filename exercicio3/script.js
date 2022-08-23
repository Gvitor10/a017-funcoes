// Exercicio 03

function soma(num1, num2){
    num1 = Number(prompt('Digite aqui o primeiro numero...'));
    num2 = Number(prompt('Digite aqui o segundo numero...'));
    let result;

    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
}
soma();

function subtracao(num1, num2){
    num1 = Number(prompt('Digite aqui o primeiro numero...'));
    num2 = Number(prompt('Digite aqui o segundo numero...'));
    let result;

    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
}
subtracao();

function multiplicacao(num1, num2){
    num1 = Number(prompt('Digite aqui o primeiro numero...'));
    num2 = Number(prompt('Digite aqui o segundo numero...'));
    let result;

    result = num1 * num2;
    console.log(`${num1} x ${num2} = ${result}`);
}
multiplicacao();

function divisao(num1, num2){
    num1 = Number(prompt('Digite aqui o primeiro numero...'));
    num2 = Number(prompt('Digite aqui o segundo numero...'));
    let result;

    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
}
divisao();