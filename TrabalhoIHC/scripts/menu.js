function menuShow(){
    let menu_button = document.querySelector('.menu');
    if(menu_button.classList.contains('open')){
        menu_button.classList.remove('open');
    }else{
        menu_button.classList.add('open');
    }
}

var azul = "./imagens/azul.webp";
var branco = "./imagens/branco.webp";
var preto = "./imagens/preto.webp";
var vermelho = "./imagens/vermelho.webp";

function trocardir(){
    document.getElementById("cor").src = azul;
    let aux = azul;
    azul = preto;
    preto = vermelho;
    vermelho = branco;
    branco = aux;
}

function trocaresq(){
    document.getElementById("cor").src = vermelho;
    let aux = vermelho;
    vermelho = preto;
    preto = azul;
    azul = branco;
    branco = aux;
}