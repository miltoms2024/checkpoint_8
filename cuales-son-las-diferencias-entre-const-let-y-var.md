---
description: En esta pagina encontraras conceptos, definiciones, y tipos de variables en JS
---

# ¿Cuáles son las diferencias entre const, let y var?

## ¿Cuáles son las diferencias entre const, let y var?

## 2. Manejo de Variables en JavaScript

### 2.1. Introducción a las Variables en JavaScript

En programación, una **variable** es como una **etiqueta que le damos a una ubicación en la memoria del ordenador** donde podemos almacenar y recuperar información (datos). Imagina que tienes varias cajas y quieres guardar diferentes cosas en ellas. Para saber qué hay en cada caja, le pones una etiqueta con un nombre. En JavaScript, las variables son esas etiquetas.

<figure><img src="https://i.ytimg.com/vi/B35q2KC35FI/maxresdefault.jpg" alt="" width="375"><figcaption></figcaption></figure>

**¿Por qué son importantes las variables?**

Las variables son fundamentales porque nos permiten:

* **Almacenar datos:** Podemos guardar números, texto, booleanos (verdadero o falso), objetos, arrays y otros tipos de datos para utilizarlos más tarde en nuestro programa.
* **Reutilizar valores:** En lugar de escribir un valor directamente cada vez que lo necesitamos, podemos almacenarlo en una variable y referirnos a la variable por su nombre. Esto hace que el código sea más fácil de leer y modificar.
* **Manipular datos:** Podemos cambiar el valor almacenado en una variable a lo largo de la ejecución de nuestro programa, lo que nos permite realizar cálculos, actualizar información y controlar el flujo de nuestro código.

**Declaración e Inicialización de Variables:**

Antes de poder usar una variable en JavaScript, necesitamos **declararla**. Declarar una variable significa decirle al motor de JavaScript que vamos a usar un nombre específico para referirnos a un espacio de memoria. En JavaScript moderno, esto se hace principalmente utilizando las palabras clave `let` o `const`. Antiguamente, se utilizaba `var`.

Además de declarar una variable, a menudo queremos asignarle un valor inicial al mismo tiempo. Esto se llama **inicialización**.

```javascript
// Declaración de una variable llamada 'nombre'
let nombre;

// Inicialización de la variable 'edad' con el valor 30
let edad = 30;

// Declaración e inicialización de la variable 'mensaje' en una sola línea
const mensaje = "Hola, mundo!";
```

En las siguientes secciones, exploraremos las diferencias cruciales entre `var`, `let` y `const`, y cómo su comportamiento afecta la forma en que gestionamos los datos en nuestros programas JavaScript.

#### 2.2. Conceptos Clave: Scope y Hoisting

Para entender completamente cómo funcionan las variables en JavaScript, es esencial comprender dos conceptos fundamentales: el **scope** (alcance) y el **hoisting** (elevación).

#### Scope (Alcance)

El **scope** de una variable define la **región de nuestro código donde esa variable es accesible (visible) y puede ser utilizada**. En JavaScript, existen principalmente dos tipos de scope:

*   **Scope Global:** Una variable declarada **fuera de cualquier función o bloque de código** tiene scope global. Esto significa que puede ser accedida y modificada desde cualquier parte de nuestro programa.

    ```javascript
    let saludoGlobal = "¡Hola desde el scope global!";

    function mostrarSaludo() {
      console.log(saludoGlobal); // Accedemos a la variable global
    }

    mostrarSaludo(); // Imprimirá: ¡Hola desde el scope global!
    console.log(saludoGlobal); // También podemos acceder desde fuera de la función
    ```
