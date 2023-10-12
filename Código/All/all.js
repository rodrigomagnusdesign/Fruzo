
let botao = document.getElementsById("botao")
botao.addEventListener("click", acaoClique)

function acaoClique() {
    console.log("Resposta ao evento BOTÃO");
    alert("Entre em contato pelo nosso WhatsApp, temos desconto de 5%!");

}

let fruits;

fetch('https://www.fruityvice.com/')
    .then(response => response.json())
    .then(data => exibir(data))

function exibir(dados) {
    fruits = dados
    console.log(fruits)
}

// Atividade países
let buscarPais = document.getElementById("buscarPais");

buscarPais.onclick = () => {
    let pais = document.getElementById("pais").value;

    fetch(`https://restcountries.com/v3.1/name/${pais}`)
        .then(response => response.json())
        .then(response => exibirInformacoesDoPaisNaTela(response))
}

function exibirInformacoesDoPaisNaTela(informacoes) {
    let nomeOficial = document.getElementById("nomeOficial");
    let divBandeira = document.getElementById("bandeira");

    let imgHtml = document.createElement("img");
    imgHtml.src = informacoes[0].flags.png;
    imgHtml.alt = informacoes[0].flags.alt;

    divBandeira.append(imgHtml);

    nomeOficial.value = informacoes[0].name.nativeName.deu.official;
}


let itemsDesejados = [];
let itemCompra = document.getElementById("itemCompra");
let adicionar = document.getElementById("adicionar");
let salvar = document.getElementById("salvar");
let visualizar = document.getElementById("visualizar");
let apagar = document.getElementById("apagar");
let itemsCompra = document.getElementById("itemsCompra");


adicionar.onclick = () => {
    itemsDesejados.push(itemCompra.value);
    itemCompra.value = ''
    console.log(itemsDesejados);
}

salvar.onclick = () => {
    let itemsJson = JSON.stringify(itemsDesejados);
    localStorage.setItem('items', itemsJson);
}

visualizar.onclick = () => {
    let itemsJson = localStorage.getItem('items');
    let itemsObjeto = JSON.parse(itemsJson);

    if (itemsObjeto.length > 0) {

        itemsObjeto.forEach(item => {
            let itemLista = document.createElement("li");
            itemLista.innerText = item;
            itemsCompra.append(itemLista);
        });
    }
}

apagar.onclick = () => {
    let itensLista = document.getElementsByTagName("li");
    let quantidadeItens = itensLista.length;
    localStorage.clear();
    itemsDesejados = [];

    if (itensLista.length > 0) {

        for (let index = 0; index < quantidadeItens; index++) {
            itensLista[0].remove();
        }
    }
}
