// ========================================
// 1. Array cores - mostrar a segunda cor
// ========================================


let cores = ["Azul", "Verde", "Vermelho"];
console.log(cores[1]);



// ========================================
// 2. Array numeros - mostrar primeiro e último
// ========================================


let numeros = [10, 20, 30, 40, 50];
console.log(numeros[0]);
console.log(numeros[numeros.length - 1]);



// ========================================
// 3. Array frutas - adicionar terceira fruta
// ========================================


let frutas = ["Maçã", "Banana"];
frutas.push("Uva");
console.log(frutas);



// ========================================
// 4. Array nomes - remover último nome
// ========================================


let nomes = ["Ana", "Carlos", "João", "Marina"];
nomes.pop();
console.log(nomes);



// ========================================
// 5. Array times - mostrar quantidade de itens
// ========================================


let times = ["Flamengo", "Palmeiras", "Corinthians"];
console.log(3); 



// ========================================
// 6. Array animais - mostrar todos
// ========================================


let animais = ["Cachorro", "Gato", "Pássaro"];

console.log(animais[0]);
console.log(animais[1]);
console.log(animais[2]);



// ========================================
// 7. Array carros - alterar segundo item
// ========================================


let carros = ["Fusca", "Civic", "Corolla"];
carros[1] = "HB20";
console.log(carros);



// ========================================
// 8. Verificar se contém "JavaScript"
// ========================================


let linguagens = ["Python", "Java", "JavaScript"];

if (linguagens.includes("JavaScript")) {
  console.log(true);
} else {
  console.log(false);
}



// ========================================
// 9. Soma dos valores 
// ========================================


let valores = [5, 10, 15, 20];
let soma = valores[0] + valores[1] + valores[2] + valores[3];

console.log(soma);


// ========================================
// 10. Tarefas numeradas 
// ========================================


let tarefas = [];

tarefas.push("Estudar");
tarefas.push("Treinar");
tarefas.push("Ler");

console.log("1 - " + tarefas[0]);
console.log("2 - " + tarefas[1]);
console.log("3 - " + tarefas[2]);