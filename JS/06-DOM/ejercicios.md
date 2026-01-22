# Ejercicio: Desarrollo de un juego de 3 en raya

## Objetivo
Desarrollar un juego de 3 en raya utilizando HTML, Bootstrap y JavaScript, poniendo especial énfasis en la manipulación del DOM.

## Requisitos

1. **Estructura HTML**:
   - Crear una cuadrícula de 3x3 utilizando las clases `row` y `col` de Bootstrap.
   - Cada celda debe ser un elemento interactivo que permita al jugador hacer clic para colocar su marca (una imagen para cada jugador).

2. **Estilo con Bootstrap**:
   - Utilizar las clases de Bootstrap para dar formato a las celdas.
   - Asegurarse de que las imágenes se ajusten adecuadamente dentro de las celdas.
   - Usar alertas de Bootstrap para mostrar mensajes de victoria o empate.

3. **Lógica del juego en JavaScript**:
   - Implementar la lógica para alternar entre los jugadores (cada uno con su imagen).
   - Detectar si hay un ganador o si el juego termina en empate.
   - Mostrar un mensaje al final del juego indicando quién ha ganado o si ha habido un empate.
   - Permitir reiniciar el juego sin recargar la página.
   - Al pasar el mouse sobre una celda vacía, mostrar la imagen correspondiente al jugador actual.

## Pasos a seguir

1. **Crear la estructura básica**:
   - Define el HTML básico con filas (`row`) y columnas (`col`) utilizando clases de Bootstrap.
   - Asegúrate de incluir un área para mostrar mensajes utilizando alertas de Bootstrap.

2. **Implementar imágenes**:
   - Utiliza imágenes para representar las marcas de los jugadores (por ejemplo, una imagen de una ficha para el jugador 1 y otra para el jugador 2).
   - Asegúrate de que las imágenes se carguen correctamente y se ajusten al tamaño de las celdas.

3. **Implementar la lógica**:
   - Escribe funciones en JavaScript para:
     - Manejar los clics en las celdas.
     - Alternar entre los jugadores.
     - Comprobar las condiciones de victoria.
     - Reiniciar el juego.
     - Mostrar la imagen del jugador actual al pasar el mouse sobre una celda vacía.

## Evaluación
Se evaluará la claridad del código, la funcionalidad del juego y la estética visual utilizando Bootstrap.

# Ejercicio OPCIONAL: Desarrollo del juego de las parejas

## Objetivo
Desarrollar el juego de las parejas. En este juego, si el usuario destapa 2 fichas iguales, estan permanecen destapadas. En caso contrario, se les vuelve a dar la vuelta a las fichas permaneciendo ocultas.
