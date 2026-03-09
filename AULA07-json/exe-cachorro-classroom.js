//=====================================
// Missão 1 - Descobrir as Raças (Super Simples)
//=====================================

async function explorar(){
    // 1 - buscar todas raças
    const racas = await fetch('https://dog.ceo/api/breeds/list/all')
    // quando a resposta chegar, convertemos para JSON
    .then(r => r.json ());
    // 2 - contar quantas raças existem 
    const total = Object.keys(racas.message).length;
    //mostrar o total das raças no controle
    console.log(`total de raças: ${total}`)
    // 3 - descobrir raças que tem sub-raças
    for (const raca in racas.message){ 
         if(racas.message[raca].length > 0){
            console .log(`${raca} tem sub-raças`, racas.message[raca]);
        
         }
    } 

}   
explorar();

/*
Respostas:

1 - Quantas raças existem no total?
Resposta: 98 (pode variar conforme atualização da API)

2 - Quais raças possuem sub-raças?
Exemplos:
- bulldog: boston, english, french
- collie: border
- corgi: cardigan
- poodle: miniature, standard, toy
- retriever: golden, chesapeake, curly, flatcoated
- terrier: american, australian, bedlington, border, cairn, fox, irish, kerryblue, lakeland, norfolk, norwich, patterdale, russell, scottish, sealyham, silky, tibetan, toy, welsh, westhighland, wheaten, yorkshire

3 - Qual raça possui mais fotos?
O código percorre todas as raças e conta fotos usando /breed/images. O resultado aparece no console.

*/