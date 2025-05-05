# Promesa en JS.

## ¿Qué es una Promesa en JavaScript?

## **Introducción:**

JavaScript, a pesar de ser un lenguaje de un solo hilo, es ampliamente utilizado para realizar operaciones que pueden llevar tiempo, como la comunicación con servidores web, la manipulación de archivos o la gestión de temporizadores. Estas operaciones, conocidas como asíncronas, tienen el potencial de bloquear la ejecución del hilo principal, lo que podría resultar en una experiencia de usuario deficiente (por ejemplo, una interfaz que deja de responder).

<figure><img src="https://media.licdn.com/dms/image/v2/D4D22AQEnkqe2PCyWAA/feedshare-shrink_800/feedshare-shrink_800/0/1709841485322?e=2147483647&#x26;v=beta&#x26;t=MwWpM-x9o1uX88OOWaY6q0r5-ZJU-7oGDDGWd5GEitM" alt="" width="563"><figcaption></figcaption></figure>

Para evitar este bloqueo y manejar los resultados de estas operaciones de manera eficiente, JavaScript introdujo las Promesas. Las Promesas ofrecen una alternativa más elegante y legible a los callbacks anidados, que a menudo conducen a un código complejo y difícil de mantener (el temido "callback hell"). Al proporcionar una estructura clara para manejar el éxito o el fracaso de una operación asíncrona, las Promesas simplifican el desarrollo de código asíncrono y mejoran su mantenibilidad.

#### **Definición**

En JavaScript, una **Promesa** es un objeto que representa el resultado eventual (éxito o fracaso) de una operación asíncrona. Las operaciones asíncronas son aquellas que no bloquean la ejecución del hilo principal del programa, permitiendo que otras tareas se realicen mientras la operación asíncrona está en curso. Las Promesas son una forma elegante y estructurada de manejar el resultado de estas operaciones, evitando los problemas asociados con los callbacks anidados (conocidos como "callback hell").

**1.Conceptos Clave:**

* **Operación Asíncrona:** Una tarea que se ejecuta en segundo plano sin bloquear el hilo principal de JavaScript. Ejemplos comunes incluyen peticiones a servidores web (`fetch`), operaciones de lectura de archivos, `setTimeout`, `setInterval`, etc.
* **Estado de una Promesa:** Una Promesa puede estar en uno de tres estados:
  * **Pendiente (Pending):** El estado inicial; la operación asíncrona aún no se ha completado y la Promesa aún no tiene un resultado.
  * **Cumplida (Fulfilled o Resolved):** La operación asíncrona se completó con éxito, y la Promesa tiene un valor resultante.
  * **Rechazada (Rejected):** La operación asíncrona falló, y la Promesa tiene una razón (generalmente un error) que indica el fallo.
* **Resultado de una Promesa:**
  * Cuando una Promesa se cumple, tiene un **valor**.
  * Cuando una Promesa se rechaza, tiene una **razón** (generalmente un objeto `Error`).
* **`then()`:** Un método que se utiliza para encadenar una función de devolución de llamada (callback) que se ejecutará cuando la Promesa se cumpla. Puede recibir el valor de la Promesa cumplida como argumento. También puede encadenar otra Promesa, permitiendo una secuencia de operaciones asíncronas.
* **`catch()`:** Un método que se utiliza para encadenar una función de devolución de llamada que se ejecutará cuando la Promesa se rechace. Puede recibir la razón del rechazo como argumento.
* **`finally()`:** Un método que se utiliza para encadenar una función de devolución de llamada que se ejecutará siempre, independientemente de si la Promesa se cumplió o se rechazó. No recibe ningún argumento sobre el resultado de la Promesa y no puede modificar el valor o la razón final de la Promesa.

**2. Creación de una Promesa:**

Una Promesa se crea utilizando el constructor `new Promise()`, que toma una función como argumento. Esta función, conocida como la **función de resolución (resolver) y rechazo (reject)**, recibe dos argumentos:

* `resolve`: Una función que se llama para cumplir la Promesa con un valor.
* `reject`: Una función que se llama para rechazar la Promesa con una razón.

