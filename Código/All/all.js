
let botao = document.getElementsByClassName("botao")
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
