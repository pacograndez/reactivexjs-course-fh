/**
 * distinctUntilChanged: emite valores siempre y cuando la emisión
 * anterior no sea la misma
 */

import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of<(number | string)[]>(
  1,
  "1",
  1,
  3,
  3,
  2,
  2,
  4,
  4,
  5,
  3,
  "1"
);

numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

// Distinct con objetos
interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "Megaman" },
  { nombre: "Zero" },
  { nombre: "Dr. Willy" },
  { nombre: "X" },
  { nombre: "X" },
  { nombre: "Zero" },
];

from(personajes)
  .pipe(
    distinctUntilChanged(
      (anterior, actual) => anterior.nombre === actual.nombre
    )
  )
  .subscribe(console.log);
