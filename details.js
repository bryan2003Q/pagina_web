const contenedorDetalle = document.getElementById('detalle-personaje');
const btnBack = document.getElementById('btnBack');



//configurar el botón de regreso
btnBack.addEventListener('click', () => {
    localStorage.removeItem('personajeSeleccionado');
    window.history.back();
});


function cargarDetalle() {

    const datosGuardados = localStorage.getItem('personajeSeleccionado');
    const personaje = JSON.parse(datosGuardados);

    if (!personaje) {
        contenedorDetalle.innerHTML = "<p>Error: no se encontro el personaje.</p>";
        return;

    }
    try {

   

        //mostrar informacion en el html

        contenedorDetalle.innerHTML = `
        <h1>${personaje.name}</h1>
        <img src="${personaje.image}" style="width:300px;">

        <div class="info">
        <p><strong>Estado:</strong> ${personaje.status}</p>
        <p><strong>Especie:</strong> ${personaje.species}</p>
        <p><strong>Genero:</strong> ${personaje.gender}</p>
        <p><strong>Origen:</strong> ${personaje.origin.name}</p>
        <p><strong>Ubicación:</strong> ${personaje.location.name}</p>
        
        </div>
        `;

    } catch (error) {
        console.error("Error al cargar el detalle del personaje:", error);
        contenedorDetalle.innerHTML = "<p> Hubo un error al conectar con la API.</p>";
    }

}
//Ejecutar la función al cargar la página
cargarDetalle();