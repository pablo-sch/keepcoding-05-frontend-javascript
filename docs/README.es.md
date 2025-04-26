# Entrega Proyecto de Desarrollo Frontend con JavaScript

## Selecciona tu Lenguaje

- 🇺🇸 [Inglés](README.md)
- 🇩🇪 [Alemán](README.de.md)

## Conocimientos Trabajados

- Funcionamiento básico de un Navegador.
- Browser Object Model (BOM).
  - Navigation.
  - Location.
  - Window.
- Document Object Model (DOM), sus nodos y elementos.
- Seleccionar nodos.
- Crear y eliminar elementos del nodo.
- Manipulanr atributos del nodo más sus estilos y clases CSS.
- Manejar eventos del DOM.
- Comportamiento por defecto en los componentes del HTML.
- Event Bubbling & Capturing.
- Promesas y sus estados: pending, fulfilled y rejected.
- Peticiones HTTP con fetch.
- LocalStorage & sessionStorage.
- Almacenamiento local de datos de HTML5: cookies, storage y indexed DB.

## Descripción del Proyecto

Con el fin de ejercitar y demostrar los conocimientos adquiridos en clases virtuales este proyecto consiste en desarrollar una aplicación web similar a Wallapop. No se tiene permitido utilizar librerías o frameworks de JavaScript. En cambio, sí está permitido utilizar utilidades de CSS externas.  
Además, se debe proporcionar un archivo db.json para el backend con los datos de ejemplo para la corrección de la práctica.

1. Listado de anuncios.
   - Cada anuncio debe mostrar su imagen (si tiene), nombre, descripción, precio y si es compra o venta. Los anuncios publicados deben obtenerse a través de un endpoint, mencionado más adelante.
   - La pantalla de listado de los anuncios deberá gestionar todos los estados de interfaz correctamente:
     - **Vacío** (no hay anuncios).
     - **Error** (cuando se produce un error al cargar los anuncios).
     - **Carga** (mientras se cargan los anuncios desde el backend).
     - **Éxito** (cuando se han recuperado los anuncios y están listos para ser mostrados).
   - Al pulsar sobre un anuncio, iremos a la pantalla de detalle de anuncio.
   - Si el usuario ha hecho login, hay que mostrar al usuario un botón que le permita acceder a la pantalla de creación de un anuncio.

2. Detalle de anuncio.
   - La página de detalle de anuncio deberá mostrar foto (si tiene), nombre, descripción, precio y si es compra o venta.
   - En este detalle de anuncio se deberá gestionar todos los estados de interfaz correctamente:
     - **Vacío** (no existe el anuncio).
     - **Error** (cuando se produce un error al cargar la información del anuncio).
     - **Carga** (mientras se cargan la información del anuncio desde el backend).
     - **Éxito** (cuando se ha recuperado la información del anuncio y está listo para ser mostrado).
   - Si el usuario está autenticado y el anuncio le pertenece, deberá además mostrar un botón que permita eliminar el anuncio (aunque antes de eliminarlo, deberá confirmar con el usuario si realmente quiere eliminar o no el anuncio).

3. Creación de un anuncio.

    - En la página para crear un anuncio se deberá mostrar al usuario un formulario con los siguientes campos:
        - **Foto** (opcional): permitirá subir una foto del producto.
        - **Nombre** (obligatorio): nombre del producto.
        - **Descripción** (obligatorio): descripción del producto.
        - **Precio** (obligatorio): precio del producto.
        - **Compra/venta** (obligatorio): indica si el anuncio se trata de una compra o una venta.
    - Cuando el usuario envíe el formulario, deberá enviar al backend una petición para guardar el anuncio.
    - Se deberá gestionar todos los estados de interfaz correctamente:
        - **Error** (cuando se produce un error al guardar la información del anuncio).
        - **Carga** (mientras se guarda la información del anuncio en el backend).
        - **Éxito** (cuando se han guardado correctamente la información del anuncio).
    - A esta pantalla sólo podremos acceder si estamos logados. En caso contrario, habrá que redireccionar al usuario a la página de listado de anuncios, informándole del motivo.

4. Login.

    - La página de login deberá mostrar un formulario solicitando el nombre de usuario y contraseña.
    - Cuando el usuario envíe el formulario, deberá autenticar al usuario contra el backend para obtener un token JWT que será utilizado en las siguientes comunicaciones con el backend para autenticar al usuario.
    - Se deberá gestionar todos los estados de interfaz correctamente: carga, error y éxito.

5. Registro.

    - Muy parecida a la de login. Deberá mostrar un formulario solicitando el nombre de usuario y contraseña.
    - Cuando el usuario envíe el formulario, deberá registrar al usuario en el backend.
    - Se deberá gestionar todos los estados de interfaz correctamente: carga, error y éxito.

### Opcional

- Gestionar la paginación de anuncios en el listado, ya que por defecto la API sólo devuelve 10 elementos.
- Implementar un buscador de anuncios en el listado.
- Permitir editar un anuncio, sólo si el usuario autenticado es el propietario del anuncio.
- Permitir el filtrado de anuncios usando tags. Por lo que en el formulario de anuncio deberán poder incluirse tags de los mismos. Estos tags inicialmente pueden ser estáticos (siempre los mismos).
- Unido al anterior, hacer que los tags sean dinámicos.

### API REST de Apoyo Para la Práctica y como utilizarla

Para emular una base de datos en esta práctica, utilizaremos **sparrest.js** como API REST de apoyo (creado por el docente de KeepCoding, Alberto Casero). Sparrest está basado en **json-server** y proporciona una API REST completa para simular un backend real y se adapta perfectamente a las necesidades de esta práctica.

Enlace al API REST

```bash
git clone https://github.com/kasappeal/sparrest.js.git
```

Una vez descargado el proyecto, deberás actualizar las dependencias. Después, reemplaza el archivo db.json generado con el archivo correspondiente del mismo nombre del proyecto, lo que permitirá cargar la base de datos. Para iniciar la base de datos, simplemente ejecuta el comando:

```bash
npm start
```

Esto levantará el servidor y pondrá en funcionamiento el API REST para que puedas interactuar con la base de datos simulada.

## Tecnologías Utilizadas

- **HTML**: Para la estructuración del contenido y la creación de la estructura de la página web.
- **CSS**: Para el diseño y estilo visual de la página, asegurando una experiencia de usuario atractiva y coherente.

## Instrucciones de Instalación y Uso

### Requisitos de Software

- **Visual Studio** (Testeado en la versión 1.99.0)
- **Live Server** (Addon de Visual Studio, Opcional)

### Descripción de los Programas

- **Visual Studio**: Entorno de desarrollo integrado (IDE) necesario para ejecutar el proyecto. Asegúrate de utilizar la versión 1.99.0 para evitar problemas de compatibilidad.
- **Live Server**: Extensión de Visual Studio que permite visualizar los archivos HTML de manera local en un navegador, mostrando los cambios en tiempo real.

### Pasos Para Utilizar Este Proyecto

1. Descargue el comprimido del proyecto desde GitHub a su ordenador.

2. Una vez descarcargado el comprimido, abra el proyecto en Visual Studio agregando el directorio del proyecto a su espacio de trabajo.

### Notas

- Asegúrate de tener correctamente instalados todos los programas necesarios antes de proceder con la ejecución del proyecto.

## Sin Contribuciones ni Licencias

Este proyecto no cuenta con contribuciones externas ni licencia en este momento.

## Vista Previa del Proyecto
