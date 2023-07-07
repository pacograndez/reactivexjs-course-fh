/**
 * Range, crea una secuenta de números y al llegar al
 * último valor se completara
 */

import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);
const src$ = range(1, 5);

src$.subscribe(console.log);

//Asíncrona

const src1$ = range(1, 5, asyncScheduler);

console.log("inicio");
src1$.subscribe(console.log);
console.log("fin");
