/**
 * StartWith: Nos permite hacer una emisión antes
 * que el observable empiece a emitir aunque sea
 * un valor síncrono
 */

import { endWith, of, startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

//Referencias
const loadingDiv = document.createElement("div");
loadingDiv.classList.add("loading");
loadingDiv.innerHTML = "Cargando...";

const body = document.querySelector("body");

//Stream
ajax
  .getJSON("https://reqres.in/api/users/2?delay=3")
  .pipe(startWith(true))
  .subscribe((res) => {
    if (res === true) {
      body.append(loadingDiv);
    } else {
      document.querySelector(".loading").remove();
    }
    console.log(res);
  });
