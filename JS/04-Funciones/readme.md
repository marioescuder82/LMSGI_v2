# **Capítulo 4: Funciones**

## **Objetivo:**
Entender la utilidad de las funciones en JavaScript, aprender a definirlas y llamarlas, y explorar los conceptos de parámetros, valores de retorno, y el alcance de las variables.

---

## **4.1 ¿Qué son las funciones?**
- Una función es un bloque de código reutilizable que realiza una tarea específica.
- Las funciones ayudan a estructurar el código y a evitar duplicaciones.
- **Ventajas:**
  - Reutilización.
  - Modularidad.
  - Mejor mantenimiento del código.

---

## **4.2 Declaración y llamada de funciones**

### **Declaración de una función**
- **Sintaxis básica:**
  ```javascript
  function nombreFuncion() {
    // Código a ejecutar
  }
  ```
- **Ejemplo:**
  ```javascript
  function saludar() {
    console.log("¡Hola, mundo!");
  }
  
  // Llamada a la función
  saludar(); // Salida: ¡Hola, mundo!
  ```

---

## **4.3 Parámetros y argumentos**

### **Definición de parámetros**
- Las funciones pueden aceptar datos externos (parámetros) al ser llamadas.
- **Sintaxis básica:**
  ```javascript
  function nombreFuncion(parametro1, parametro2) {
    // Uso de los parámetros
  }
  ```
- **Ejemplo:**
  ```javascript
  function sumar(a, b) {
    console.log(a + b);
  }

  sumar(3, 5); // Salida: 8
  ```

### **Uso de valores predeterminados**
- Los parámetros pueden tener valores por defecto.
- **Ejemplo:**
  ```javascript
  function saludar(nombre = "invitado") {
    console.log(`Hola, ${nombre}`);
  }

  saludar(); // Salida: Hola, invitado
  saludar("Ana"); // Salida: Hola, Ana
  ```

---

## **4.4 Valores de retorno**

### **Retornar valores desde una función**
- Una función puede devolver un valor usando la palabra clave `return`.
- **Ejemplo:**
  ```javascript
  function multiplicar(a, b) {
    return a * b;
  }

  let resultado = multiplicar(4, 5);
  console.log(resultado); // Salida: 20
  ```

### **Uso de funciones dentro de expresiones**
- Las funciones que devuelven valores pueden usarse en operaciones.
- **Ejemplo:**
  ```javascript
  function cuadrado(x) {
    return x * x;
  }

  console.log(cuadrado(3) + cuadrado(4)); // Salida: 25
  ```

---

## **4.5 Ámbito de las variables**

### **Variables locales y globales**
- **Globales:** Declaradas fuera de cualquier función; son accesibles desde cualquier parte del programa.
- **Locales:** Declaradas dentro de una función; solo existen dentro de esa función.
- **Ejemplo:**
  ```javascript
  let global = "Soy global";

  function mostrar() {
    let local = "Soy local";
    console.log(global); // Accede a la variable global
    console.log(local);  // Accede a la variable local
  }

  mostrar();
  console.log(local); // Error: local no está definida
  ```

---

