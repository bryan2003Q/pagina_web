

let listaPersonajes = [];

const contenedor = document.getElementById('contenedor-cards');
const btnBuscar = document.getElementById('btnBuscar');
const inputBusqueda = document.getElementById('inputBusqueda');


// Funcion 1: obtener los datos
async function cargarPersonajes(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Guardamos la parte de "results" en nuestro arreglo en memoria
        // "results" es el [] que viste en la documentación
        listaPersonajes = data.results;

        //una vez guardados, llamamos a la función para mostrarlos
        mostrarEnPantalla();
    } catch (error) {
        console.error("Error al cargar los personajes:", error);

    }

}


//Funcion 2: dibujar las cards usando el arreglo en memoria
function mostrarEnPantalla() {
    //Limpiamos lo que haya en el html
    contenedor.innerHTML = "";

    // recorremos el arreglo listaPersonajes

    listaPersonajes.forEach(personaje => {
        //creamos el elemento visual card
        const card = document.createElement('div');

        // Le asignamos la clase para el CSS
        card.classList.add('card');

        //usamos los datos exactos en el Json: ,image y .name
        card.innerHTML = `
       
                <img src="${personaje.image}" alt="${personaje.name}" style="width:100%;">
                    <h3>${personaje.name}</h3>
                    <p>Especie: ${personaje.species}</p>
                    <p>Estado: ${personaje.status}</p>
               
          
        `;

        // Al hacer clic , pasamos el ID a la otra pagina
        card.addEventListener('click', () => {

            localStorage.setItem('personajeSeleccionado', JSON.stringify(personaje));
            window.location.href = 'details.html';

        });

        contenedor.appendChild(card);
    });
}


// Función 3: Lógica del buscador
btnBuscar.addEventListener('click', () => {
    const busqueda = inputBusqueda.value.toLowerCase();

    //La Api permite buscar por nombre directamente en la URL

    const urlBusqueda = `https://rickandmortyapi.com/api/character/?name=${busqueda}`;

    //llamamos a la funcion de carga con la nueva url
    cargarPersonajes(urlBusqueda);

});

//Inicio: Carga inicial al abrir la pagina
cargarPersonajes('https://rickandmortyapi.com/api/character/');