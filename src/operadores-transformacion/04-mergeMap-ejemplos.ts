import {
  Observable,
  debounceTime,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  pluck,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interfaces";

//Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

//Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = "";

  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "ver página";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + "");
    li.append(anchor);

    orderList.append(li);
  }
};

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

// input$
//   .pipe(
//     debounceTime(500),
//     pluck("target", "value"),
//     map((texto) =>
//       ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
//     ),
//     mergeAll(),
//     pluck("items")
//   )
//   .subscribe(mostrarUsuarios);

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    pluck("target", "value"),
    mergeMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
