/**
 * throttleTime: ignora todos los valores de las emisiones
 *  durante el tiempo especificado dentro del throttleTime
 */

import {
  asyncScheduler,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  pluck,
  throttleTime,
} from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(throttleTime(1000), pluck("target", "value"), distinctUntilChanged())
  .subscribe(console.log);

// Retorna el primer y última valor emitido
input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(console.log);
