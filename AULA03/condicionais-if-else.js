//Exemplo 1

let idade2 = 18;

if (idade2 >= 18) {
    console.log("Você é maior de idade!");

} else {
    console.log ("Você é maior de idade");
}

//Exemplo 2

let nota22 = 2;

if (nota22 >= 5) {
    console.log("Aprovado!")
} else {
    console.log ("Reprovado!")
}

//Exemplo 3

let senha2 = "1234"

if (senha2 === "1234"){
    console.log("Acesso permitido")
} else {
    console.log("Senha incorreta")
}

// exercicios classrom:


// 1- Verifique se um número é positivo ou negativo
let numero = -5;
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 2- Maior de idade
let idade = 20;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// 3- Número par ou ímpar
let num = 7;
if (num % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// 4- Situação do aluno
let nota = 7;
if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 5- Pode votar?
let idadeVoto = 13;
if (idadeVoto >= 16) {
    console.log("Pode votar");
} else {
    console.log("Não pode votar");
}

// 6- Senha correta
let senha = "1234";
if (senha === "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// 7- Temperatura do dia
let temperatura = 28;
if (temperatura >= 25) {
    console.log("Está quente");
} else {
    console.log("Está frio");
}

// 8- Altura para brinquedo
let altura = 1.4; // em metros
let alturaMinima = 1.3;
if (altura >= alturaMinima) {
    console.log("Pode entrar no brinquedo");
} else {
    console.log("Não pode entrar no brinquedo");
}

// 9- Número positivo, negativo ou zero
let numero2 = 0;
if (numero2 > 0) {
    console.log("Positivo");
} else if (numero2 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 10- Classificação de nota
let nota2 = 8;
if (nota2 >= 9) {
    console.log("Excelente");
} else if (nota2 >= 7) {
    console.log("Bom");
} else if (nota2 === 6) {
    console.log("Regular");
} else {
    console.log("Reprovado");
}

// 11- Pode dirigir?
let idadeDirigir = 20;
let temCNH = true;
if (idadeDirigir >= 18 && temCNH) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// 12- Desconto na compra
let compra = 120;
if (compra > 100) {
    console.log("Ganhou desconto");
} else {
    console.log("Sem desconto");
}

// 13- Login do sistema
let usuario = "admin";
let senhaLogin = "123";
if (usuario === "admin" && senhaLogin === "123") {
    console.log("Login realizado");
} else {
    console.log("Erro de login");
}

// 14- Classificação de filme
let idadeFilme = 17;
if (idadeFilme >= 16) {
    console.log("Pode assistir ao filme");
} else {
    console.log("Não pode assistir ao filme");
}

// 15- Semáforo
let cor = "amarelo";
if (cor === "verde") {
    console.log("Pode passar");
} else if (cor === "amarelo") {
    console.log("Atenção");
} else if (cor === "vermelho") {
    console.log("Pare");
} else {
    console.log("Cor inválida");
}


