//============================================
// uma função é um bloco de código reutilizavel, criado para executar uma tarefa especifica

// function nomeDaFuncao (parametro1, parametro2) {
//     //code q sera executado
// return resultado;    
// }
//============================================



//============================================
//EXEMPLO 01 - Somar dois números
//============================================


function somar (a, b) {
return a + b;
}
console.log(somar(2,3));//5


//============================================
//EXEMPLO 02 :
//============================================


function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao
}
console.log(realParaDolar(20, 5.17).toFixed(2))


//============================================
//EXEMPLO 03 - Calcular aumento de salário
//============================================


function calcularAumento(salario){
    return salario + (salario * 0.25)
}
console.log(calcularAumento(10000))

//============================================
//EXERCICIOS:
//============================================

//============================================
//EXERCÍCIO 01 - Dobro de um número
//============================================

function dobro(numero){
    return numero * 2;
}
console.log(dobro(5)); //10


//============================================
//EXERCÍCIO 02 - Triplo de um número
//============================================

function triplo(numero){
    return numero * 3;
}
console.log(triplo(5)); //15


//============================================
//EXERCÍCIO 03 - Soma de dois números
//============================================

function somar(a, b){
    return a + b;
}
console.log(somar(4,6)); //10


//============================================
//EXERCÍCIO 04 - Multiplicação de dois números
//============================================

function multiplicar(a, b){
    return a * b;
}
console.log(multiplicar(3,5)); //15


//============================================
//EXERCÍCIO 05 - Converter Real para Dólar
//============================================

function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao;
}
console.log(realParaDolar(50, 5.00).toFixed(2));


//============================================
//EXERCÍCIO 06 - Converter Dólar para Real
//============================================

function dolarParaReal(valorDolar, cotacao){
    return valorDolar * cotacao;
}
console.log(dolarParaReal(10, 5.00).toFixed(2));


//============================================
//EXERCÍCIO 07 - Aumento de 10%
//============================================

function aumentoDezPorcento(salario){
    return salario + (salario * 0.10);
}
console.log(aumentoDezPorcento(2000));


//============================================
//EXERCÍCIO 08 - Verificar se é par
//============================================

function ehPar(numero){
    return numero % 2 === 0;
}
console.log(ehPar(4)); //true


//============================================
//EXERCÍCIO 09 - Imprimir de 1 até 10
//============================================

function imprimirUmAteDez(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
imprimirUmAteDez();


//============================================
//EXERCÍCIO 10 - Imprimir até um limite
//============================================

function imprimirAteLimite(limite){
    for(let i = 1; i <= limite; i++){
        console.log(i);
    }
}
imprimirAteLimite(5);


//============================================
//EXERCÍCIO 11 - Somar números até 10
//============================================

function somarAteDez(){
    let soma = 0;
    for(let i = 1; i <= 10; i++){
        soma += i;
    }
    return soma;
}
console.log(somarAteDez()); //55


//============================================
//EXERCÍCIO 12 - Contar pares até 10
//============================================

function contarParesAteDez(){
    let contador = 0;
    for(let i = 1; i <= 10; i++){
        if(i % 2 === 0){
            contador++;
        }
    }
    return contador;
}
console.log(contarParesAteDez()); //5


//============================================
//EXERCÍCIO 13 - Tabuada de um número
//============================================

function tabuada(numero){
    for(let i = 1; i <= 10; i++){
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
tabuada(7);


//============================================
//EXERCÍCIO 14 - Contagem regressiva
//============================================

function contagemRegressiva(inicio){
    for(let i = inicio; i >= 0; i--){
        console.log(i);
    }
}
contagemRegressiva(5);


//============================================
//EXERCÍCIO 15 - Encontrar número 27
//============================================

function encontrarVinteSete(){
    for(let i = 1; i <= 100; i++){
        if(i === 27){
            return "Número 27 encontrado!";
        }
    }
}
console.log(encontrarVinteSete());


//============================================
//EXERCÍCIO 16 - Somar pares até um limite
//============================================

function somarPares(limite){
    let soma = 0;
    for(let i = 1; i <= limite; i++){
        if(i % 2 === 0){
            soma += i;
        }
    }
    return soma;
}
console.log(somarPares(10));


//============================================
//EXERCÍCIO 17 - Contar números ímpares
//============================================

function contarImpares(limite){
    let contador = 0;
    for(let i = 1; i <= limite; i++){
        if(i % 2 !== 0){
            contador++;
        }
    }
    return contador;
}
console.log(contarImpares(10));


//============================================
//EXERCÍCIO 18 - Média de dois números
//============================================

function media(a, b){
    return (a + b) / 2;
}
console.log(media(8, 6)); //7


//============================================
//EXERCÍCIO 19 - Quadrado de um número
//============================================

function quadrado(numero){
    return numero * numero;
}
console.log(quadrado(9)); //81
