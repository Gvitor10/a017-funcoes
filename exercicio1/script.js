// Exercicio 01

/*
function myName(name){
    name = prompt('Digite aqui o seu nome...');
    console.log(`Ola!, ${name}.`);
}
myName();

function tabuada06(){
    for(let i = 1; i <= 10; i++){
    console.log(`6 x ${i} = ${6 * i}`);
    }
}
tabuada06();
*/

// Rescrevendo as funçoes utilizando Arrow Function

const myName = (nome) => {
    nome = prompt('Digite aqui o seu nome...');
    console.log(`Ola!, ${nome}.`);
}
myName();

const tabuada06 = () => {
    for (let i = 0; i <= 10; i++){
        console.log(`6 x ${i} = ${6 * i}`);
    }
}
tabuada06();