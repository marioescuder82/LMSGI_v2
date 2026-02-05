# Práctica: Desarrollo de un juego de 3 en raya (CSS Nativo)

## Objetivo
Desarrollar un juego de "3 en raya" utilizando HTML, JavaScript y **CSS Nativo**. El enfoque principal será la manipulación del DOM y el diseño de layouts modernos sin depender de frameworks externos como Bootstrap.

## Requisitos

1. **Estructura HTML**:
   - Definir un contenedor principal para el juego.
   - Crear una cuadrícula de 3x3 utilizando un contenedor de tablero (`#tablero`) y 9 elementos hijos para las celdas.
   - No se permite el uso de clases de Bootstrap (`row`, `col`, `container`).

2. **Estilo con CSS Nativo (Sin Frameworks)**:
   - **Diseño de Cuadrícula**: Utilizar **CSS Grid** para definir la estructura de 3x3.
     > Ejemplo sugerido: `display: grid; grid-template-columns: repeat(3, 1fr);`
   - **Responsividad**: El tablero debe ser centrado y adaptable a pantallas móviles mediante el uso de unidades relativas (`em`, `vh`, `%`) o Media Queries.
   - **Estética de las Celdas**: Definir bordes, tamaños fijos y alineación centrada del contenido mediante CSS.
   - **Fichas (Imágenes)**: Las imágenes deben ajustarse al tamaño de la celda sin desbordarla (`max-width: 100%`).
   - **Interfaz de Mensajes**: Crear un área de notificaciones personalizada (en lugar de las alertas de Bootstrap) para anunciar el ganador o el turno actual.

3. **Lógica del juego en JavaScript**:
   - Implementar la lógica para alternar entre jugadores.
   - Detectar condiciones de victoria (3 en línea horizontal, vertical o diagonal) o empate.
   - **Efectos de Hover**: Al pasar el ratón sobre una celda vacía, mostrar de forma sutil (usando `opacity`) la imagen del jugador que tiene el turno.
   - **Reinicio**: Implementar un botón que resetee el tablero y las variables de control sin necesidad de recargar la página.

## Pasos sugeridos

1. **Maquetación**:
   - Crea el archivo `index.html` con la estructura mínima.
   - En tu archivo `style.css`, utiliza `display: grid` para que el contenedor se comporte como un tablero real.
   


2. **Interactividad con JS**:
   - Selecciona las celdas del DOM.
   - Añade un *EventListener* de clic a cada una para colocar la imagen correspondiente.
   - Crea un array o matriz lógica para comprobar los resultados tras cada movimiento.

3. **Feedback visual**:
   - Usa transiciones CSS (`transition`) para que la aparición de las fichas o de los mensajes de victoria sea fluida.

## Evaluación
Se valorará:
* **Dominio de CSS**: Uso correcto de Grid o Flexbox y selectores.
* **Calidad del Código**: Código JavaScript limpio, modular y bien comentado.
* **Experiencia de Usuario (UX)**: Que el juego sea intuitivo y visualmente agradable sin ayuda de librerías externas.

---

# Ejercicio OPCIONAL: Juego de las Parejas (Memory Game)

## Objetivo
Desarrollar un juego de memoria donde el usuario deba encontrar parejas de imágenes iguales.

## Requisitos Técnicos
* **Mecánica**: Al hacer clic en dos fichas, si no coinciden, deben volver a ocultarse tras un segundo.
* **Animaciones CSS**: Es obligatorio implementar una animación de rotación cuando se haga clic en una carta.
    > Tip: Investiga las propiedades `transform: rotateY(180deg)` y `backface-visibility: hidden`.