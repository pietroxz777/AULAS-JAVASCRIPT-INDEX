//=============================================
// Jogo do Mario
//=============================================


let mario = document.querySelector('.mario'); // acha o mario
let cano = document.querySelector('.cano'); // acha o cano
let nuvem = document.querySelector('.nuvem'); // acha a nuvem
let telaFim = document.querySelector('.fim'); // acha a tela de game over
let botaoReiniciar = document.querySelector('.reiniciar');

console.log('=== PARADA 01 ===');
console.log('Mario:', mario);
console.log('Cano:', cano);
console.log('Nuvem:', nuvem);
console.log('Tela de Fim:', telaFim);
console.log('Botão:', botaoReiniciar);

function pular(){
    mario.classList.add('pular');

    //setitimeout = espera um tempo e dps executa algo

    setTimeout(function(){
        mario.classList.remove('pular')
    }, 500); //500 milissegundos = 0,5 segundos
}

document.addEventListener('keydown', function(){
    console.log('Tecla pressionada! chamando função pular()')
    
    pular();
})

//faça funcionar com um clique na tela
document.addEventListener('click', function(){
    console.log('Click do Mouse! chamando função pular()')
    pular();
});

console.log('====== INICIANDO LOOP DO JOGO ========');
console.log('Agora o jogo vai começar a verificar a colisão....');

let loopDoJogo = setInterval(function(){

    //offsetleft = distancia do elemento ate a borda esquerda da tela
    let posicaoCano = cano.offsetLeft;
    
    //getComputedStyle = pega o estilo atual do elemento
    // replace tira o 'px' do valor e o + na frente transforma em numero
    let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log('cano:', posicaoCano, 'Mario:', posicaoMario);

    if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 60) {
        console.log('=== COLISÃO DETECTADA ===');
        console.log('Cano na posição', posicaoCano);
        console.log('Mario na posição', posicaoMario);
        console.log('Fim de Jogo!');

        //para o cano

        cano.style.animation = 'none';
        cano.style.left = posicaoCano + 'px';

        // para o mario

        mario.style.animation = 'none';
        mario.style.bottom = posicaoMario + 'px';

        //troca de do mario para gamer over
    
        mario.src = './img/download.png';
        mario.style.width = '160px';

        //mostrar a tela de game over

        telaFim.style.visibility = 'visible';

        //parar  o loop

        clearInterval(loopDoJogo);


    }

    function reiniciarJogo(){
        //Esconder a tela de game over
        telaFim.style.visibility = 'hiden';
        //Reustaura o Mario
        cano.style.animation = 'mexerCano 1.5s infinite linear';
        cano.style.left = '';
        //Restaura o Mario
        mario.src = './img/29489001739580a5eb7edb15b9c3332c.gif';
        mario.style.width = '190px';
        mario.style.bottom = '0px';
        mario.style.animation = ''; //remove qualquer animação fixa
        
        //=================================
        //>> CRIAR UM NOVO LOOP
        //=================================

        loopdoJogo = setInterval(function(){
            let posicaoCano = cano.offsetLeft;
            let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

            //A mesma condição de colisão anterior
            if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 60){
                console.log('==== COLISÃO NO JOGO, REINICIANDO');

                cano.style.animation = 'none';
                cano.style.left = posicaoCano + 'px';

                mario.style.animation = 'none';
                mario.style.bottom = posicaoMario + 'px';
                mario.src = './img/game-over.png'
                mario.style.width= '70px';
                telaFim.style.visibility = 'visible'
                clearInterval(loopdoJogo);

            }
        }, 10);

        // FAZER O BOTÃO DE REINICIAR

        botaoReiniciar.addEventListener('click', function(){
            console.log('Botão Reiniciar Clicado!');
            reiniciarJogo();

        });


    }


})