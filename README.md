



### Project Description
This is a web development practice consisting of a three-page application that interacts with the public Rick and Morty API (`https://rickandmortyapi.com/`). The project allows users to log in, view a list of characters from the show, search for specific characters by name, and view the full details of any selected character.

### File Structure
The project is built using  HTML, CSS, and JavaScript, and is organized as follows:

- `/index.html`: The main page containing the login form.
- `/pages/`: Directory containing the main HTML pages of the application after login.
  - `characters.html`: Page displaying the list of characters.
  - `details.html`: Page displaying the detailed view of a specific character.
- `/css/`: Directory containing the cascading stylesheets (CSS) for each page.
  - `login.css`: Styles for the login page.
  - `characters.css`: Styles for the character list/grid view.
  - `details.css`: Styles for the details view.
- `/js/`: Directory containing the JavaScript application logic.
  - `login.js`: Handles static user authentication.
  - `characters.js`: Responsible for fetching data from the Rick and Morty API, rendering the character cards, and handling the search functionality.
  - `details.js`: Retrieves the saved character information from memory and displays its details.

### Features
1. **Login:** Access through static credentials (Username: `admin`, Password: `1234`). Upon successful login, the user is redirected to the main characters page.
2. **Character Listing and Search:** Displays character cards dynamically fetched from the API. It includes a search bar to filter characters by name.
3. **Character Details:** By clicking on a character card, the information is stored in `localStorage` and the user is redirected to a detail page displaying species, status, origin, gender, and last known location.
4. **Navigation:** A back button to return from the details view to the character list seamlessly.

# Proyecto Web: Rick and Morty Character Explorer



### Descripción del Proyecto
Esta es una práctica de desarrollo web que consiste en una aplicación de tres pantallas interactuando con la API pública de Rick and Morty (`https://rickandmortyapi.com/`). El proyecto permite a los usuarios iniciar sesión, visualizar una lista de personajes de la serie, buscar personajes específicos por su nombre y ver los detalles completos de cada personaje seleccionado.

### Estructura de Archivos
El proyecto está construido usando HTML, CSS y JavaScript vainilla, y está organizado de la siguiente forma:

- `/index.html`: La página principal que contiene el formulario de inicio de sesión.
- `/pages/`: Directorio que contiene las páginas HTML principales de la aplicación después del inicio de sesión.
  - `characters.html`: Página que muestra la lista de personajes.
  - `details.html`: Página que muestra los detalles de un personaje en específico.
- `/css/`: Directorio que contiene los estilos en cascada (CSS) para cada página.
  - `login.css`: Estilos de la página de inicio de sesión.
  - `characters.css`: Estilos de la vista de cuadrícula/lista de personajes.
  - `details.css`: Estilos de la vista de detalles.
- `/js/`: Directorio que contiene la lógica de la aplicación en JavaScript.
  - `login.js`: Maneja la autenticación estática del usuario.
  - `characters.js`: Se encarga de hacer peticiones a la API de Rick and Morty, renderizar las tarjetas y manejar el buscador.
  - `details.js`: Recupera la información del personaje guardada en memoria y la muestra en detalle.

### Funcionalidades
1. **Inicio de Sesión (Login):** Ingreso mediante las credenciales estáticas (Usuario: `admin`, Contraseña: `1234`). Al ingresar correctamente se redirige a la página principal de personajes.
2. **Listado y Búsqueda de Personajes:** Muestra tarjetas de personajes obtenidas dinámicamente desde la API. Cuenta con una barra de búsqueda para filtrar personajes por nombre.
3. **Detalles del Personaje:** Al hacer clic en la tarjeta de un personaje, la información se almacena en el `localStorage` y el usuario es redirigido a una página de detalles que muestra la especie, estado, origen, género y última ubicación.
4. **Navegación:** Botón de retroceso para volver de los detalles a la lista de personajes de forma fluida.


---