Aquí tienes un ejemplo básico de cómo crear una Promesa:

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Simulación de una operación asíncrona (por ejemplo, una petición con setTimeout)
  setTimeout(() => {
    const exito = true; // Simulamos éxito o fracaso

    if (exito) {
      resolve("¡La operación fue exitosa!"); // Cumplimos la Promesa con un valor
    } else {
      reject("¡La operación falló!");      // Rechazamos la Promesa con una razón
    }
  }, 2000); // Esperamos 2 segundos
});

console.log("Promesa creada...");

// Manejamos el resultado de la Promesa con .then() y .catch()
miPromesa
  .then((resultado) => {
    console.log("Éxito:", resultado); // Se ejecuta si la Promesa se cumple
  })
  .catch((error) => {
    console.error("Error:", error);   // Se ejecuta si la Promesa se rechaza
  })
  .finally(() => {
    console.log("La Promesa ha finalizado."); // Se ejecuta siempre
  });

console.log("Código después de la Promesa...");
```

#### **Explicación Paso a Paso:**

1. **`const miPromesa = new Promise((resolve, reject) => { ... });`**: Creamos una nueva Promesa. La función que pasamos al constructor recibe las funciones `resolve` y `reject`.
2. **`setTimeout(...)`**: Simulamos una operación asíncrona que tardará 2 segundos en completarse.
3. **`const exito = true;`**: Una variable para simular si la operación asíncrona tuvo éxito o no.
4. **`if (exito) { resolve("¡La operación fue exitosa!"); }`**: Si la operación simulada tiene éxito, llamamos a la función `resolve` con el valor que queremos pasar al `.then()`. Esto cambia el estado de la Promesa a "cumplida".
5. **`else { reject("¡La operación falló!"); }`**: Si la operación simulada falla, llamamos a la función `reject` con la razón del fallo que queremos pasar al `.catch()`. Esto cambia el estado de la Promesa a "rechazada".
6. **`console.log("Promesa creada...");` y `console.log("Código después de la Promesa...");`**: Estos logs demuestran que el código síncrono continúa ejecutándose mientras la operación asíncrona de la Promesa está en curso.
7. **`miPromesa.then((resultado) => { ... })`**: Encadenamos un manejador para el caso de éxito utilizando `.then()`. La función de callback recibe el valor con el que se resolvió la Promesa (`"¡La operación fue exitosa!"`).
8. **`.catch((error) => { ... })`**: Encadenamos un manejador para el caso de fallo utilizando `.catch()`. La función de callback recibe la razón por la que se rechazó la Promesa (`"¡La operación falló!"`).
9. **`.finally(() => { ... })`**: Encadenamos un manejador que se ejecuta siempre al final, independientemente del resultado de la Promesa.

**3. Encadenamiento de Promesas:**

Una de las características más poderosas de las Promesas es la capacidad de encadenarlas utilizando `.then()`. Si la función de callback dentro de un `.then()` devuelve un valor, ese valor se convierte en la resolución de la siguiente Promesa en la cadena. Si devuelve otra Promesa, la Promesa que se devuelve se "adopta" por la siguiente Promesa en la cadena, esperando su resolución o rechazo.

```javascript
function obtenerDatos(url) {
  return fetch(url) // fetch devuelve una Promesa
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // response.json() también devuelve una Promesa
    });
}

obtenerDatos('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => {
    console.log("Datos recibidos:", data);
    return data.userId; // Devolvemos un valor que se pasa al siguiente .then()
  })
  .then(userId => {
    console.log("ID de usuario:", userId);
    // Podemos iniciar otra operación asíncrona aquí y devolver su Promesa
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  })
  .then(response => response.json())
  .then(user => {
    console.log("Detalles del usuario:", user);
  })
  .catch(error => {
    console.error("Error en la cadena de Promesas:", error);
  });
