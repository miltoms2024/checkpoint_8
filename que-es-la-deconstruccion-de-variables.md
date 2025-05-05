# ¿Qué es la deconstrucción de variables?&#x20;

## ¿Qué es la Deconstrucción de Variables (_Destructuring_) en JavaScript?

## _**Introducción:**_

En JavaScript moderno, trabajar con arrays y objetos es muy común. A menudo, necesitamos acceder a valores específicos dentro de estas estructuras y asignarlos a variables para poder utilizarlos más fácilmente en nuestro código. La **deconstrucción de variables** (o _destructuring_) es una sintaxis que simplifica este proceso, permitiéndonos extraer múltiples valores a la vez de una manera clara y concisa. Esta característica, introducida en ES6, hace que nuestro código sea más legible y eficiente.

**1. Definición y Conceptos Clave:**

* **Deconstrucción (Destructuring):** Es una expresión que permite desempaquetar valores de arrays o propiedades de objetos en distintas variables.
* **Sintaxis para Arrays:** Se utiliza una sintaxis similar a la de la declaración de arrays, con corchetes `[]` en el lado izquierdo de la asignación para especificar qué elementos del array se van a extraer a qué variables. El orden de las variables corresponde al orden de los elementos en el array.
* **Sintaxis para Objetos:** Se utiliza una sintaxis similar a la de la declaración de objetos, con llaves `{}` en el lado izquierdo de la asignación para especificar qué propiedades del objeto se van a extraer a variables. El nombre de la variable debe coincidir (o ser un alias de) el nombre de la propiedad del objeto.

**2. Deconstrucción de Arrays:**

*   **Sintaxis Básica:**

    ```javascript
    const miArray = [ 'valor1', 'valor2', 'valor3' ];
    const [ primera, segunda, tercera ] = miArray;

    console.log(primera);  // Salida: valor1
    console.log(segunda); // Salida: valor2
    console.log(tercera); // Salida: valor3
    ```

    **Explicación Paso a Paso:**

    1. `const miArray = [ 'valor1', 'valor2', 'valor3' ];` : Declaramos un array llamado `miArray` con tres elementos.
    2. `const [ primera, segunda, tercera ] = miArray;` : Esta es la parte de la deconstrucción.
       * `const [ ... ]` : Declaramos tres nuevas variables (`primera`, `segunda`, `tercera`) dentro de corchetes. Esto indica que vamos a deconstruir un array.
       * `= miArray` : Asignamos los valores del array `miArray` a estas nuevas variables **según su posición**.
       * `primera` toma el valor del primer elemento de `miArray` ('valor1').
       * `segunda` toma el valor del segundo elemento de `miArray` ('valor2').
       * `tercera` toma el valor del tercer elemento de `miArray` ('valor3').
*   **Omitir Elementos:** Podemos omitir elementos que no nos interesan utilizando comas:

    ```javascript
    const colores = [ 'rojo', 'verde', 'azul', 'amarillo' ];
    const [ primerColor, , tercerColor ] = colores;

    console.log(primerColor); // Salida: rojo
    console.log(tercerColor); // Salida: azul
    ```

    **Explicación:** Dejamos una coma en el lugar del segundo elemento ('verde'), por lo que no se asigna a ninguna variable.
*   **Parámetro Rest (`...`):** Podemos usar el parámetro rest para capturar el resto de los elementos de un array en una nueva variable:

    ```javascript
    const numeros = [ 10, 20, 30, 40, 50 ];
    const [ primero, segundo, ...restoNumeros ] = numeros;

    console.log(primero);      // Salida: 10
    console.log(segundo);     // Salida: 20
    console.log(restoNumeros); // Salida: [ 30, 40, 50 ]
    ```

    **Explicación:** `...restoNumeros` captura todos los elementos que quedan después de los dos primeros y los guarda en un nuevo array llamado `restoNumeros`.
