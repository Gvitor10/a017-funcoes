// exercicio 02

// Somando os numeros

function soma(num1, num2){
    num1 = Number(prompt('Digite aqui um numero...'));
    num2 = Number(prompt('Digite aqui outro numero...'));
    let result;

    result = num1 + num2;
    console.log(`RESULTADO: ${result}`);
}
soma();

// Verficando se num1 é maior que num2

function maiorOuMenor(num1, num2){
    num1 = Number(prompt('Digite aqui um numero...'));
    num2 = Number(prompt('Digite aqui outro numero...'));

    if (num1 > num2){
        console.log(`${num1} é maior que ${num2}?: ${num1 > num2}`);
    } else {
        console.log(`${num1} é maior que ${num2}?: ${num1 > num2}`);
    }
}
maiorOuMenor();

// Par ou impar?

function parOuImpar(num){
    num = Number(prompt('Digite aqui um numero...'));

    if (num % 2 === 0){
        console.log('Este numero é PAR.');
    } else {
        console.log('Este numero é IMPAR.');
    }
}
parOuImpar();

// Mensurando uma string

function medirString(string){
    string = prompt('Digite aqui uma frase...');

    console.log(`Esta frase possui ${string.length} letras`);
    console.log(`FRASE: ${string.toUpperCase()}`);
}
medirString();