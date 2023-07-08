//Operador
/**
 * Permite conectar una pieza al flujo de información
 * y esa pieza realiza algo en particular, filtrar la información,
 * bloquear la información, etc etc.
 *
 */

import { fromEvent, map, range } from "rxjs";

const obs$ = range(1, 5);

obs$.pipe(map<number, number>((value) => value * 10)).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyup$.pipe(map((event) => event.code));

keyupCode$.subscribe(console.log);
