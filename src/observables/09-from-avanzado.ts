import { of, from } from "rxjs";

/**
 * of = tomar argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 * ... => operador spread
 */

const observer = {
  next: (value) => console.log("next :", value),
  complete: () => console.log("complete"),
};

const source$ = from([1, 2, 3, 4, 5]);
const source2$ = of([1, 2, 3, 4, 5]);
const source3$ = from("Paco");

source$.subscribe(observer);
source2$.subscribe(observer);
source3$.subscribe(observer);

const source4$ = from(fetch("https://api.github.com/users/klerith"));

source4$.subscribe(observer);

source4$.subscribe(async (res) => {
  console.log(res);

  const data = await res.json();

  console.log(data);
});

// Iterables, objeto que te permite obtener valores
// de manera secuencial del mismo

// El * indica que es una funcion generadora
const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 10;
};

const miIterable = miGenerador();

// for (let id of miIterable) {
//     console.log(id);
// }

from(miIterable).subscribe(observer);
