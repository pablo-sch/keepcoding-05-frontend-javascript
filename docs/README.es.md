# Entrega Proyecto de Desarrollo Frontend con JavaScript

**Proyectos KeepCoding - Web 18**  
Consulta la lista completa de repositorios y descripciones en [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

## Selecciona tu Idioma

- 🇺🇸 [Inglés](README.md)
- 🇩🇪 [Alemán](README.de.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Objetivo del Proyecto

Con el fin de ejercitar y demostrar los conocimientos adquiridos en clases virtuales, este proyecto consiste en desarrollar una aplicación web similar a Wallapop. No se permite utilizar librerías o _frameworks_ de JavaScript, aunque sí se pueden usar utilidades de CSS externas.  
Además, se debe proporcionar un archivo `db.json` para el backend con los datos de ejemplo necesarios para la corrección de la práctica.

<!-- ------------------------------------------------------------------------------------------- -->

## Conocimientos Aprendidos y Trabajados

- Funcionamiento básico de un navegador.
- Browser Object Model (BOM):
  - Navigation
  - Location
  - Window
- Document Object Model (DOM), sus nodos y elementos.
- Selección de nodos.
- Creación y eliminación de elementos del DOM.
- Manipulación de atributos del DOM, así como de sus estilos y clases CSS.
- Manejo de eventos del DOM.
- Comportamientos por defecto en los componentes HTML.
- _Event Bubbling_ y _Capturing_.
- Promesas y sus estados: _pending_, _fulfilled_ y _rejected_.
- Peticiones HTTP con `fetch`.
- `localStorage` y `sessionStorage`.
- Almacenamiento local de datos en HTML5: cookies, storage e IndexedDB.

<!-- ------------------------------------------------------------------------------------------- -->

## Detalles del Proyecto

### 1. Listado de Posts

- Cada post debe mostrar su imagen (si tiene), nombre, descripción, precio y si es de compra o venta.
- Los posts deben obtenerse a través de un _endpoint_.
- La pantalla de listado debe gestionar todos los estados de la interfaz:
  - **Vacío** (no hay posts).
  - **Error** (al cargar los posts).
  - **Carga** (mientras se cargan los posts).
  - **Éxito** (cuando los posts se han recuperado correctamente).
- Al pulsar sobre un post, se debe acceder a su pantalla de detalle.
- Si el usuario ha iniciado sesión, debe mostrarse un botón para acceder a la pantalla de creación de posts.

### 2. Detalle de Post

- Debe mostrar imagen (si tiene), nombre, descripción, precio y si es de compra o venta.
- Debe gestionar todos los estados de la interfaz:
  - **Vacío** (no existe el post).
  - **Error** (al cargar la información del post).
  - **Carga** (mientras se carga la información).
  - **Éxito** (cuando se ha recuperado la información correctamente).
- Si el usuario está autenticado y el post le pertenece, debe mostrarse un botón para eliminarlo (previa confirmación).

### 3. Creación de un Post

- Debe incluir un formulario con los siguientes campos:
  - **Foto** (opcional).
  - **Nombre** (obligatorio).
  - **Descripción** (obligatoria).
  - **Precio** (obligatorio).
  - **Compra/Venta** (obligatorio).
- Al enviar el formulario, se debe hacer una petición al backend para guardar el post.
- Se deben gestionar los estados de la interfaz:
  - **Error** (al guardar el post).
  - **Carga** (durante el guardado).
  - **Éxito** (cuando se guarda correctamente).
- Solo se puede acceder a esta pantalla si el usuario está logueado. En caso contrario, se redirige al listado e informa del motivo.

### 4. Login

- Debe mostrar un formulario con nombre de usuario y contraseña.
- Al enviar el formulario, se debe autenticar al usuario contra el backend y obtener un token JWT.
- Se deben gestionar los estados: carga, error y éxito.

### 5. Registro

- Similar a la pantalla de login.
- Debe registrar al usuario en el backend.
- Se deben gestionar los estados: carga, error y éxito.

### 6. Objetivos Opcionales

- Paginación de posts en el listado (la API devuelve solo 10 por defecto).
- Buscador de posts.
- Edición de posts (solo si el usuario es propietario).
- Filtrado por etiquetas (_tags_) estáticas.
- Hacer que los _tags_ sean dinámicos.

<!-- ------------------------------------------------------------------------------------------- -->

## Tecnologías Utilizadas

### Lenguajes

- **HTML**: Para la estructuración del contenido y la creación de la estructura de la página web.
- **CSS**: Para el diseño y estilo visual de la página, asegurando una experiencia de usuario atractiva y coherente.
- **JavaScript**: Para agregar interactividad y características dinámicas al sitio web, mejorando la experiencia del usuario con funcionalidades como validación de formularios, animaciones y manejo de eventos.

### Dependencias

Ninguna

<!-- ------------------------------------------------------------------------------------------- -->

## Instrucciones de Instalación y Uso

### Requisitos de Software

- **[Git](https://git-scm.com/downloads)** (testeado en la versión **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (testeado en la versión **1.99.0**)
- **[Sparrest (API REST)](https://github.com/kasappeal/sparrest.js)** (creada por el docente **Alberto Casero** - **KeepCoding**)
- **Live Server** (VS Code addon, _opcional_)

### Clonación del Repositorio

- **API REST Sparrest**

```bash
git clone https://github.com/kasappeal/sparrest.js.git
```

- **Poyecto**

```bash
git clone https://github.com/pablo-sch/keepcoding-05-frontend-javascript.git
```

- **Demo**

![Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

### Pasos Para Utilizar Este Proyecto

Se debe de levantar el servidor para poner en funcionamiento la API REST para que puedas interactuar con la base de datos simulada.

1. Descargue el archivo comprimido del proyecto desde GitHub a su ordenador o clónelo mediante SourceTree.
2. Una vez descargado o clonado el proyecto, agréguele a su espacio de trabajo en Visual Studio Code.
3. Una vez descargado Sparrest, actualice sus dependencias. Luego, para incorporar la base de datos probada en este proyecto, copie el archivo `db.json` del proyecto y reemplácelo por el que se genera en Sparrest una vez inicializado.

Para iniciar la base de datos, simplemente ejecute el siguiente comando dentro del directorio de Sparrest:

```bash
npm start
```

### Notas

- Una vez clonado el repositorio puedes abrir los archivos `.html` con **Live Server** para previsualizarlos en el navegador.

- El archivo `db.json` contiene tres cuentas y 14 publicaciones. Estas son las credenciales de cada cuenta para iniciar sesión en el proyecto y editar las publicaciones ya creadas:

- [pablsch.it@gmail.com](mailto:pablsch.it@gmail.com) / pwd: 123456
- [Pedro.it@gmail.com](mailto:Pedro.it@gmail.com) / pwd: 123456
- [jose.JJ@gmail.com](mailto:jose.JJ@gmail.com) / pwd: 123456

<!-- ------------------------------------------------------------------------------------------- -->

## Vista Previa del Proyecto

### Home

![Home](../etc/preview_images/home.png)

### Home Mobile

![Home Mobile](../etc/preview_images/home_mobile.png)

### Create Post

![Create Post](../etc/preview_images/create_post.png)

### Post Detail

![Post Detail](../etc/preview_images/post_detail.png)

### Edit Post

![Edit Post](../etc/preview_images/post_edit.png)

<!-- ------------------------------------------------------------------------------------------- -->

## Contribuciones y Licencias

Este proyecto no cuenta con contribuciones externas ni licencias.
