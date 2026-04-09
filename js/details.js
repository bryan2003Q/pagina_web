const detailContainer = document.getElementById('character-detail');
const btnBack = document.getElementById('btnBack');



//Configure the back button behavior
btnBack.addEventListener('click', () => {
    localStorage.removeItem('selectedCharacter');
    window.history.back();
});


//Load and render the selected character details

function loadDetail() {

    const savedData = localStorage.getItem('selectedCharacter');
    const character = JSON.parse(savedData);

    if (!character) {
        detailContainer.innerHTML = "<p>Error: no se encontro el personaje.</p>";
        return;

    }
    try {


        // Render information into the HTML

        detailContainer.innerHTML = `
        <h1>${character.name}</h1>
        <img src="${character.image}" style="width:300px;">

        <div class="info">
        <p><strong>Estado:</strong> ${character.status}</p>
        <p><strong>Especie:</strong> ${character.species}</p>
        <p><strong>Genero:</strong> ${character.gender}</p>
        <p><strong>Origen:</strong> ${character.origin.name}</p>
        <p><strong>Ubicación:</strong> ${character.location.name}</p>
        
        </div>
        `;

    } catch (error) {
        console.error("Error al cargar el detalle del personaje:", error);
        detailContainer.innerHTML = "<p> Hubo un error al conectar con la API.</p>";
    }

}
// Execute the function when the page loads
loadDetail();