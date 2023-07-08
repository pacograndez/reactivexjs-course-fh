/**
 * Take: Sirve para limitar la cantidad de emisiones de un observable
 */

import { of, take, tap } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5);
numeros$
  .pipe(
    tap((t) => console.log("tap:", t)),
    take(3)
  )
  .subscribe({
    next: (value) => console.log("value:", value),
    complete: () => console.log("complete"),
  });