*   **Valores por Defecto:** Podemos asignar valores por defecto a las variables en caso de que el array no tenga suficientes elementos:

    ```javascript
    const frutas = [ 'manzana', 'banana' ];
    const [ primeraFruta, segundaFruta, terceraFruta = 'naranja' ] = frutas;

    console.log(primeraFruta);  // Salida: manzana
    console.log(segundaFruta); // Salida: banana
    console.log(terceraFruta); // Salida: naranja (valor por defecto)
    ```

    **Explicación:** Como `frutas` solo tiene dos elementos, `terceraFruta` toma el valor por defecto 'naranja'.

**3. Deconstrucción de Objetos:**

*   **Sintaxis Básica:**

    ```javascript
    const miObjeto = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
    const { nombre, edad, ciudad } = miObjeto;

    console.log(nombre); // Salida: Juan
    console.log(edad);   // Salida: 30
    console.log(ciudad); // Salida: Madrid
    ```

    **Explicación Paso a Paso:**

    1. `const miObjeto = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };` : Declaramos un objeto llamado `miObjeto` con tres propiedades.
    2. `const { nombre, edad, ciudad } = miObjeto;` : Esta es la deconstrucción de objetos.
       * `const { ... }` : Declaramos tres nuevas variables (`nombre`, `edad`, `ciudad`) dentro de llaves. Esto indica que vamos a deconstruir un objeto.
       * `= miObjeto` : Asignamos los valores del objeto `miObjeto` a estas nuevas variables **basándonos en el nombre de la propiedad**.
       * La variable `nombre` toma el valor de la propiedad `nombre` del objeto ('Juan').
       * La variable `edad` toma el valor de la propiedad `edad` del objeto (30).
       * La variable `ciudad` toma el valor de la propiedad `ciudad` del objeto ('Madrid'). **¡El orden de las variables dentro de las llaves no importa, solo el nombre!**
*   **Asignar a Nuevos Nombres de Variable (Aliasing):** Podemos asignar el valor de una propiedad a una variable con un nombre diferente utilizando dos puntos `:`:

    ```javascript
    const usuario = { nombre: 'Ana', años: 25 };
    const { nombre: nombreUsuario, años: edadUsuario } = usuario;

    console.log(nombreUsuario); // Salida: Ana
    console.log(edadUsuario);   // Salida: 25
    ```

    **Explicación:** El valor de la propiedad `nombre` se asigna a la variable `nombreUsuario`, y el valor de la propiedad `años` se asigna a la variable `edadUsuario`.
*   **Valores por Defecto:** Al igual que con los arrays, podemos definir valores por defecto para las propiedades en caso de que no existan en el objeto:

    ```javascript
    const producto = { nombre: 'Laptop' };
    const { nombre, precio = 500 } = producto;

    console.log(nombre);  // Salida: Laptop
    console.log(precio);  // Salida: 500 (valor por defecto)
    ```

    **Explicación:** La propiedad `precio` no existe en `producto`, por lo que la variable `precio` toma el valor por defecto 500.
*   **Deconstrucción Anidada:** Podemos deconstruir objetos que contienen otros objetos o arrays:

    ```javascript
    const persona = {
      nombre: 'Carlos',
      direccion: {
        calle: 'Gran Vía, 1',
        ciudad: 'Bilbao'
      },
      hobbies: ['leer', 'correr']
    };

    const { nombre, direccion: { ciudad }, hobbies: [primerHobby] } = persona;

    console.log(nombre);      // Salida: Carlos
    console.log(ciudad);      // Salida: Bilbao
    console.log(primerHobby); // Salida: leer
    ```

    **Explicación:** Aquí deconstruimos la propiedad `direccion` para obtener la `ciudad` directamente, y deconstruimos el array `hobbies` para obtener el `primerHobby`.

#### **4.&#x20;**_**Ejercicio Práctico:**_

