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

    lista.forEach(({ id, nombre, imagen }) => {
    galeria.innerHTML += `
        <div class="col-3 my-2" data-id=${id}>
            <div class="card">
                <img src=${imagen} class="card-img-top" alt=${nombre} style="height: 200px; object-fit: cover"/>
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <button class="btn btn-danger btn-eliminar">Eliminar</button>
                </div>
            </div>
        </div>
    `;
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
        const colMasCercano = e.target.closest(".col-3");
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