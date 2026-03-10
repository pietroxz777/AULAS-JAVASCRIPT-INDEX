/*
CONSUMINDO UMA API COM JAVASCRIPT
API: https://dog.ceo/api
*/

//================================
// 1- SELECIONAR ELEMENTOS DO HTML
//================================

//Pegar a imagem do cachorro
const dogImage = document.getElementById("dogImage");

//elemento onde aparece o nome da raça
const breedName = document.getElementById("breedName");

//botão que busca cachorro aleatório
const randomBtn = document.getElementById("randomBtn");

//botão que busca a raça
const searchBtn = document.getElementById("searchBtn");

//campo de input onde o usuário digita a raça
const breedInput = document.getElementById("breedInput");

// área onde a imagem aparece
const dogArea = document.querySelector(".dog-area");


//=======================
// 2- URL BASE DA API
//=======================

//endereço principal da API
const API_BASE = "https://dog.ceo/api";


//===========================
// 3- FUNÇÃO QUE CHAMA A API
//===========================

//função assíncrona que faz requisição HTTP
async function fetchFromApi(endpoint){

    //adiciona classe de loading
    dogArea.classList.add("loading");

    try {

        //montar URL completa
        const url = `${API_BASE}${endpoint}`;

        console.log("Requisição:", url);

        //requisição HTTP
        const response = await fetch(url);

        //converter para JSON
        const data = await response.json();

        console.log("Resposta:", data);

        //verificar sucesso
        if (data.status === "success") {

            const imageUrl = data.message;

            //mostrar imagem
            dogImage.src = imageUrl;

            //extrair raça da URL
            const breed = imageUrl.split("/")[4];

            //trocar "-" por espaço
            const formattedBreed = breed.replace(/-/g," ");

            //primeira letra maiúscula
            const finalBreed =
                formattedBreed.charAt(0).toUpperCase() +
                formattedBreed.slice(1);

            //mostrar nome da raça
            breedName.textContent = finalBreed;

        } else {

            breedName.textContent = "Raça não encontrada";
            dogImage.src = "";

        }

    } catch (error){

        console.error("Erro:", error);

        breedName.textContent = "Erro ao carregar";
        dogImage.src = "";

    } finally {

        //remover loading
        dogArea.classList.remove("loading");

    }

}


//carregar cachorro ao abrir a página
fetchFromApi("/breeds/image/random");


//======================
// 4 - FUNÇÕES DE AÇÃO
//======================

//buscar cachorro aleatório
function getRandomDog(){
    fetchFromApi("/breeds/image/random");
}


//buscar cachorro por raça
function getBreedDog(){

    let breed = breedInput.value.toLowerCase().trim();

    if(!breed){
        alert("Digite uma raça!");
        return;
    }

    fetchFromApi(`/breed/${breed}/images/random`);

}


//======================
// 5 - EVENTOS
//======================

//clique botão aleatório
randomBtn.addEventListener("click", getRandomDog);

//clique botão buscar
searchBtn.addEventListener("click", getBreedDog);

//clique na imagem
dogImage.addEventListener("click", getRandomDog);

//pressionar ENTER no input
breedInput.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        getBreedDog();
    }

});