*   **Scope Local:** Una variable declarada **dentro de una función** tiene scope local (también llamado **scope de función**). Esto significa que solo puede ser accedida y utilizada dentro de esa función. Las variables declaradas con `let` y `const` también tienen **scope de bloque** (block scope), lo que significa que solo son accesibles dentro del bloque de código (delimitado por llaves `{}`) donde se declaran.

    ```javascript
    function ejemploScopeLocal() {
      let mensajeLocal = "¡Hola desde el scope local!";
      console.log(mensajeLocal); // Podemos acceder a la variable dentro de la función
    }

    ejemploScopeLocal(); // Imprimirá: ¡Hola desde el scope local!
    // console.log(mensajeLocal); // ¡Esto daría un error porque 'mensajeLocal' no está definida fuera de la función!

    if (true) {
      let variableDeBloque = "Soy una variable de bloque";
      console.log(variableDeBloque); // Accesible dentro del bloque if
    }
    // console.log(variableDeBloque); // ¡Esto daría un error porque 'variableDeBloque' no está definida fuera del bloque if!
    ```

Entender el scope es crucial para evitar **conflictos de nombres** (tener variables con el mismo nombre en diferentes partes del código que podrían interferir entre sí) y para mantener nuestro código organizado y modular.

#### Hoisting (Elevación)

El **hoisting** es un comportamiento en JavaScript donde las **declaraciones** de variables (y funciones) se mueven conceptualmente a la parte superior de su scope (ya sea global o local) durante la fase de compilación, antes de que el código se ejecute. **Es importante destacar que solo la declaración se eleva, no la inicialización (la asignación del valor).**

El hoisting se comporta de manera diferente para `var`, `let` y `const`:

*   **`var` es hoisted con su declaración, pero no con su inicialización.** Esto significa que puedes usar una variable `var` antes de que aparezca su declaración en el código, pero su valor será `undefined` hasta que se alcance la línea donde se realiza la inicialización.

    ```javascript
    console.log(nombreVar); // Imprimirá: undefined
    var nombreVar = "Ana";
    console.log(nombreVar); // Imprimirá: Ana
    ```
*   **`let` y `const` son hoisted, pero no se inicializan.** Esto significa que la declaración de la variable se mueve al principio del scope, pero **no se puede acceder a la variable antes de la línea donde se declara explícitamente**. Si intentas hacerlo, obtendrás un error `ReferenceError`. Se dice que estas variables están en una **"zona muerta temporal" (Temporal Dead Zone - TDZ)** desde el inicio del scope hasta su declaración.

    ```javascript
    // console.log(nombreLet); // ¡Esto daría un ReferenceError!
    let nombreLet = "Carlos";
    console.log(nombreLet); // Imprimirá: Carlos

    // console.log(nombreConst); // ¡Esto también daría un ReferenceError!
    const nombreConst = "Sofía";
    console.log(nombreConst); // Imprimirá: Sofía
    ```

Comprender el hoisting es importante para evitar comportamientos inesperados en tu código, especialmente cuando trabajas con variables `var`. Las reglas más estrictas de `let` y `const` con respecto al hoisting ayudan a prevenir errores comunes.

En las siguientes secciones, profundizaremos en las características específicas de `var`, `let` y `const`, teniendo en cuenta estos conceptos de scope y hoisting.

#### 2.3. `var`: La Variable con Alcance de Función

La palabra clave `var` fue la forma tradicional de declarar variables en JavaScript antes de la introducción de `let` y `const` en ECMAScript 2015 (ES6). Aunque todavía se puede usar, tiene algunas características que pueden llevar a comportamientos inesperados y, por lo tanto, se recomienda evitar su uso en código JavaScript moderno.

**Sintaxis de declaración con `var`:**

```javascript
var nombreVariable; // Declaración (sin inicialización)
var otraVariable = 10; // Declaración e inicialización
var mensaje = "Hola"; var numero = 5; // Se pueden declarar múltiples variables en la misma línea (no recomendado por claridad)
```

_**Alcance de función (****`function scope`****):**_

Las variables declaradas con `var` tienen **alcance de función**. Esto significa que una variable `var` es accesible dentro de la función donde se declara (y en cualquier función anidada dentro de esa función). Si una variable `var` se declara fuera de cualquier función, tiene scope global.

