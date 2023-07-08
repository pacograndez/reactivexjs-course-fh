/**
 * Scan: Es muy similar al Reduce, cuando los valores
 * son emitidos por el observable van saliendo conforme
 * van ingresando, pero retornando el valor acumulado
 */

import { from, map, reduce, tap } from "rxjs";
import { scan } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, cur) => {
//   return acc + cur;
// };

const totalAcumulador = (acc, cur) => acc + cur;

//Reduce
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

//Scan
from(numeros)
  .pipe(tap(console.log), scan(totalAcumulador, 0))
  .subscribe(console.log);

//Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "paco", autenticado: false, token: null },
  { id: "paco", autenticado: true, token: "ABC" },
  { id: "paco", autenticado: true, token: "ABC123" },
];

const state$ = from(user).pipe(
  scan<Usuario, Usuario>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

const id$ = state$
  .pipe(map<Usuario, Usuario>((state) => state))
  .subscribe((value) => console.log("redux", value));
