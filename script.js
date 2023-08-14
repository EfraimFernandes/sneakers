// IMAGENS 

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









// MODAL
const abrirModal = document.querySelector(".openModal")
const closeModal = document.querySelector(".closeModal")
const modal =  document.querySelector(".dialog")

let proximo = document.querySelector(".proximo")
let anterior = document.querySelector(".anterior")



function imagemInicial() {
    if(bolaDaVez === 1){
        imagemP5div.classList.add("border");
        imagemP5.classList.add("opacity");
        imagemGrande2.src = "./imagens/image-product-1.jpg"

        imagemP6div.classList.remove("border");
        imagemP6.classList.remove("opacity");
        imagemP7div.classList.remove("border");
        imagemP7.classList.remove("opacity");
        imagemP8div.classList.remove("border");
        imagemP8.classList.remove("opacity");
    } else if(bolaDaVez === 2){
        imagemP6div.classList.add("border");
        imagemP6.classList.add("opacity");
        imagemGrande2.src = "./imagens/image-product-2.jpg"

        imagemP5div.classList.remove("border");
        imagemP5.classList.remove("opacity");
        imagemP7div.classList.remove("border");
        imagemP7.classList.remove("opacity");
        imagemP8div.classList.remove("border");
        imagemP8.classList.remove("opacity");
    } else if(bolaDaVez === 3){
        imagemP7div.classList.add("border");
        imagemP7.classList.add("opacity");
        imagemGrande2.src = "./imagens/image-product-3.jpg"

        imagemP5div.classList.remove("border");
        imagemP5.classList.remove("opacity");
        imagemP6div.classList.remove("border");
        imagemP6.classList.remove("opacity");
        imagemP8div.classList.remove("border");
        imagemP8.classList.remove("opacity");
    } else if(bolaDaVez === 4){
        imagemP8div.classList.add("border");
        imagemP8.classList.add("opacity");
        imagemGrande2.src = "./imagens/image-product-4.jpg"

        imagemP5div.classList.remove("border");
        imagemP5.classList.remove("opacity");
        imagemP6div.classList.remove("border");
        imagemP6.classList.remove("opacity");
        imagemP7div.classList.remove("border");
        imagemP7.classList.remove("opacity");
    }
}

proximo.onclick = ()=>{
    bolaDaVez2++
    imageSelected2()
}

anterior.onclick = ()=>{
    bolaDaVez2--
    imageSelected2()
}

abrirModal.onclick = ()=>{
    imagemInicial()
    modal.showModal()
}

closeModal.onclick = ()=>{
    modal.close()
}








// IMAGENS DO MODAL

var bolaDaVez2 = 5

function imageSelected2() {
    if(bolaDaVez2 === 5){
        imagemP5div.classList.add("border");
        imagemP5.classList.add("opacity");
        imagemGrande2.src = "./imagens/image-product-1.jpg"

        imagemP6div.classList.remove("border");
        imagemP6.classList.remove("opacity");
        imagemP7div.classList.remove("border");
        imagemP7.classList.remove("opacity");
        imagemP8div.classList.remove("border");
        imagemP8.classList.remove("opacity");
    } else if(bolaDaVez2 === 6){
        imagemP6div.classList.add("border");
        imagemP6.classList.add("opacity");
        imagemGrande2.src = "./imagens/image-product-2.jpg"

        imagemP5div.classList.remove("border");
        imagemP5.classList.remove("opacity");
        imagemP7div.classList.remove("border");
        imagemP7.classList.remove("opacity");
        imagemP8div.classList.remove("border");
        imagemP8.classList.remove("opacity");
    } else if(bolaDaVez2 === 7){
        imagemP7div.classList.add("border");
        imagemP7.classList.add("opacity");
        imagemGrande2.src = "./imagens/image-product-3.jpg"

        imagemP5div.classList.remove("border");
        imagemP5.classList.remove("opacity");
        imagemP6div.classList.remove("border");
        imagemP6.classList.remove("opacity");
        imagemP8div.classList.remove("border");
        imagemP8.classList.remove("opacity");
    } else if(bolaDaVez2 === 8){
        imagemP8div.classList.add("border");
        imagemP8.classList.add("opacity");
        imagemGrande2.src = "./imagens/image-product-4.jpg"

        imagemP5div.classList.remove("border");
        imagemP5.classList.remove("opacity");
        imagemP6div.classList.remove("border");
        imagemP6.classList.remove("opacity");
        imagemP7div.classList.remove("border");
        imagemP7.classList.remove("opacity");
    } else if(bolaDaVez2 > 8) {
        bolaDaVez2 = 5
        imageSelected2()
    } else if(bolaDaVez2 < 5) {
        bolaDaVez2 = 8
        imageSelected2()
    }
}

