/**
 * StartWith: Nos permite hacer una emisión antes
 * que el observable empiece a emitir aunque sea
 * un valor síncrono
 */

import { endWith, of, startWith } from "rxjs";

const numeros$ = of(1, 2, 3).pipe(
  // startWith(0),
  startWith("a", "b", "c"),
  endWith("x", "y", "z")
);

numeros$.subscribe(console.log);
