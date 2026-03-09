//===================================
// EXEMPLO DE CONSUMO DE API COM FETCH (PROMISE)
// API usada: https://dog.ceo/api/breeds/image/radom
// Essa API retorna uma imagem aleatória de cachorro 
//===================================

//TESTE 1: Fetch básico usando .then()

//fetch() faz uma requisição HTTP para uma API externa

fetch('http://dog.ceo/api/breeds/image/random')
    //fetch retorna uma PROMISE (Algo que vai chegar depois)
    .then(reposta => reposta.json())
    // resposta.json() converte a resposta da API para JSON
    // JSON é o formato padrão de dados usados em APIs

    .then(dados =>{
        //dados agora contem o objeto retornavel pela API
        console.log('Dados completo do API:', dados);
        //Mostrar a URL da imagem
        console.log('URL da imagem', dados.message);   
    })

// ===============================
// TESTE 2: Usando async / await
// È uma forma mais moderna e mais fácil de ler
// ===============================

// Vamos criar uma funcção assíncrona
// Função async permitem usar "await"
async function testarAPI(){

    //await significa: espere a resposta chegar antes de continuar
    const resposta = await fetch('https://dog.ceo/api/breeds/image/random');

    //Precisamos converter a resposta em JSON
    const dados = await resposta.json();

    console.log('Resposta da API:', dados);

    console.log('Imagem do cachorro:', dados.message);
    
    
}

//chamamos a funcao para executar o teste
testarAPI();