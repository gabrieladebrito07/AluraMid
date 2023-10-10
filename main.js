function tocaSomPom(){
    document. querySelector ('#som_tecla_pom').play();
}

const listaDeBotoes = document.querySelector('#som_tecla_pom').onclick= tocaSomPom;

let resultado = 2;

listaDeBotoes[0].onclick = tocaSomPom;