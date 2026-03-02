    // exercicios classrom - manipulando o DOM 02.03.26

    //================================================
    // EXE 1 - Ao pressionar as teclas "r, g , b " , mudar a cor de fundo da pag
    //================================================


    document.addEventListener("keydown", function(e){
        if (e.key === "r"){
            document.body.style.backgroundColor = "red"
        } else if (e.key === "g"){
            document.body.style.backgroundColor = "green"
        } else {
            document.body.style.backgroundColor = "blue"
        }
    })

//================================================
// EXE 2 - Mostrar no console a tecla pressionada
//================================================

document.addEventListener("keydown", function(e){

    console.log("Tecla pressionada:", e.key)

})

//================================================
// EXE 3 - Permitir letras maiúsculas também
//================================================

document.addEventListener("keydown", function(e){

    let tecla = e.key.toLowerCase()

    if (tecla === "r"){
        document.body.style.backgroundColor = "red"
    } else if (tecla === "g"){
        document.body.style.backgroundColor = "green"
    } else if (tecla === "b"){
        document.body.style.backgroundColor = "blue"
    }

})

//================================================
// EXE 4 - Mostrar o nome da cor na página
//================================================

const titulo = document.createElement("h1")
titulo.style.textAlign = "center"
document.body.appendChild(titulo)

document.addEventListener("keydown", function(e){

    let tecla = e.key.toLowerCase()

    if (tecla === "r"){
        document.body.style.backgroundColor = "red"
        titulo.innerHTML = "RED"
    } else if (tecla === "g"){
        document.body.style.backgroundColor = "green"
        titulo.innerHTML = "GREEN"
    } else if (tecla === "b"){
        document.body.style.backgroundColor = "blue"
        titulo.innerHTML = "BLUE"
    }

})

//================================================
// EXE 5 - Adicionar y (yellow) e p (purple)
//================================================

document.addEventListener("keydown", function(e){

    let tecla = e.key.toLowerCase()

    if (tecla === "r"){
        document.body.style.backgroundColor = "red"
    } else if (tecla === "g"){
        document.body.style.backgroundColor = "green"
    } else if (tecla === "b"){
        document.body.style.backgroundColor = "blue"
    } else if (tecla === "y"){
        document.body.style.backgroundColor = "yellow"
    } else if (tecla === "p"){
        document.body.style.backgroundColor = "purple"
    }

})

//================================================
// EXE 6 - Pressione x para remover a cor aplicada
//================================================

document.addEventListener("keydown", function(e){

    let tecla = e.key.toLowerCase()

    if (tecla === "x"){
        document.body.style.backgroundColor = ""
    }

})

//================================================
// EXE 7 - Refatorar usando objeto
//================================================

const cores1 = {
    r: "red",
    g: "green",
    b: "blue",
    y: "yellow",
    p: "purple"
}

document.addEventListener("keydown", function(e){

    let tecla = e.key.toLowerCase()

    if (cores1[tecla]){
        document.body.style.backgroundColor = cores1[tecla]
    }

})

//================================================
// EXE 8 - Mostrar no console o valor RGB da cor
//================================================

const cores = {
    r: "red",
    g: "green",
    b: "blue"
}

document.addEventListener("keydown", function(e){

    let tecla = e.key.toLowerCase()

    if (cores[tecla]){
        document.body.style.backgroundColor = cores[tecla]

        let rgb = getComputedStyle(document.body).backgroundColor
        console.log("RGB:", rgb)
    }

})

//================================================
// EXE 9 - Cada tecla muda para a próxima cor da lista
//================================================

const listaCores = ["red", "green", "blue", "yellow", "purple"]
let indice = 0

document.addEventListener("keydown", function(){

    document.body.style.backgroundColor = listaCores[indice]

    indice++

    if (indice >= listaCores.length){
        indice = 0
    }

})

//================================================
// EXE 10 - n = modo escuro | d = modo claro
//================================================

document.addEventListener("keydown", function(e){

    let tecla = e.key.toLowerCase()

    if (tecla === "n"){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else if (tecla === "d"){
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }

})