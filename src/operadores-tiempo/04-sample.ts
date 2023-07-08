/**
 * Sample: Emite el último valor emitido por el observale
 * hasta que el observable dentro de sample emita un valor
 */

import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, "click");

interval$.pipe(sample(click$)).subscribe(console.log);
