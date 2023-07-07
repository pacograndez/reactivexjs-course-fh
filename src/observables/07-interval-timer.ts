/**
 * Interval y timer
 * El interval crear un observable que emite una secuencia de números
 * en un intervalo de tiempo especificado, su valor inicial del interval es 0
 *
 * El timer crear un observable que empieza a emitir valores después de una
 * fecha específica y luego de ese valor empieza a emitir los valores siguientes
 * en un periodo de tiempo indicado.
 *
 * Tanto el interval como el timer trabajan
 * de manera asíncrona
 */

import { interval, timer } from "rxjs";

const observer = {
  next: (value) => console.log("next: ", value),
  complete: () => console.log("complete"),
};

const interval$ = interval(1000);
const timer$ = timer(2000);

console.log("inicio interval");
// interval$.subscribe(observer);
console.log("fin interval");

console.log("inicio timer");
// timer$.subscribe(observer);
console.log("fin timer");

const timer2$ = timer(2000, 1000);

console.log("inicio timer");
//timer2$.subscribe(observer);
console.log("fin timer");

const hoyEn5 = new Date();

hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const timer3$ = timer(hoyEn5);

console.log("inicio timer fecha");
timer3$.subscribe(observer);
console.log("fin timer fecha");
