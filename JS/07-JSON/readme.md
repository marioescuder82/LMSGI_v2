# Uso de JSON en JavaScript

## ¿Qué es JSON?

**JSON** (JavaScript Object Notation) es un formato ligero de intercambio de datos que es fácil de leer y escribir para los humanos, y fácil de analizar y generar para las máquinas. Se utiliza comúnmente para enviar datos entre un servidor y un cliente web.

### Estructura de JSON

- **Objetos**: Se representan con llaves `{}` y contienen pares clave-valor.
- **Arrays**: Se representan con corchetes `[]` y contienen una lista de valores.

**Ejemplo de JSON:**

```json
{
  "nombre": "Juan",
  "edad": 30,
  "hobbies": ["fútbol", "música"],
  "direccion": {
    "calle": "Calle Falsa",
    "numero": 123
  }
}
```

## Acceso a una API Pública

Las APIs (Interfaces de Programación de Aplicaciones) permiten acceder a datos de manera programática. Una de las APIs públicas más utilizadas es **JSONPlaceholder**, que proporciona datos de ejemplo.

### Ejemplo de Solicitud a una API

Vamos a realizar una solicitud a la API de JSONPlaceholder para obtener una lista de usuarios:

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json));
```

#### Desglose del Código

##### `fetch('https://jsonplaceholder.typicode.com/users')`:

- **fetch**: Esta es una función que permite hacer solicitudes HTTP (como GET, POST, etc.) a una URL. En este caso, se está haciendo una solicitud GET a la API pública de JSONPlaceholder, que proporciona datos de ejemplo.
- **URL**: `'https://jsonplaceholder.typicode.com/users'` es la dirección a la que se está enviando la solicitud. Esta URL devuelve una lista de usuarios en formato JSON.

##### `.then(response => response.json())`:

- **.then(...)**: `fetch` devuelve una promesa, y el método `.then()` se utiliza para manejar el resultado de esa promesa una vez que se resuelve.
- **response**: Este es el objeto de respuesta que se recibe de la solicitud. Contiene información sobre la respuesta HTTP, como el estado, los encabezados y el cuerpo.
- **response.json()**: Este método se llama en el objeto de respuesta para leer el cuerpo de la respuesta y convertirlo de formato JSON a un objeto JavaScript. También devuelve una promesa que se resuelve con el objeto JavaScript resultante.

##### `.then(json => console.log(json))`:

- **json**: Este es el objeto JavaScript que se obtiene después de que `response.json()` se ha resuelto. Contiene los datos de los usuarios que se han obtenido de la API.
- **console.log(json)**: Aquí se imprime el objeto JavaScript en la consola del navegador. Esto permite ver los datos que se han recibido. Por ejemplo, podrías ver un array de objetos, donde cada objeto representa un usuario con propiedades como `id`, `name`, `email`, etc.

## Convertir una cadena en formato JSON a un objeto JavaScript

Si tienes una cadena JSON, puedes usar `JSON.parse()` para convertirla en un objeto JavaScript.

### Ejemplo:

```javascript
const jsonString = '{"nombre": "Juan", "edad": 30}';
const objeto = JSON.parse(jsonString);
console.log(objeto.nombre); // Muestra "Juan"
```

## Convertir un objeto JavaScript a una cadena en formato JSON

Para convertir un objeto JavaScript a una cadena JSON, utiliza JSON.stringify().

### Ejemplo:

```javascript
const objeto = {
    nombre: "Juan",
    edad: 30,
    hobbies: ["fútbol", "música"]
};

const jsonString = JSON.stringify(objeto);
console.log(jsonString); // Muestra '{"nombre":"Juan","edad":30,"hobbies":["fútbol","música"]}'
```