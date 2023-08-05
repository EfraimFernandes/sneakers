var bolaDaVez = 1

function imageSelected() {
    if(bolaDaVez === 1){
        imagemP1div.classList.add("border");
        imagemP1.classList.add("opacity");
        imagemGrande.src = "./imagens/image-product-1.jpg"

        imagemP2div.classList.remove("border");
        imagemP2.classList.remove("opacity");
        imagemP3div.classList.remove("border");
        imagemP3.classList.remove("opacity");
        imagemP4div.classList.remove("border");
        imagemP4.classList.remove("opacity");
    } else if(bolaDaVez === 2){
        imagemP2div.classList.add("border");
        imagemP2.classList.add("opacity");
        imagemGrande.src = "./imagens/image-product-2.jpg"

        imagemP1div.classList.remove("border");
        imagemP1.classList.remove("opacity");
        imagemP3div.classList.remove("border");
        imagemP3.classList.remove("opacity");
        imagemP4div.classList.remove("border");
        imagemP4.classList.remove("opacity");
    } else if(bolaDaVez === 3){
        imagemP3div.classList.add("border");
        imagemP3.classList.add("opacity");
        imagemGrande.src = "./imagens/image-product-3.jpg"

        imagemP2div.classList.remove("border");
        imagemP2.classList.remove("opacity");
        imagemP1div.classList.remove("border");
        imagemP1.classList.remove("opacity");
        imagemP4div.classList.remove("border");
        imagemP4.classList.remove("opacity");
    } else if(bolaDaVez === 4){
        imagemP4div.classList.add("border");
        imagemP4.classList.add("opacity");
        imagemGrande.src = "./imagens/image-product-4.jpg"

        imagemP2div.classList.remove("border");
        imagemP2.classList.remove("opacity");
        imagemP3div.classList.remove("border");
        imagemP3.classList.remove("opacity");
        imagemP1div.classList.remove("border");
        imagemP1.classList.remove("opacity");
    }
}

// Imagem grande
let imagemGrande = document.querySelector(".imagemGrande")

// Imagem pequena 1 clicada
let imagemP1div = document.querySelector('#imagemPequena1');
let imagemP1 = document.querySelector('.imagemPequena1');

imagemP1div.addEventListener('click', ()=>{
    bolaDaVez = 1
    imageSelected()
})

// Imagem pequena 2 clicada
let imagemP2div = document.querySelector('#imagemPequena2');
let imagemP2 = document.querySelector('.imagemPequena2');

imagemP2div.addEventListener('click', ()=>{
    bolaDaVez = 2
    imageSelected()
})

// Imagem pequena 3 clicada
let imagemP3div = document.querySelector('#imagemPequena3');
let imagemP3 = document.querySelector('.imagemPequena3');

imagemP3div.addEventListener('click', ()=>{
    bolaDaVez = 3
    imageSelected()
})

// Imagem pequena 4 clicada
let imagemP4div = document.querySelector('#imagemPequena4');
let imagemP4 = document.querySelector('.imagemPequena4');

imagemP4div.addEventListener('click', ()=>{
    bolaDaVez = 4
    imageSelected()
})