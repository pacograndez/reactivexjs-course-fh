/**
 * ExhaustMap: recibe un observable y maneja internamente la subscripcion
 * Mantiene una sola suscripción activa antes de poder añadir otra,
 * ignora todas las demas hasta que termine la actual
 */

import { concatMap, exhaustMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(500).pipe(take(3));

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
