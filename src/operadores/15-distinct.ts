/**
 * distinct: deja pasar unicamente los valores que no han sido
 * emitidos por el observable
 */

import { distinct, from, of } from "rxjs";

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

numeros$.pipe(distinct()).subscribe(console.log);

// Distinct con objetos
interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "X" },
  { nombre: "Zero" },
  { nombre: "Dr. Willy" },
  { nombre: "X" },
  { nombre: "Megaman" },
  { nombre: "Zero" },
];

from(personajes)
  .pipe(distinct((p) => p.nombre))
  .subscribe(console.log);
