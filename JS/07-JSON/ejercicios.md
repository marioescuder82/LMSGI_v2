# Music DB

El propósito de este ejercicio es desarrollar un script en JavaScript que permita obtener y mostrar información sobre artistas musicales a través de la API de The Audio DB. Este ejercicio tiene como objetivo practicar el uso de la función `fetch` para realizar solicitudes a APIs, así como la manipulación del DOM para crear elementos dinámicos que mejoren la experiencia del usuario en una página web. Al finalizar, se espera que los estudiantes comprendan cómo interactuar con datos externos y cómo implementar interactividad básica en la interfaz de usuario.

## Enunciado para el Desarrollo de Código en JavaScript

Desarrollar un script en JavaScript que realice las siguientes tareas:

1. **Obtener Datos de Artistas**: Utilizar un bucle `for` para iterar sobre un rango de identificadores de artistas (del 112000 al 112052) y realizar una solicitud `fetch` a la API de The Audio DB (https://www.theaudiodb.com/free_music_api) para obtener información sobre cada artista.

2. **Crear Elementos Dinámicamente**: Para cada respuesta exitosa de la API, crear un elemento `div` que contenga una tarjeta (`card`) con la imagen del artista, su nombre y una breve biografía. Este `div` debe ser añadido a un contenedor existente en el documento HTML con el ID "lista".

3. **Interactividad**: Implementar eventos para que al pasar el mouse sobre la tarjeta, se cambie el color de fondo de la misma y al salir, se vuelva al color de fondo original.

4. **Responsive**: Las tarjetas se deben mostrar en 4 columnas en pantallas grandes, 2 columnas en pantallas medianas y 1 en pantallas pequeñas.
