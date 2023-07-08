/**
 * takeUntil: recibe como argumento otro observable
 * sigue recibiendo y emitiendo los valores hasta que
 * el segundo observable emite su primer valor
 */

import { fromEvent, interval, takeUntil } from "rxjs";

const boton = document.createElement("button");
boton.innerHTML = "Detener timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, "click");

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (value) => console.log("next:", value),
  complete: () => console.log("complete:"),
});
