//areglo de personajes - no modificar
const personajes = [
{ id: 1, nombre: "A-Bomb", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
{ id: 2, nombre: "Abe Sapien", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
{ id: 3, nombre: "Abin Sur", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
{ id: 4, nombre: "Abomination", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
{ id: 5, nombre: "Abraxas", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
];

//seleccionando los elementos del HTML
const galeria = document.querySelector("#galeria");
const inputFiltro = document.querySelector("#inputFiltro");
const btnFiltrar = document.querySelector("#btnFiltrar");

//función que carga los personajes en la galería 
const mostrarPersonajes = (lista) => {
    galeria.innerHTML = "";

    lista.forEach(personaje => {
        //creo los elementos
        const col = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const titulo = document.createElement("h5");
        const btnEliminar = document.createElement("button");

        //agregue contenido a cada elemento
        img.src = personaje.imagen;
        img.alt = personaje.nombre;
        titulo.textContent = personaje.nombre;
        btnEliminar.textContent = "Eliminar";
        col.setAttribute("data-id", personaje.id);

        //agrego clases de bootstrap
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3 my-2";
        card.className = "card";
        img.className = "card-img-top";
        cardBody.className = "card-body";
        titulo.className = "card-title";
        btnEliminar.className = "btn btn-danger btn-eliminar";

        //armo la estructura y agrego al dom
        cardBody.appendChild(titulo);
        cardBody.appendChild(btnEliminar);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        galeria.appendChild(col);
    });
};
//cargo los personajes al abrir la página
mostrarPersonajes(personajes);

//filtro los personajes por nombre al hacer click en buscar
btnFiltrar.addEventListener("click", () => {
    const textoBuscado = inputFiltro.value;

    const resultadoPersonajes = personajes.filter(personaje => {
        return personaje.nombre === textoBuscado;
    });

    mostrarPersonajes(resultadoPersonajes);
});


//elimino la card del personaje al hacer click en eliminar
galeria.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-eliminar")) {
        const colMasCercano = e.target.closest(".col-12");
        colMasCercano.remove();
    }
});


const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorNombre = formulario.nombre.value;
    const valorImagen = formulario.imagen.value;


    const nuevoPersonaje = {
        id: personajes.length + 1,
        nombre: valorNombre,
        imagen: valorImagen,
    };


    personajes.push(nuevoPersonaje);
    
    mostrarPersonajes(personajes);
});