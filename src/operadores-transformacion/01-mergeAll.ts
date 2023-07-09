/**
 * mergeAll: Sirve para trabajar observables que devuelven otros
 * observables
 */

import { debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

//Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime(500),
    map((event) => {
      const texto = event.target["value"];
      return ajax.getJSON(`https://api.github.com/users/${texto}`);
    })
  )
  .subscribe((res) => {
    res.pipe(pluck("url")).subscribe(console.log);
  });

input$
  .pipe(
    debounceTime(500),
    pluck("target", "value"),
    map((texto) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll(),
    pluck("items")
  )
  .subscribe((res) => {
    console.log(res);
  });
