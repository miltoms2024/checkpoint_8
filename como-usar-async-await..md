# Como usar async/await.

## ¿Qué hacen `async` y `await` por nosotros en JavaScript?

## **Introducción:**

<figure><img src="https://res.cloudinary.com/matiasfha/image/upload/e_auto_contrast,g_south_west,l_text:montserrat_30:@matiasfha,x_20,y_10/c_scale,w_1024/l_logo,y_10,x_15,g_north_east,w_60/f_auto,q_auto/5c3a4f158548e32701414d254f2e4a4287e8c034-1280x710.jpg" alt=""><figcaption></figcaption></figure>

Las palabras clave `async` y `await` fueron introducidas en ECMAScript 2017 (ES8) como una forma de escribir código asíncrono que se vea y se comporte de manera un poco más síncrona, facilitando su lectura y comprensión. Son una capa de azúcar sintáctico sobre las Promesas, lo que significa que no introducen una nueva forma de asincronismo, sino que proporcionan una sintaxis más elegante para trabajar con las Promesas.

#### **1. Definición y Cómo Funcionan:**

*   **`async`:** La palabra clave `async` se utiliza para declarar una función como asíncrona. Cuando se declara una función con `async`, esta función automáticamente envuelve su valor de retorno en una Promesa. Incluso si la función devuelve un valor síncrono, JavaScript lo convertirá implícitamente en una Promesa resuelta con ese valor. Además, dentro de una función `async`, se puede usar la palabra clave `await`.

    ```javascript
    async function miFuncionAsincrona() {
      return "¡Hola desde async!"; // Esto se convertirá en Promise.resolve("¡Hola desde async!");
    }

    miFuncionAsincrona().then(resultado => console.log(resultado)); // Salida: ¡Hola desde async!
    ```
*   **`await`:** La palabra clave `await` solo se puede utilizar dentro de una función declarada como `async`. Cuando se precede una expresión con `await`, la ejecución de la función `async` se pausará hasta que la Promesa que sigue a `await` se resuelva (se cumpla o se rechace).

    * Si la Promesa se resuelve, la expresión `await` devuelve el valor de resolución de la Promesa.
    * Si la Promesa se rechaza, la expresión `await` lanzará una excepción (un error), que puede ser capturada utilizando un bloque `try...catch` dentro de la función `async`.

    ```javascript
    function esperar(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function tareaAsincrona() {
      console.log("Inicio de la tarea...");
      await esperar(2000); // Pausa la función por 2 segundos
      console.log("Tarea completada después de 2 segundos.");
      return "Resultado de la tarea";
    }

    tareaAsincrona().then(resultado => console.log("Resultado final:", resultado));
    // Salida (aproximadamente):
    // Inicio de la tarea...
    // (pausa de 2 segundos)
    // Tarea completada después de 2 segundos.
    // Resultado final: Resultado de la tarea
    ```

#### _**2. Beneficios de****&#x20;****`async`****&#x20;****y****&#x20;****`await`****:**_

* **Código Asíncrono con Apariencia Síncrona:** El principal beneficio de `async/await` es que permite escribir código asíncrono que se ve y se comporta de manera similar al código síncrono. Esto puede hacer que el flujo de las operaciones asíncronas sea más fácil de seguir y comprender, especialmente para secuencias complejas de operaciones.
* **Mejor Legibilidad:** Al evitar la anidación excesiva de `.then()` y `.catch()`, el código con `async/await` tiende a ser más lineal y menos verboso, lo que mejora significativamente su legibilidad y mantenibilidad.
* **Manejo de Errores Más Sencillo:** Los errores en las Promesas que se esperan con `await` pueden ser capturados utilizando los bloques estándar `try...catch`. Esto proporciona un patrón de manejo de errores más familiar y consistente en comparación con tener que recordar encadenar `.catch()` en cada paso de una cadena de Promesas.
* **Depuración Más Fácil:** Debido a la apariencia síncrona del código, la depuración de funciones `async` puede ser más intuitiva. Los puntos de interrupción se comportan de manera más predecible en comparación con el seguimiento a través de múltiples callbacks en una cadena de Promesas.

#### _**3. Ejemplos Prácticos:**_

_**Ejemplo de Fetch con****&#x20;****`async/await`****&#x20;****y manejo de errores:**_

```javascript
async function obtenerUsuario(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const usuario = await response.json();
    return usuario;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    return null; // O lanzar el error nuevamente, dependiendo de la lógica
  }
}

obtenerUsuario(1).then(usuario => {
  if (usuario) {
    console.log("Usuario obtenido:", usuario);
  }
});
```

#### **Ejemplo de Secuencia de Operaciones Asíncronas:**

```javascript
async function procesarDatos() {
  try {
    console.log("Paso 1: Iniciando...");
    const resultadoPaso1 = await esperar(1000);
    console.log("Paso 1 completado.");

    console.log("Paso 2: Procesando...");
    const resultadoPaso2 = await obtenerDatos('https://jsonplaceholder.typicode.com/todos/1');
    console.log("Paso 2 completado:", resultadoPaso2);

    console.log("Paso 3: Finalizando...");
    await esperar(500);
    console.log("Proceso completado con éxito.");
    return "Proceso finalizado";

  } catch (error) {
    console.error("Error en el proceso:", error);
    return "Proceso fallido";
  }
}

procesarDatos().then(resultado => console.log("Resultado global:", resultado));
```

#### **4. Buenas Prácticas con `async` y `await`:**

* **Usar `try...catch` para el Manejo de Errores:** Siempre envuelve los bloques de código que utilizan `await` en un bloque `try...catch` para manejar las posibles excepciones que puedan ocurrir si una Promesa se rechaza.
* **`await` Solo Dentro de `async`:** Recuerda que la palabra clave `await` solo puede ser utilizada dentro del cuerpo de una función declarada con `async`. Intentar usar `await` fuera de una función `async` generará un error de sintaxis.
*   **Paralelización con `Promise.all()`:** Si tienes múltiples operaciones asíncronas que no dependen una de la otra, considera usar `Promise.all()` dentro de una función `async` para ejecutarlas en paralelo y esperar a que todas se completen, en lugar de usar `await` secuencialmente, lo que podría ser menos eficiente.

    ```javascript
    async function ejecutarParalelo() {
      const [resultado1, resultado2] = await Promise.all([esperar(1000), obtenerDatos('...')]);
      console.log("Ambas tareas completadas:", resultado1, resultado2);
    }
    ```
* **Ser Consciente del Bloqueo (Implícito):** Aunque `async/await` hace que el código parezca síncrono, sigue siendo asíncrono y no bloquea el hilo principal. Sin embargo, el uso excesivo de `await` secuencialmente puede hacer que las operaciones tarden más en completarse en general.

En resumen, `async` y `await` nos proporcionan una sintaxis más intuitiva y legible para trabajar con Promesas en JavaScript. Facilitan la escritura y el manejo del código asíncrono, haciéndolo más similar al código síncrono en su apariencia, a la vez que conservan la naturaleza no bloqueante de las Promesas.
