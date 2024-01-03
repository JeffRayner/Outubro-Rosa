
var arquivo = [];

window.addEventListener("load", (event) => {
    loadFile();
    gerarFato();
});

async function loadFile() {
    var file = await fetch('perguntas.txt');
    file = await file.text();
    arquivo = file.trim().split('\n');
}

function randomFact() {
    var frase = arquivo[Math.floor(Math.random() * arquivo.length)];
    document.getElementById('FATO').textContent = frase;
    toogle("load");toogle("FATO");
}

function gerarFato(){
    toogle("load");toogle("FATO");
    setTimeout(randomFact,300);
}

function toogle(ID) {
    const element = document.getElementById(ID);
    element.style.display = element.style.display === "none" ? "block" : "none";
}

function copy(){
    const element = document.getElementById('FATO');
    const storage = document.createElement('textarea');
    storage.value = element.innerText
    element.appendChild(storage);
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);  
}