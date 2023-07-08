/**
 * First:
 */

import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(first()).subscribe({
  next: (value) => console.log("next", value),
  complete: () => console.log("complete"),
});

// Obtener primer valor cuando clientY >= 150
click$
  .pipe(
    tap(() => console.log("tap")),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (value) => console.log("next", value),
    complete: () => console.log("complete"),
  });

click$
  .pipe(
    tap<MouseEvent>(() => console.log("tap")),
    map((event) => ({
      clientY: event.clientY,
      clientX: event.clientX,
    }))
  )
  .subscribe({
    next: (value) => console.log("next", value),
    complete: () => console.log("complete"),
  });

click$
  .pipe(
    tap<MouseEvent>(() => console.log("tap2")),
    map((event) => ({
      clientY: event.clientY,
      clientX: event.clientX,
    })),
    map(({ clientX, clientY }) => ({
      clientY,
      clientX,
    })),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (value) => console.log("next", value),
    complete: () => console.log("complete"),
  });