```javascript
function ejemploVarScope() {
  var variableFuncion = "Soy local a la función";
  console.log(variableFuncion); // Accesible aquí

  if (true) {
    var otraVariableFuncion = "También soy local a la función (¡aunque esté en un bloque!)";
    console.log(otraVariableFuncion); // Accesible aquí
  }

  console.log(otraVariableFuncion); // ¡Sorprendentemente, también es accesible aquí!
}

ejemploVarScope();
// console.log(variableFuncion); // ¡Error! No es accesible fuera de la función.
console.log(globalVar); // Accesible desde cualquier parte
var globalVar = "Soy global";
```

Como se ve en el ejemplo, incluso si una variable `var` se declara dentro de un bloque (como un `if` o un bucle), su scope sigue siendo la función contenedora (o global si no está dentro de una función).

**Problemas y consideraciones con `var`:**

*   **Hoisting:** Como mencionamos anteriormente, las variables `var` son hoisted con su declaración al principio de su scope (función o global). Si se usan antes de su declaración explícita, tendrán el valor `undefined`, lo que puede llevar a errores sutiles.

    ```javascript
    console.log(miVar); // Imprime: undefined
    var miVar = 20;
    ```
*   **Redeclaración:** Con `var`, es posible redeclarar una variable con el mismo nombre dentro del mismo scope sin obtener un error. Esto puede llevar a confusiones y sobreescritura accidental de valores.

    ```javascript
    var contador = 10;
    console.log(contador); // Imprime: 10
    var contador = 20; // ¡Redeclaración permitida!
    console.log(contador); // Imprime: 20
    ```

Debido a estos problemas, especialmente la falta de scope de bloque y la posibilidad de redeclaración, se recomienda utilizar `let` y `const` en lugar de `var` en código JavaScript moderno.

**Ejemplos didácticos con explicación de la lógica y el scope:**

```javascript
function ejemploVarHoisting() {
  console.log("Dentro de la función:");
  console.log("valorDeX antes de la declaración:", valorDeX); // Imprime: undefined
  if (true) {
    var valorDeX = 5;
  }
  console.log("valorDeX después de la declaración en el bloque:", valorDeX); // Imprime: 5
}

ejemploVarHoisting();
console.log("Fuera de la función:");
// console.log(valorDeX); // ¡Error! 'valorDeX' no es accesible fuera de la función.

/*
Lógica:
1. Al entrar en la función 'ejemploVarHoisting', la declaración 'var valorDeX;' se eleva al principio de la función.
2. La primera 'console.log(valorDeX)' se ejecuta antes de que se asigne un valor a 'valorDeX', por lo que imprime 'undefined'.
3. Dentro del bloque 'if', se asigna el valor 5 a 'valorDeX'.
4. El segundo 'console.log(valorDeX)' dentro de la función imprime el valor asignado: 5.
5. Fuera de la función, 'valorDeX' no está definida en el scope global, por lo que intentar acceder a ella generaría un error (si no estuviera comentado).
*/
```

**Ejercicio con solución y análisis:**

**Ejercicio:** ¿Cuál será la salida del siguiente código y por qué?

```javascript
function problemaVar() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 100);
  }
}

problemaVar();
```

**Solución:**

La salida será:

```
3
3
3
```

**Análisis:**

1. El bucle `for` se ejecuta tres veces, con `i` tomando los valores 0, 1 y 2.
2. En cada iteración, se programa una función anónima para que se ejecute después de un cierto retraso (0ms, 100ms, 200ms).
3. **Debido a que `var` tiene scope de función (no de bloque), la variable `i` es compartida por todas las funciones anónimas creadas dentro del bucle.**
4. Cuando las funciones anónimas finalmente se ejecutan (después de que el bucle `for` haya terminado), el valor de `i` ya es 3.
5. Por lo tanto, cada función `console.log(i)` imprimirá el valor final de `i`, que es 3.

Este ejemplo clásico ilustra uno de los problemas comunes con `var` en bucles y cómo el scope de bloque de `let` puede solucionar este tipo de situaciones.

#### 2.4. `let`: La Variable con Alcance de Bloque

La palabra clave `let` se introdujo en ES6 como una mejora sobre `var`, proporcionando un alcance más intuitivo y ayudando a prevenir algunos errores comunes.

