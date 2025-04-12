## Selecciona tu lenguaje

- 🇺🇸 [Inglés](README.md)
- 🇩🇪 [Alemán](README.de.md)

## URL del Proyecto mediante GitHub Pages
[https://pablosch26.github.io/keepcoding-frontend-javascript-submission-5/](https://pablosch26.github.io/keepcoding-frontend-javascript-submission-5/)

# Entrega Proyecto de Desarrollo Frontend con JavaScript
## Conocimientos trabajados
- Funcionamiento de un Navegador.
- Composicion de un href.
- Browser Object Model (BOM) y Document Object Model (DOM).
- Nodos y Element del DOM.
- Seleccionar nodos.
- Crear y eliminar elementos del nodo.
- Manipulanr atributos del nodo más sus estilos y clases CSS.
- Manejar eventos del DOM.
- Comportamiento por defecto en los componentes del HTML.
- Event Bubbling & Capturing.
- Promesas y sus estados: pending, fulfilled y rejected.
- Peticiones HTTP con fetch.
- localStorage & sessionStorage
- Almacenamiento local de datos de HTML5: cookies, storage y indexed DB.

## Descripción del Proyecto
Con el fin de ejercitar y demostrar los conocimientos adquiridos en clases virtuales este proyecto consiste en desarrollar una aplicación web similar a Wallapop. No se tiene permitido utilizar librerías o frameworks de JavaScript. En cambio, sí está permitido utilizar utilidades de CSS externas.
Además, se debe proporcionar un archivo db.json para el backend con los datos de ejemplo para la corrección de la práctica.

1. Listado de anuncios.
- Cada anuncio debe mostrar su imagen (si tiene), nombre, descripción, precio y si es
compra o venta. Los anuncios publicados deben obtenerse a través de un endpoint,
mencionado más adelante.
- La pantalla de listado de los anuncios deberá gestionar todos los estados de
interfaz correctamente: vacío (no hay anuncios), error (cuando se produce un error al cargar
los anuncios), carga (mientras se cargan los anuncios desde el backend) y éxito
(cuando se han recuperado los anuncios y están listos para ser mostrados).
- Al pulsar sobre un anuncio, iremos a la pantalla de detalle de anuncio.
- Si el usuario ha hecho login, hay que mostrar al usuario un botón que le permita
acceder a la pantalla de creación de un anuncio.

2. Detalle de anuncio.
- La página de detalle de anuncio deberá mostrar foto (si tiene), nombre, descripción,
precio y si es compra o venta.
- En este detalle de anuncio se deberá gestionar todos los estados de interfaz
correctamente: vacío (no existe el anuncio), error (cuando se produce un error al
cargar la información del anuncio), carga (mientras se cargan la información del
anuncio desde el backend) y éxito (cuando se ha recuperado la información del
anuncio y está listo para ser mostrado).
- Si el usuario está autenticado y el anuncio le pertenece, deberá además mostrar un
botón que permita eliminar el anuncio (aunque antes de eliminarlo, deberá confirmar
con el usuario si realmente quiere eliminar o no el anuncio).

3. Creación de un anuncio.

- En la página para crear un anuncio se deberá mostrar al usuario un formulario con los siguientes campos:
    - Foto (opcional): permitirá subir una foto del producto.
    - Nombre (obligatorio): nombre del producto.
    - Descripción (obligatorio): descripción del producto.
    - Precio (obligatorio): precio del producto.
    - Compra/venta (obligatorio): indica si el anuncio se trata de una compra o una
    venta.
- Cuando el usuario envíe el formulario, deberá enviar al backend una petición para
guardar el anuncio.
- Se deberá gestionar todos los estados de interfaz correctamente: error (cuando se
produce un error al guardar la información del anuncio), carga (mientras se guarda la
información del anuncio en el backend) y éxito (cuando se han guardado
correctamente la información del anuncio).
- A esta pantalla sólo podremos acceder si estamos logados. En caso contrario,
habrá que redireccionar al usuario a la página de listado de anuncios, informándole
del motivo.

4. Login.

- La página de login deberá mostrar un formulario solicitando el nombre de usuario y
contraseña.
- Cuando el usuario envíe el formulario, deberá autenticar al usuario contra el
backend para obtener un token JWT que será utilizado en las siguientes
comunicaciones con el backend para autenticar al usuario.
- Se deberá gestionar todos los estados de interfaz correctamente: carga, error y
éxito.

5. Registro.

- Muy parecida a la de login. Deberá mostrar un formulario solicitando el nombre de
usuario y contraseña.
- Cuando el usuario envíe el formulario, deberá registrar al usuario en el backend.
- Se deberá gestionar todos los estados de interfaz correctamente: carga, error y
éxito.

### Opcional
- Gestionar la paginación de anuncios en el listado, ya que por defecto la API
sólo devuelve 10 elementos.
- Implementar un buscador de anuncios en el listado.
- Permitir editar un anuncio, sólo si el usuario autenticado es el propietario del
anuncio.
- Permitir el filtrado de anuncios usando tags. Por lo que en el formulario de anuncio
deberán poder incluirse tags de los mismos. Estos tags inicialmente pueden ser
estáticos (siempre los mismos).
- Unido al anterior, hacer que los tags sean dinámicos.


### API REST de apoyo para la práctica
Se utilizará sparrest.js como API REST de apoyo para la práctica (creado por el docente de KeepCoding Alberto Casero), este proyecto está basado en la utilidad json-server , el cual nos ofrece un completo API REST para simular un backend real y adaptarse a las necesidades de esta práctica.

## Tecnologías Utilizadas

- **HTML**: Para la estructuración del contenido y la creación de la estructura de la página web.
- **CSS**: Para el diseño y estilo visual de la página, asegurando una experiencia de usuario atractiva y coherente.

## Instrucciones de Instalación y Uso

### Requisitos de Software

- **Git** (Requerido)
- **SourceTree** (Opcional)
- **Visual Studio** (Ejecutado en la versión 1.99.0) (Requerido)

### Descripción de los Programas

- **Git**: Herramienta de control de versiones. Es imprescindible para clonar el repositorio.
- **SourceTree**: Una herramienta visual para gestionar repositorios Git. Permite interactuar con Git de forma sencilla sin necesidad de utilizar la línea de comandos.
- **Visual Studio**: Entorno de desarrollo integrado (IDE) necesario para ejecutar el proyecto. Asegúrate de utilizar la versión 1.99.0 para evitar problemas de compatibilidad.

### Pasos para utilizar este proyecto

1. Clona el repositorio de GitHub utilizando **SourceTree** o directamente con el siguiente comando mediante Git:

   ```bash
   git clone https://github.com/PabloSch26/keepcoding-frontend-javascript-submission-5.git

2. Una vez clonado el repositorio:

2.1 Abre el proyecto en Visual Studio agregando el directorio del proyecto a tu espacio de trabajo.

2.2 -

### Notas

- Asegúrate de tener correctamente instalados todos los programas necesarios antes de proceder con la ejecución del proyecto.
- Si no deseas usar SourceTree, puedes clonar el repositorio directamente usando la terminal con el comando git clone.

## Sin contribuciones ni licencias

Este proyecto no cuenta con contribuciones externas ni licencia en este momento.

## Vista previa del proyecto

-