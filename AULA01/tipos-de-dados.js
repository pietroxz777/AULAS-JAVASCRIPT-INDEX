// No javaScript, existem vários tipos de dados que sao tudo o que armazenamos em variáveis, incluindo:

//tipos de dados:
// 1. String: Representa texto, como "Olá, mundo!"
// 2. Number: Representa números, como 42, 3.14 ou -7.
// 3. Boolean: Representa valores verdadeiros ou falsos, como true ou false.
// 4. Null: Representa a ausência de valor, como null.
// 5. Undefined: Representa uma variável que foi declarada, mas não foi atribuída a um valor, como undefined.
// 6. Object: Representa uma coleção de propriedades e métodos, como { nome: "pietro", idade: 30 }.
// 7. Array: Representa uma lista ordenada de valores, como [1, 2, 3] 
// 8. Symbol: Representa um identificador único e imutável, usado principalmente para chaves de objetos.

let nome = "Pietro"
let mensagem = "ola, mundo!"

console.log(nome);
console.log(mensagem);

//server p descobrir tipo de valor ou variavel

console.log(typeof nome);

let saudacao = "olá, " + nome + "!";
console.log(saudacao);

// exercicio da cidade que mora

let cidade = "Guarulhos";

console.log("Eu moro em " + cidade + ".");
// template String
console.log(`Eu moro em ${cidade}.`)

//number: (numeros)

let idade = 17;
let altura = 1.95;  

console.log(idade);
console.log(altura);
console.log(typeof altura);

let soma = 10 + 5;
console.log(soma);

// exercicio de calcular a idade 

let anoAtual = 2026;
let anoNascimento = 2008;

let idade2 = anoAtual - anoNascimento;

console.log("Sua idade é: " + idade2);
console.log(`Sua idade é: ${idade2}. `)

//------------------------------------------------------------------------------------------------------------------------------------------

// Camel case----- mais famosa

// primeira palavra minuscula
// Palavras seguintes começam com maiuscula
// usada para classes, construtura e componentes

// Snake case

// palavras seguidas por underscore_
// tudo minusculo
// muito comum no PaymentMethodChangeEvent, banco de dados e api

// Pascal case

// todas as palavras começam com letra maiuscula
// usada para classes, contrutores e componentes
// class UsuarioSistema {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// Kebab-case

// palavras separadas por hifen-
// !!! nao funciona como nome de variavel em javascript
// <divclass="menu-pricipal"></div>

//----------------------------------------------------------------------------------------------------------------------------------------------

//Boolean (verdadeiro ou falso):

let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade);
console.log(menorDeIdade)

let idade3 = 20;
let podeDirigir = idade3 >= 18;

console.log(podeDirigir);


//Objeto:

let pessoa = {
    nome: "Pietro", 
    idade: 17,
    cidade: "Guarulhos",

};

console.log(pessoa.nome)
console.log(pessoa.idade)

// exercicio carro

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};

console.log("Marca:", carro.marca)
console.log("Modelo:", carro.modelo)
console.log("Ano:", carro.ano)

// exe classroom


// =======================
// String (Textos)
// =======================

// 1- Crie uma variável nome com seu nome e exiba no console.
let nome1 = "Pietro";
console.log(nome1);

// 2- Crie uma variável sobrenome e exiba o nome completo.
let sobrenome = "Vieira";
console.log(nome1 + " " + sobrenome);

// 3- Crie uma frase usando Template String.
console.log(`Meu nome é ${nome1} ${sobrenome}`);

// 4- Guarde o nome da sua escola em uma variável e exiba.
let escola = "Escola SESI-SP";
console.log(escola);

// 5- Crie duas strings e junte em uma frase.
let palavra1 = "Aprender";
let palavra2 = "JavaScript";
console.log(palavra1 + " " + palavra2);

// 6- Exiba uma mensagem de boas-vindas com o nome do usuário.
console.log(`Seja bem-vindo, ${nome1}!`);

// 7- Mostre o tamanho de uma string.
console.log(nome1.length);

// 8- Transforme um texto em letras maiúsculas.
console.log(nome1.toUpperCase());

// 9- Transforme um texto em letras minúsculas.
console.log(sobrenome.toLowerCase());

// 10- Crie uma frase com nome e cidade.
let cidade1 = "Guarulhos";
console.log(`Meu nome é ${nome1} e moro em ${cidade1}`);


// =======================
// Number (Números)
// =======================

// 1- Crie dois números e exiba a soma.
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

// 2- Calcule a subtração entre dois valores.
console.log(num1 - num2);

// 3- Calcule a multiplicação.
console.log(num1 * num2);

// 4- Calcule a divisão.
console.log(num1 / num2);


// =======================
// Boolean (Verdadeiro ou Falso)
// =======================

// 1- Crie uma variável ativo com valor true.
let ativo = true;
console.log(ativo);

// 2- Verifique se um número é maior que 10.
let numero = 15;
console.log(numero > 10);

// 3- Verifique se a idade é maior ou igual a 18.
let idade1 = 20;
console.log(idade >= 18);