**Sintaxis de declaración con `let`:**

```javascript
let nombre; // Declaración
let contador = 0; // Declaración e inicialización
let x = 1, y = 2; // Se pueden declarar múltiples variables en la misma línea (generalmente se prefiere claridad en líneas separadas)
```

**Alcance de bloque (`block scope`):**

Las variables declaradas con `let` tienen **alcance de bloque**. Esto significa que una variable `let` solo es accesible dentro del bloque de código (delimitado por llaves `{}`) donde se declara. Esto incluye bloques de funciones, bloques `if`, bloques `for`, bloques `while`, etc.

```javascript
function ejemploLetScope() {
  let variableFuncion = "Soy local a la función";
  console.log(variableFuncion); // Accesible aquí

  if (true) {
    let variableDeBloque = "Soy local a este bloque if";
    console.log(variableDeBloque); // Accesible aquí
  }

  // console.log(variableDeBloque); // ¡Error! No es accesible fuera del bloque if.
}

ejemploLetScope();
// console.log(variableFuncion); // ¡Error! No es accesible fuera de la función.

let globalLet = "Soy global (con let)";
console.log(globalLet); // Accesible desde cualquier parte
```

El scope de bloque de `let` hace que el comportamiento de las variables sea más predecible y ayuda a evitar la sobreescritura accidental y los conflictos de nombres.

**El comportamiento de `let` con el hoisting:**

Al igual que `var`, las declaraciones de variables `let` son **hoisted** al principio de su scope. Sin embargo, a diferencia de `var`, las variables `let` **no se inicializan** durante el hoisting. Esto significa que si intentas acceder a una variable `let` antes de su declaración explícita en el código, obtendrás un `ReferenceError`. Se dice que la variable está en la **Zona Muerta Temporal (TDZ)** hasta que se alcanza su declaración.

```javascript
// console.log(miLet); // ¡ReferenceError: Cannot access 'miLet' before initialization!
let miLet = 30;
console.log(miLet); // Imprime: 30
```

#### _**Imposibilidad de redeclaración:**_

A diferencia de `var`, `let` **no permite redeclarar una variable con el mismo nombre dentro del mismo scope**. Intentar hacerlo resultará en un error `SyntaxError`. Esto ayuda a prevenir errores causados por la sobreescritura accidental de variables.

```javascript
let contadorLet = 10;
console.log(contadorLet); // Imprime: 10
// let contadorLet = 20; // ¡SyntaxError: Identifier 'contadorLet' has already been declared!
contadorLet = 20; // ¡Esto sí está permitido (reasignación)!
console.log(contadorLet); // Imprime: 20
```

#### **Ejemplos didácticos con explicación del scope y el hoisting:**

```javascript
function ejemploLetHoisting() {
  // console.log(valorLet); // ¡ReferenceError: Cannot access 'valorLet' before initialization!
  if (true) {
    let valorLet = 7;
    console.log("Dentro del bloque if:", valorLet); // Imprime: 7
  }
  // console.log(valorLet); // ¡ReferenceError: 'valorLet' is not defined! (fuera del bloque)
}

ejemploLetHoisting();

/*
Lógica:
1. Al entrar en la función 'ejemploLetHoisting', la declaración 'let valorLet;' es hoisted al principio del scope de la función, pero no se inicializa.
2. Intentar acceder a 'valorLet' antes de su declaración dentro del bloque 'if' generaría un ReferenceError.
3. Dentro del bloque 'if', se declara e inicializa 'valorLet' con el valor 7.
4. El 'console.log' dentro del bloque imprime el valor 7.
5. Fuera del bloque 'if', 'valorLet' no está definida en ese scope, por lo que intentar acceder a ella generaría un ReferenceError.
*/
```

#### **Ejercicio con solución y análisis:**

¿Cuál será la salida del siguiente código y por qué? Compara este resultado con el ejercicio similar que usamos para `var`.

```javascript
function problemaLet() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 100);
  }
}

problemaLet();
```

