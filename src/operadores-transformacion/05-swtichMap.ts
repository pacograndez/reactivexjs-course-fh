/**
 * SwitchMap: es un operador que recibe un callback que devuelve
 * un observable, este observable es quien se va a subscribir para
 * emitir la salida
 * Solo toma el ultimo valor de las emisiones
 */

import { fromEvent, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
