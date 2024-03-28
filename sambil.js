function fizzbuzz () {
    for (i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }else if (i % 3 === 0) {
            console.log('fizz');
        }else if (i % 5 === 0) {
            console.log('buzz');
        }else {
            console.log(i)
        }
    }
}

fizzbuzz();

let a = 1;
let b = 5;

console.log(a + b);

function saludar () {
    let nombre = 'Jackson';
    let apellido = 'Florez'
    let suma = `Hola ${nombre} ${apellido} todo bien`;
    console.log(suma)
}

saludar();