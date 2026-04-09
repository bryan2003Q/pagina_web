

let characterList = [];

const cardsContainer = document.getElementById('cards-container');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const btnBackToLogin = document.getElementById('btnBackToLogin');


// Function 1: Fetch data from the API
async function loadCharacters(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Store the "results" array in memory
        characterList = data.results;

        renderCharacters();
    } catch (error) {
        console.error("Error al cargar los personajes:", error);

    }

}


//Function 2: Draw cards using the character list in memory
function renderCharacters() {
    //Clear current HTML content
    cardsContainer.innerHTML = "";

    //Iterate through the characterList array

    characterList.forEach(character => {
        //Create the card visual element
        const card = document.createElement('div');
        card.classList.add('card');

        //Map JSON data: image, name, species, and status
        card.innerHTML = `
       
                <img src="${character.image}" alt="${character.name}" style="width:100%;">
                    <h3>${character.name}</h3>
                    <p>Especie: ${character.species}</p>
                    <p>Estado: ${character.status}</p>
               
          
        `;

        // Click event: Save selection to localStorage and redirect
        card.addEventListener('click', () => {

            localStorage.setItem('selectedCharacter', JSON.stringify(character));
            window.location.href = 'details.html';

        });

        cardsContainer.appendChild(card);
    });
}


// Function 3: Search logic
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();

    //API allows filtering by name using query parameters

    const searchUrl = `https://rickandmortyapi.com/api/character/?name=${query}`;

    //llamamos a la funcion de carga con la nueva url
    loadCharacters(searchUrl);

});

// Configuration for back button
if (btnBackToLogin) {
    btnBackToLogin.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
}

//Inicio: Carga inicial al abrir la pagina
loadCharacters('https://rickandmortyapi.com/api/character/');