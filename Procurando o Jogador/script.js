var perg = document.getElementById('perg');
var img = document.getElementById('img');
var pj = document.getElementById('pj');
var rod = document.getElementById('ft');

perg.innerHTML = 'Procura o Jogador clicando nos botões abaixo';

function ronaldo(){
    perg.innerHTML = 'Cristiano Ronaldo';
    img.src = './img/Ronaldo.png';
    document.body.style.background = 'rgb(7, 229, 7)';
    pj.style.color = 'black';
    rod.style.color = 'black';
}
function messi(){
    perg.innerHTML = 'Lionel Messi';
    img.src = './img/Messi.jpg';
    document.body.style.background = 'yellow';
    pj.style.color = 'black';
    rod.style.color = 'black';
}
function neymar(){
    perg.innerHTML = 'Neymar Júnior';
    img.src = './img/Neymar.jpg';
    document.body.style.background = 'black';
    pj.style.color = 'white';
    rod.style.color = 'white';
}
function maria(){
    perg.innerHTML = 'Di Maria';
    img.src = './img/Di Maria.jpg';
    document.body.style.background = 'red';
    pj.style.color = 'black';
    rod.style.color = 'black';
}
function Mbape(){
    perg.innerHTML = 'Mbapé';
    img.src = './img/Mbapé.jpg';
    document.body.style.background = 'white';
    pj.style.color = 'black';
    rod.style.color = 'black';
}
function ronaldinho(){
    perg.innerHTML = 'Ronaldinho Gaúcho';
    img.src = './img/Ronaldinho.jpg';
    document.body.style.background = 'rgb(0, 238, 255)';
    pj.style.color = 'black';
    rod.style.color = 'black';

}