#### _**Solución:**_

La salida será:

```
0
1
2
```

#### _**Análisis:**_

1. El bucle `for` se ejecuta tres veces, con `i` tomando los valores 0, 1 y 2.
2. En cada iteración, se programa una función anónima para que se ejecute después de un cierto retraso.
3. Debido a que let tiene scope de bloque, una nueva variable i es creada en cada iteración del bucle. Cada una de las funciones anónimas que se pasan a setTimeout cierra sobre su propia instancia de la variable i de esa iteración específica.
4. Cuando las funciones anónimas finalmente se ejecutan, cada una recuerda el valor de i que tenía en el momento en que se creó su cierre (closure).
5. Por lo tanto, la primera función (retardo de 0ms) imprimirá el valor de i de la primera iteración (0), la segunda función (retardo de 100ms) imprimirá el valor de i de la segunda iteración (1), y la tercera función (retardo de 200ms) imprimirá el valor de i de la tercera iteración (2).

Esta diferencia fundamental en el scope es una de las principales razones por las que let es preferible a var en muchos casos, ya que ayuda a evitar comportamientos inesperados relacionados con los cierres en bucles.

¡Perfecto! Aquí tienes el desarrollo de la sección **2.5. `const`: La Variable para Valores Constantes (y más)**:

#### 2.5. `const`: La Variable para Valores Constantes (y más)

La palabra clave `const` se introdujo en ES6 para declarar variables cuyo valor se espera que **no sea reasignado** después de su inicialización. Sin embargo, la noción de "constante" en JavaScript se aplica principalmente a la **vinculación** de la variable al valor, no necesariamente a la inmutabilidad del valor en sí, especialmente cuando se trata de objetos y arrays.

#### _**Sintaxis de declaración con****&#x20;****`const`****:**_

```javascript
const PI = 3.14159; // Declaración e inicialización (¡es obligatorio!)
// const gravedad; // ¡Error! Las variables 'const' deben ser inicializadas al declararse.
const MENSAJE = "Este mensaje no cambiará";
// const VELOCIDAD_LUZ = 3e8, UNIDAD = "m/s"; // Se pueden declarar múltiples constantes en la misma línea (no recomendado por claridad).
```

_**Alcance de bloque (****`block scope`****):**_

Al igual que `let`, las variables declaradas con `const` tienen **alcance de bloque**. Solo son accesibles dentro del bloque de código donde se declaran.

```javascript
function ejemploConstScope() {
  const CONSTANTE_LOCAL = 100;
  console.log(CONSTANTE_LOCAL); // Accesible aquí

  if (true) {
    const CONSTANTE_DE_BLOQUE = "Soy constante dentro del bloque if";
    console.log(CONSTANTE_DE_BLOQUE); // Accesible aquí
  }

  // console.log(CONSTANTE_DE_BLOQUE); // ¡Error! No es accesible fuera del bloque if.
}

ejemploConstScope();
// console.log(CONSTANTE_LOCAL); // ¡Error! No es accesible fuera de la función.

const GLOBAL_CONSTANTE = "Soy una constante global";
console.log(GLOBAL_CONSTANTE); // Accesible desde cualquier parte
```

#### _**El comportamiento de****&#x20;****`const`****&#x20;****con el hoisting:**_

Similar a `let`, las declaraciones de variables `const` son **hoisted** al principio de su scope, pero **no se inicializan**. Esto significa que también están en la **Zona Muerta Temporal (TDZ)** hasta que se alcanza su declaración explícita en el código. Intentar acceder a una variable `const` antes de su declaración resultará en un `ReferenceError`.

```javascript
// console.log(MI_CONSTANTE); // ¡ReferenceError: Cannot access 'MI_CONSTANTE' before initialization!
const MI_CONSTANTE = 42;
console.log(MI_CONSTANTE); // Imprime: 42
```

#### _**Imposibilidad de redeclaración y reasignación (para tipos primitivos):**_

