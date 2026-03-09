//=====================================
//exe classroom:
//=====================================

async function buscarHusky() {
  try {
    const response = await fetch("https://dog.ceo/api/breed/husky/images/random");
    const data = await response.json();

    console.log("🐺 Husky:", data.message);

  } catch (erro) {
    console.error("Erro ao buscar imagem:", erro);
  }
}

buscarHusky();

