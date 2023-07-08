/**
 * takeWhile: permite recibir valores mientras la condicion se cumpla
 */

import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150)
  )
  .subscribe({
    next: (value) => console.log("next:", value),
    complete: () => console.log("complete:"),
  });

/**
 * Si se quiere que se muestre el último valor
 * que rompe la condicion, se agrega el valor
 * del inclusive que por defecto es false.
 */
click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (value) => console.log("next:", value),
    complete: () => console.log("complete:"),
  });
