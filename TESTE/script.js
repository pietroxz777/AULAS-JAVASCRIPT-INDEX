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
})