```

En este ejemplo, `fetch` devuelve una Promesa. El primer `.then()` maneja la respuesta inicial y devuelve el resultado de `response.json()`, que también es una Promesa. El siguiente `.then()` recibe los datos JSON y devuelve un `userId`. El tercer `.then()` utiliza ese `userId` para hacer otra petición `fetch`, y así sucesivamente. El `.catch()` al final de la cadena captura cualquier error que ocurra en cualquiera de las Promesas anteriores.

**4. Manejo de Errores:**

Es crucial manejar los errores en las Promesas utilizando `.catch()`. Si una Promesa en la cadena se rechaza y no hay un `.catch()` para manejarlo, el error puede propagarse silenciosamente o causar un error no manejado en el entorno de ejecución.

**5. `Promise.all()` y `Promise.race()`:**

JavaScript proporciona métodos estáticos en el objeto `Promise` para manejar múltiples Promesas simultáneamente:

*   **`Promise.all(iterable)`:** Toma un iterable (como un array) de Promesas y devuelve una nueva Promesa que se cumple cuando **todas** las Promesas en el iterable se han cumplido. El valor de la Promesa cumplida es un array con los valores de cada Promesa en el mismo orden en que fueron pasadas. Si alguna de las Promesas en el iterable se rechaza, la Promesa devuelta por `Promise.all()` se rechaza inmediatamente con la razón de la primera Promesa que se rechazó.

    ```javascript
    const promesa1 = Promise.resolve(3);
    const promesa2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));
    const promesa3 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'bar'));

    Promise.all([promesa1, promesa2, promesa3])
      .then((values) => {
        console.log("Todas las Promesas se resolvieron:", values); // Salida: ["3", "foo", "bar"]
      })
      .catch((error) => {
        console.error("Alguna Promesa fue rechazada:", error);
      });
    ```
*   **`Promise.race(iterable)`:** Toma un iterable de Promesas y devuelve una nueva Promesa que se cumple o se rechaza tan pronto como **una** de las Promesas en el iterable se cumple o se rechaza, con el valor o la razón de esa primera Promesa.

    ```javascript
    const promesaA = new Promise((resolve, reject) => setTimeout(resolve, 500, 'ganador A'));
    const promesaB = new Promise((resolve, reject) => setTimeout(reject, 100, 'perdedor B'));

    Promise.race([promesaA, promesaB])
      .then((value) => {
        console.log("La primera Promesa en resolverse fue:", value); // Salida: "ganador A" (si A es más rápida)
      })
      .catch((reason) => {
        console.error("La primera Promesa en rechazarse fue:", reason); // Salida: "perdedor B" (si B es más rápida)
      });
    ```

#### **6. Conclusiones:**

Las Promesas en JavaScript son una herramienta fundamental para manejar operaciones asíncronas de manera más organizada y legible que los callbacks tradicionales. Permiten encadenar operaciones asíncronas, manejar errores de forma centralizada y coordinar la ejecución de múltiples Promesas simultáneamente. Su uso es esencial en el desarrollo web moderno, especialmente al trabajar con APIs y otras operaciones que no bloquean el hilo principal.

#### **7. Buenas Prácticas:**

* **Siempre manejar los rechazos:** Utiliza `.catch()` al final de las cadenas de Promesas para evitar errores no manejados.
* **Evitar el "callback hell":** Las Promesas ayudan a estructurar el código asíncrono de forma lineal y más fácil de seguir que los callbacks anidados.
* **Devolver Promesas desde `.then()`:** Si necesitas realizar una operación asíncrona dentro de un `.then()`, devuelve la Promesa resultante para encadenar correctamente las operaciones.
* **Utilizar `async/await` para una sintaxis más limpia:** La sintaxis `async/await` (construida sobre Promesas) puede hacer que el código asíncrono parezca y se comporte de manera más síncrona, mejorando la legibilidad.
* **Considerar `Promise.all()` para operaciones paralelas:** Cuando tengas múltiples operaciones asíncronas independientes que deban completarse, `Promise.all()` puede ser una forma eficiente de ejecutarlas en paralelo y esperar a que todas finalicen.
* **Ser consciente de los estados de las Promesas:** Entender los estados "pendiente", "cumplida" y "rechazada" es crucial para depurar y comprender el flujo de las operaciones asíncronas.

¡Excelente pregunta! Una vez que entendemos qué son las Promesas, es natural preguntarse sobre `async` y `await`, ya que son construcciones sintácticas que se basan en las Promesas y simplifican aún más el manejo del código asíncrono en JavaScript.

Vamos a desarrollar esta pregunta siguiendo nuestra estructura habitual: definición, cómo funcionan, ejemplos, beneficios y buenas prácticas.
