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


const galeria = document.querySelector("#galeria");
const inputFiltro = document.querySelector("#inputFiltro");
const btnFiltrar = document.querySelector("#btnFiltrar");

const mostrarPersonajes = (lista) => {
    galeria.innerHTML = "";

    lista.forEach(personaje => {
        const col = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const titulo = document.createElement("h5");
        const btnEliminar = document.createElement("button");


        img.src = personaje.imagen;
        img.alt = personaje.nombre;
        titulo.textContent = personaje.nombre;
        btnEliminar.textContent = "Eliminar";
        col.setAttribute("data-id", personaje.id);


        col.className = "col-3 my-2";
        card.className = "card";
        img.className = "card-img-top";
        cardBody.className = "card-body";
        titulo.className = "card-title";
        btnEliminar.className = "btn btn-danger btn-eliminar";


        cardBody.appendChild(titulo);
        cardBody.appendChild(btnEliminar);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        galeria.appendChild(col);
    });
};

mostrarPersonajes(personajes);

btnFiltrar.addEventListener("click", () => {
    const textoBuscado = inputFiltro.value;

    const resultadoPersonajes = personajes.filter(personaje => {
        return personaje.nombre === textoBuscado;
    });

    mostrarPersonajes(resultadoPersonajes);
});