// Imagem grande
let imagemGrande2 = document.querySelector(".imagemGrande2")

// Imagem pequena 5 clicada
let imagemP5div = document.querySelector('#imagemPequena5');
let imagemP5 = document.querySelector('.imagemPequena5');

imagemP5div.addEventListener('click', ()=>{
    bolaDaVez2 = 5
    imageSelected2()
})

// Imagem pequena 6 clicada
let imagemP6div = document.querySelector('#imagemPequena6');
let imagemP6 = document.querySelector('.imagemPequena6');

imagemP6div.addEventListener('click', ()=>{
    bolaDaVez2 = 6
    imageSelected2()
})

// Imagem pequena 7 clicada
let imagemP7div = document.querySelector('#imagemPequena7');
let imagemP7 = document.querySelector('.imagemPequena7');

imagemP7div.addEventListener('click', ()=>{
    bolaDaVez2 = 7
    imageSelected2()
})

// Imagem pequena 8 clicada
let imagemP8div = document.querySelector('#imagemPequena8');
let imagemP8 = document.querySelector('.imagemPequena8');

imagemP8div.addEventListener('click', ()=>{
    bolaDaVez2 = 8
    imageSelected2()
})









// CARRINHO

let carrinho = document.querySelector(".carrinho")
let carrinhoSpan = document.querySelector(".cart-span")

var on = 1

function ligaDesliga() {
    if(on === 2){
        carrinhoSpan.classList.add("on")
        carrinhoSpan.classList.remove("off")
        on = 2
    } else if(on === 1) {
        carrinhoSpan.classList.add("off")
        carrinhoSpan.classList.remove("on")
        on = 1
    }
}

carrinho.addEventListener('click', ()=>{
    if(on === 1){
        on = 2
        ligaDesliga()
    } else if(on === 2){
        on = 1
        ligaDesliga()
    }

})









// QUANTIDADE DE PRODUTO

var quantidadeProduto = document.querySelector(".quantidade-produto")
var quantidade = parseInt(quantidadeProduto.textContent)
let diminuiQuantidade = document.querySelector(".menos")
let aumentaQuantidade = document.querySelector(".mais")
let addCardButtom = document.querySelector(".add-cart-button")
let lixeira = document.querySelector(".lixeira")

function menosQuantidade(){
    if(quantidadeProduto.textContent >= 1) {
        quantidade--
        quantidadeProduto.textContent = quantidade
        if(buttomCard === true){
            let numQuant = document.querySelector(".numQuantProd")
            let numQuantProd = parseInt(numQuant.textContent)
            numQuantProd =  quantidade
            numQuant.textContent = numQuantProd
            let numQuant2 = document.querySelector(".multi-preco2")
            let numQuantProd2 = parseInt(numQuant2.textContent)
            numQuantProd2 = quantidade
            numQuant2.textContent = numQuantProd2
    
            nunQuantDisplay()
            atualizarTotal()
            buttomCard = false
        } else {
            let numQuant = document.querySelector(".numQuantProd")
            let numQuantProd = parseInt(numQuant.textContent)
            numQuantProd =  quantidade
            numQuant.textContent = numQuantProd
            let numQuant2 = document.querySelector(".multi-preco2")
            let numQuantProd2 = parseInt(numQuant2.textContent)
            numQuantProd2 = quantidade
            numQuant2.textContent = numQuantProd2

            atualizarTotal()
        }
    }
}

