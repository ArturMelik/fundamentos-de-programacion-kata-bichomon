//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const cambioTitulo = document.getElementById("gen-1");
cambioTitulo.innerText = "Generasion 1 Pokimon";


//2. Cambia el color de fondo de la primera generación de Pokimon.
const cambioFondo = document.getElementById("cambiobg");
cambioFondo.style.backgroundColor = "yellow";


//3. Imprime por consola la URL de la página.
console.log(window.location.href); // Se obtiene el URL;


//4. Imprime por consola el dominio de la página.

console.log(window.location.hostname);

//5. Imprime todos los nodos de imagen.


const imagenes = document.querySelectorAll("img");

for(let i = 0; i < imagenes.lentgh;i++){
    console.log(imagenes[i]);
}
console.log(imagenes);

//6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"


const cambioImagen = document.querySelectorAll("img");
for (let i = 0; i < cambioImagen.length; i++) {
    cambioImagen[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
    
}
//7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`

const typeFlying = document.querySelectorAll(".itype.flying");

for(let i = 0; i < typeFlying.length; i++){
    typeFlying[i].style.backgroundColor = "red";
}