1.  **Dado el siguiente objeto, utiliza la deconstrucción para asignar las propiedades `marca` y `modelo` a variables con los mismos nombres.**

    ```js
      const coche = { marca: 'Toyota', modelo: 'Corolla', año: 2020 };

       // Utiliza la deconstrucción para asignar las propiedades marca y modelo a variables  
      const { marca, modelo } = coche;

      console.log(marca);   // Debería ser Toyota
      console.log(modelo);  // Debería ser Corolla
    ```

    **Explicación:**

    Utilizamos la sintaxis de deconstrucción de objetos: { propiedad1, propiedad2, ... } = objeto.    \
    Dentro de las llaves {} especificamos los nombres de las propiedades del objeto coche que queremos extraer y asignar a variables.    \
    JavaScript automáticamente crea variables con los mismos nombres (marca y modelo) y les asigna los valores correspondientes del objeto coche.

#### _**5. Conclusiones y Cuándo Usar la Deconstrucción:**_

* La deconstrucción de variables en JavaScript proporciona una forma más concisa y legible de extraer valores de arrays y propiedades de objetos.
* Mejora la claridad del código al asignar directamente los valores a variables con nombres significativos.
* Es especialmente útil cuando se trabaja con funciones que devuelven arrays u objetos como resultado.
* Facilita la manipulación de datos y la asignación de valores por defecto.
* La deconstrucción anidada permite acceder fácilmente a propiedades dentro de estructuras de datos más complejas.

#### _**6. Buenas Prácticas:**_

* Utiliza la deconstrucción siempre que necesites extraer múltiples valores de un array u objeto.
* Elige nombres de variables descriptivos que reflejen el valor que están almacenando.
* Utiliza valores por defecto para evitar errores cuando los arrays u objetos no tienen todos los elementos o propiedades esperados.
* Sé consciente de la diferencia entre la deconstrucción de arrays (basada en la posición) y la deconstrucción de objetos (basada en el nombre de la propiedad).
* En funciones, la deconstrucción en los parámetros puede hacer que la firma de la función sea más clara y facilitar el acceso a las propiedades de los objetos o elementos de los arrays que se pasan como argumentos.

Escribe una función llamada `mostrarNombre` que reciba un objeto `usuario` como argumento y utilice la deconstrucción en los parámetros para extraer la propiedad `nombre` del objeto y mostrarla en la consola."

**Explicación del código:**

```javascript
function mostrarNombre({ nombre }) {
  console.log(nombre);
}

const usuarioEjemplo = { nombre: 'Pedro', apellido: 'Gómez' };
mostrarNombre(usuarioEjemplo); // Salida: Pedro
```

1. **`function mostrarNombre({ nombre }) { ... }`**:
   * Definimos una función llamada `mostrarNombre`.
   * En lugar de recibir un objeto `usuario completo`o como parámetro, utilizamos la sintaxis de deconstrucción `{ nombre }` directamente en la definición del parámetro. Esto le dice a JavaScript que espere un objeto y que extraiga automáticamente la propiedad llamada `nombre` de ese objeto, asignando su valor a una variable local también llamada `nombre` dentro del cuerpo de la función.
2. **`console.log(nombre);`**:
   * Dentro de la función, simplemente accedemos a la variable `nombre` (que ahora contiene el valor de la propiedad `nombre` del objeto pasado como argumento) y la mostramos en la consola.
3. **`const usuarioEjemplo = { nombre: 'Pedro', apellido: 'Gómez' };`**:
   * Creamos un objeto llamado `usuarioEjemplo` con las propiedades `nombre` y `apellido`.
4. **`mostrarNombre(usuarioEjemplo);`**:
   * Llamamos a la función `mostrarNombre` y le pasamos el objeto `usuarioEjemplo`. JavaScript automáticamente deconstruye este objeto dentro de la definición de la función y extrae el valor de la propiedad `nombre` ('Pedro').

**En resumen, este ejemplo muestra una forma concisa de acceder a propiedades específicas de un objeto directamente en la definición de los parámetros de una función utilizando la deconstrucción.**
