/**
 * debounceTime: Trabaja en base a intervalos de tiempo,
 * Nos ayuda a poder contar cuantas milesimas de segundos
 * han pasado desde la última emisión.
 * Cuando las milesimas de segundos sobre pasan el parámetro
 * indicado como argumento se emitirá el valor
 * Nos ayuda a limitar la cantidad de emisiones que nuestro
 * source u observable está emitiendo
 */

import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(debounceTime(3000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(debounceTime(1000), pluck("target", "value"), distinctUntilChanged())
  .subscribe(console.log);
