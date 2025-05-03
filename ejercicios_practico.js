// Bucle for
const miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
}

// Bucle while
let contador = 0;
while (contador < miLista.length) {
    console.log(miLista[contador]);
    contador++;
}

// Función de flecha
const saludo = () => "Hola mundo";

console.log(saludo());