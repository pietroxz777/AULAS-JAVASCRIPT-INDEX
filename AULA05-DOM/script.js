// Ao pressionar as teclas "r, g , b " , mudar a cor de fundo da pag

document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
    } else if (e.key === "g"){
        document.body.style.backgroundColor = "green"
    } else {
        document.body.style.backgroundColor = "blue"
    }
})