*   **Redeclaración:** Al igual que `let`, `const` **no permite redeclarar una variable con el mismo nombre dentro del mismo scope**. Intentar hacerlo generará un `SyntaxError`.

    ```javascript
    const VALOR_UNICO = 1;
    console.log(VALOR_UNICO); // Imprime: 1
    // const VALOR_UNICO = 2; // ¡SyntaxError: Identifier 'VALOR_UNICO' has already been declared!
    ```
*   **Reasignación (para tipos primitivos):** La característica principal de `const` es que **una vez que una variable `const` ha sido inicializada con un valor primitivo (como un número, string, boolean, null o undefined), no se puede reasignar un nuevo valor a esa variable.** Intentar hacerlo resultará en un error `TypeError`.

    ```javascript
    const GRAVEDAD = 9.8;
    console.log(GRAVEDAD); // Imprime: 9.8
    // GRAVEDAD = 10; // ¡TypeError: Assignment to constant variable.!

    const NOMBRE = "Pedro";
    console.log(NOMBRE); // Imprime: Pedro
    // NOMBRE = "Pablo"; // ¡TypeError: Assignment to constant variable.!
    ```

**Consideraciones con objetos y arrays declarados con `const`:**

Es crucial entender que cuando declaras un objeto o un array con `const`, **la variable en sí (la vinculación) no se puede reasignar a un nuevo objeto o array**. Sin embargo, **las propiedades del objeto o los elementos del array&#x20;**_**sí**_**&#x20;pueden ser modificados.** La inmutabilidad con `const` para objetos y arrays es **superficial**.

```javascript
const personaConst = { nombre: "Ana", edad: 25 };
console.log(personaConst); // Imprime: { nombre: 'Ana', edad: 25 }

personaConst.edad = 26; // ¡Esto está permitido! Modificamos una propiedad del objeto.
console.log(personaConst); // Imprime: { nombre: 'Ana', edad: 26 }

// personaConst = { nombre: "Luis", edad: 30 }; // ¡TypeError: Assignment to constant variable.! (Intentamos reasignar la variable a un nuevo objeto).

const coloresConst = ["rojo", "verde", "azul"];
console.log(coloresConst); // Imprime: [ 'rojo', 'verde', 'azul' ]

coloresConst.push("amarillo"); // ¡Esto está permitido! Modificamos el array.
console.log(coloresConst); // Imprime: [ 'rojo', 'verde', 'azul', 'amarillo' ]

// coloresConst = ["naranja", "morado"]; // ¡TypeError: Assignment to constant variable.! (Intentamos reasignar la variable a un nuevo array).
```

**Ejemplos didácticos con explicación de la inmutabilidad (superficial):**

```javascript
const config = {
  apiURL: "[https://api.example.com](https://api.example.com)",
  version: "v1"
};

console.log("Configuración inicial:", config);

config.version = "v2"; // Modificamos una propiedad
console.log("Configuración modificada:", config);

// config = { apiURL: "[https://newapi.example.com](https://newapi.example.com)", version: "v3" };
// ¡Esto generaría un TypeError!

/*
Lógica:
1. Se declara una constante 'config' y se inicializa con un objeto.
2. Se puede modificar la propiedad 'version' del objeto 'config' porque la constante solo impide la reasignación de la variable 'config' a un nuevo objeto.
3. Intentar reasignar 'config' a un nuevo objeto literal genera un TypeError.
*/

const numerosConst = [1, 2, 3];
console.log("Array inicial:", numerosConst);

numerosConst.push(4); // Modificamos el array
console.log("Array modificado:", numerosConst);

// numerosConst = [5, 6];
// ¡Esto generaría un TypeError!

/*
Lógica:
1. Se declara una constante 'numerosConst' y se inicializa con un array.
2. Se pueden añadir elementos al array usando métodos como 'push' porque la constante solo impide la reasignación de la variable 'numerosConst' a un nuevo array.
3. Intentar reasignar 'numerosConst' a un nuevo array literal genera un TypeError.
*/
```

**Ejercicio con solución y análisis:**

**Ejercicio:** ¿Cuál será la salida del siguiente código y por qué?

