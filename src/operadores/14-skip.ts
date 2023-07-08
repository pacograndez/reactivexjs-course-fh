/**
 * skip: sirve para saltar u omitir cierta cantidad
 * de emisiones iniciales
 */

import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement("button");
boton.innerHTML = "Detener timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("tap antes de skip")),
  skip(1),
  tap(() => console.log("tap después de skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (value) => console.log("next:", value),
  complete: () => console.log("complete:"),
});
