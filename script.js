//console.log("hola");

const varTitulo = document.getElementById("titulo");
const contextoParrafo = document.getElementById("texto")

const listaTexto =  ["Amorsin era un emoji normal y corriente", "hasta que un dia decidio enamorarse "," lo trataron muy mal ","por eso es pobre quedo como esta ahora","pero es no siempre fue asi"];

let estadoInicial = true;
let indice = 0;



varTitulo.addEventListener("click", () => {
    if(estadoInicial === true) {
        varTitulo.innerText="¡Hola cara de bolas!";
        varTitulo.style.backgroundColor=" transparent";
        varTitulo.style.color= "red";
    } else {
        varTitulo.innerText="Amorsin";
        varTitulo.style.backgroundColor=" transparent";
        varTitulo.style.color= " rgb(226, 229, 156)";
    }
    estadoInicial = !estadoInicial;

})

listaTexto[listaTexto [0] ];
contextoParrafo.addEventListener("click", () => {
    if (indice < listaTexto.length){
    contextoParrafo.innerText = listaTexto[indice];
    indice = indice +1;
    } else {
    indice = 0; //si quiero que vuelva a empezar
    contextoParrafo.innerText="FIN :) .";
    }
                                                                                                              
})