function maisQuantidade() {
    quantidade++
    quantidadeProduto.textContent = quantidade
    if(buttomCard === true){
        let numQuant = document.querySelector(".numQuantProd")
        let numQuantProd = parseInt(numQuant.textContent)
        numQuantProd =  quantidade
        numQuant.textContent = numQuantProd
        let numQuant2 = document.querySelector(".multi-preco2")
        let numQuantProd2 = parseInt(numQuant2.textContent)
        numQuantProd2 = quantidade
        numQuant2.textContent = numQuantProd2

        nunQuantDisplay()
        atualizarTotal()
        buttomCard = false
    } else {
        let numQuant = document.querySelector(".numQuantProd")
        let numQuantProd = parseInt(numQuant.textContent)
        numQuantProd =  quantidade
        numQuant.textContent = numQuantProd
        let numQuant2 = document.querySelector(".multi-preco2")
        let numQuantProd2 = parseInt(numQuant2.textContent)
        numQuantProd2 = quantidade
        numQuant2.textContent = numQuantProd2

        atualizarTotal()
    }
}

function nunQuantDisplay() {
    if(buttomCard === true){
        let numQuant = document.querySelector(".numQuantProd")
        let numQuantProd = parseInt(numQuant.textContent)
        if(numQuantProd === 0){
            numQuant.classList.remove("on")
            numQuant.classList.add("off")
        } else {
            numQuant.classList.add("on")
            numQuant.classList.remove("off")
        }
        buttomCard = false
    }
}


function atualizarTotal() {
    let total = 0
    let multiTotal = document.querySelector(".multi-total")
    let quantidadeProduto = document.querySelector(".quantidade-produto")
    let quantidade = parseInt(quantidadeProduto.textContent)
    const preco = 125
    total = quantidade * preco
    multiTotal.textContent = `R$${total},00`

    let carrinho = document.querySelector(".contentCarrinho")
    let carrinhoVazio = document.querySelector(".carrinhoVazio")
    if(total === 0) {
        carrinho.classList.add("off")
        carrinho.classList.remove("on")
        
        carrinhoVazio.classList.add("on")
        carrinhoVazio.classList.remove("off")
    } else {
        carrinho.classList.add("on")
        carrinho.classList.remove("off")

        carrinhoVazio.classList.add("off")
        carrinhoVazio.classList.remove("on")
    }
}

diminuiQuantidade.addEventListener('click', ()=>{
    menosQuantidade()
})

aumentaQuantidade.addEventListener('click', ()=>{
    maisQuantidade()
})

var buttomCard = false

addCardButtom.addEventListener('click', ()=>{
    buttomCard = true
    nunQuantDisplay()
})

lixeira.addEventListener('click', ()=>{
    menosQuantidade()
})









// BARRA LARANJA NO MENU
const item1 = document.getElementById("1")
const item2 = document.getElementById("2")
const item3 = document.getElementById("3")
const item4 = document.getElementById("4")
const item5 = document.getElementById("5")

var ativo = 0

function barraLaranja() {
    if(ativo === 1 ){
        item1.classList.add("barraLaranja")

        item2.classList.remove("barraLaranja")
        item3.classList.remove("barraLaranja")
        item4.classList.remove("barraLaranja")
        item5.classList.remove("barraLaranja")
    } else if(ativo === 2 ){
        item2.classList.add("barraLaranja")

        item1.classList.remove("barraLaranja")
        item3.classList.remove("barraLaranja")
        item4.classList.remove("barraLaranja")
        item5.classList.remove("barraLaranja")
    } else if(ativo === 3 ){
        item3.classList.add("barraLaranja")

        item2.classList.remove("barraLaranja")
        item1.classList.remove("barraLaranja")
        item4.classList.remove("barraLaranja")
        item5.classList.remove("barraLaranja")
    } else if(ativo === 4 ){
        item4.classList.add("barraLaranja")

        item2.classList.remove("barraLaranja")
        item3.classList.remove("barraLaranja")
        item1.classList.remove("barraLaranja")
        item5.classList.remove("barraLaranja")
    } else if(ativo === 5 ){
        item5.classList.add("barraLaranja")

        item2.classList.remove("barraLaranja")
        item3.classList.remove("barraLaranja")
        item4.classList.remove("barraLaranja")
        item1.classList.remove("barraLaranja")
    }
}

item1.addEventListener('click', ()=>{
    ativo = 1
    barraLaranja()
})

item2.addEventListener('click', ()=>{
    ativo = 2
    barraLaranja()
})

item3.addEventListener('click', ()=>{
    ativo = 3
    barraLaranja()
})

item4.addEventListener('click', ()=>{
    ativo = 4
    barraLaranja()
})

item5.addEventListener('click', ()=>{
    ativo = 5
    barraLaranja()
})