```javascript
const usuario = {
  nombre: "Ricardo",
  edad: 32
};

function actualizarEdad(persona) {
  persona.edad++;
}

actualizarEdad(usuario);
console.log(usuario.edad);

// usuario = { nombre: "Elena", edad: 28 }; // Descomenta esta línea y observa el resultado.
```

**Solución:**

La salida será:

```
33
```

Si descomentas la última línea, obtendrás un `TypeError: Assignment to constant variable.`.

**Análisis:**

1. Se declara una constante `usuario` y se inicializa con un objeto.
2. La función `actualizarEdad` recibe el objeto `usuario` como argumento (pasado por referencia).
3. Dentro de la función, se incrementa la propiedad `edad` del objeto recibido. Dado que `usuario` es una constante que apunta a este objeto en memoria, y estamos modificando una propiedad del objeto (no reasignando la variable `usuario`), la modificación es permitida.
4. `console.log(usuario.edad)` muestra el valor modificado de la propiedad `edad`, que ahora es 33.
5. La línea comentada intenta reasignar la variable `usuario` para que apunte a un nuevo objeto. Esto no está permitido con `const` y generaría un `TypeError`.

Comprender esta distinción entre la inmutabilidad de la vinculación y la posible mutabilidad de los objetos y arrays es fundamental al trabajar con `const` en JavaScript.

#### 2.6. Comparativa Directa: `var` vs. `let` vs. `const`

Para resumir las diferencias clave entre las palabras clave `var`, `let` y `const` utilizadas para declarar variables en JavaScript, aquí tienes una tabla comparativa:

| Característica     | `var`                           | `let`                          | `const`                       |
| ------------------ | ------------------------------- | ------------------------------ | ----------------------------- |
| **Scope**          | Scope de función (o global)     | Scope de bloque (o global)     | Scope de bloque (o global)    |
| **Hoisting**       | Declaración hoisted,            | Declaración hoisted,           | Declaración hoisted,          |
|                    | inicialización no.              | no inicialización (TDZ).       | no inicialización (TDZ).      |
| **Redeclaración**  | Permitida dentro del mismo      | No permitida dentro del mismo  | No permitida dentro del mismo |
|                    | scope (puede llevar a errores). | scope (SyntaxError).           | scope (SyntaxError).          |
| **Reasignación**   | Permitida.                      | Permitida.                     | No permitida para tipos       |
|                    |                                 |                                | primitivos (TypeError).       |
|                    |                                 |                                | Propiedades de objetos y      |
|                    |                                 |                                | elementos de arrays sí pueden |
|                    |                                 |                                | modificarse.                  |
| **Inicialización** | Opcional. Si no se inicializa,  | Opcional. Si no se inicializa, | **Obligatoria** al declarar.  |
|                    | su valor es `undefined`.        | su valor es `undefined`.       |                               |

**Resumen de cuándo usar cada uno:**

* **`const`:**
  * **Utiliza `const` por defecto** para todas las variables que no necesitas reasignar. Esto ayuda a indicar la intención de que el valor no debe cambiar y puede hacer el código más fácil de entender y menos propenso a errores.
  * Úsalo para valores que son constantes en tu programa (aunque recuerda la superficial inmutabilidad de objetos y arrays).
* **`let`:**
  * Utiliza `let` para variables que **necesitas reasignar** en algún momento durante la ejecución de tu código (por ejemplo, contadores en bucles, variables temporales, etc.).
  * Es una mejor alternativa a `var` debido a su scope de bloque y la prevención de la redeclaración accidental.
* **`var`:**
  * **Evita el uso de `var` en código JavaScript moderno (ES6+).** Las características de `let` y `const` ofrecen un manejo de variables más seguro y predecible.
  * Si te encuentras trabajando en código base antiguo que utiliza `var`, es importante entender su comportamiento para evitar errores. Sin embargo, para código nuevo, prefiere `let` y `const`.

Comprender estas diferencias te permitirá elegir la forma correcta de declarar tus variables en JavaScript, lo que contribuirá a un código más limpio, seguro y fácil de mantener.
