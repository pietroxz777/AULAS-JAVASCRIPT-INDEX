//=====================================
// Missão 1 - Descobrir as Raças (Super Simples)
//=====================================

async function main() {
  try {
    // 1️⃣ Pegar todas as raças
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    const racas = data.message;

    // Quantas raças existem
    const total = Object.keys(racas).length;
    console.log("Total de raças:", total);

    // Quais raças possuem sub-raças
    console.log("\nRaças com sub-raças:");
    for (const raca in racas) {
      if (racas[raca].length > 0) {
        console.log(`${raca}: ${racas[raca].join(", ")}`);
      }
    }

    // Qual raça possui mais fotos
    let racaMaisFotos = "";
    let maiorQtd = 0;

    for (const raca of Object.keys(racas)) {
      const resFotos = await fetch(`https://dog.ceo/api/breed/${raca}/images`);
      const fotos = await resFotos.json();
      if (fotos.message.length > maiorQtd) {
        maiorQtd = fotos.message.length;
        racaMaisFotos = raca;
      }
    }

    console.log("\nRaça com mais fotos:", racaMaisFotos, "-", maiorQtd, "imagens");

  } catch (erro) {
    console.error("Erro:", erro);
  }
}

main();

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