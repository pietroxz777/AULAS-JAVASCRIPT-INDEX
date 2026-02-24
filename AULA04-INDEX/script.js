// O DOM (Document Object Model) é a representação do html em forma de arvore de objetos

// isso permite que o javascript:

// - leia os elementos da pagina 
// - modifique os textos 
// - troque imagens 
// - reaja a cliques 
// - crie elementos novos 

// O navegador transforma o Html em objetos manipulaveis.



//=============================================
// Selecionando elementos do DOM
//=============================================


//=============================================
//selecionar por id
//=============================================

let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo")
let paragrafo = document.getElementById("paragrafo")
let imagem = document.getElementById("imageteste")


//=============================================
//Selecionar por caixas
//=============================================

let caixas = document.getElementsByClassName("box")


//=============================================
//Mostrando no console para o aluno visualizar
//=============================================

console.log(titulo);
console.log(caixas);
console.log(imagem);


//=============================================
//Função para alterar  o conteudo
//=============================================


function alterar() {
    //alterando os textos
    titulo.innerText = "@pietroohg";
    subtitulo.innerText = "segue no insta lá irm";
    paragrafo.innerText = "boaboa";

    //alterando elemento da classe
    caixas[0].innerText = "Primeiro paragrafo alterado"
    caixas[1].innerText = "Segundo paragrafo alterado"


    //alterando a imagem

    imagem.src = "https://www.themarysue.com/wp-content/uploads/2024/04/tojiJJK.jpg?fit=1200%2C675";



}