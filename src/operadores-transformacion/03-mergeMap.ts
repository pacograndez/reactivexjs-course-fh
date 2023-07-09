/**
 * mergeMap:
 */

import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";
import { DllReferencePlugin } from "webpack";

const letras$ = of("a", "b", "c");

letras$
  .pipe(
    mergeMap((letra) =>
      interval(1000).pipe(
        map((i) => letra + i),
        take(3)
      )
    )
  )
  .subscribe({
    next: (value) => console.log("next:", value),
    complete: () => console.log("complete"),
  });

// Obtener el tiempo que tengo presionado el mouse

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$))))
  .subscribe(console.log);
