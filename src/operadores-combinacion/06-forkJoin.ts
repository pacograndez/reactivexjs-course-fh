/**
 * forkJoin: recibe varios observables como argumentos pero
 * devuelve el valor de todos los observables recien cuando
 * todos estos se completan
 */

import { forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3)); //0..1..2
const letras$ = of("a", "b", "c");

forkJoin(numeros$, interval$, letras$).subscribe(console.log);

forkJoin(numeros$, interval$, letras$).subscribe((res) => {
  console.log("numeros:", res[0]);
  console.log("intervalos:", res[1]);
  console.log("letras:", res[2]);
});

forkJoin({ numeros$, interval$, letras$ }).subscribe(console.log);

forkJoin({ num: numeros$, int: interval$, let: letras$ }).subscribe(
  console.log
);
