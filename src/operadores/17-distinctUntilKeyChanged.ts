/**
 * distinctUntilKeyChanged: emite valores siempre y cuando la emisión
 * anterior no sea la misma
 */

import { distinctUntilKeyChanged, from } from "rxjs";

// DistinctUntilChanged con objetos
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

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
