/**
 * SampleTime: Nos permite obtener el último valor emitido
 * en un intervalo de tiempo
 */

import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    sampleTime(1000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
