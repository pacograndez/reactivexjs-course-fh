/**
 * ExhaustMap: recibe un observable y maneja internamente la subscripcion
 * Mantiene una sola suscripción activa antes de poder añadir otra,
 * ignora todas las demas hasta que termine la actual
 */

import {
  catchError,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  pluck,
  switchMap,
  tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

//Helpers
const pericionHttpLogin = (userPass) => {
  return ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    pluck("response", "token"),
    catchError((error) => of("XXX"))
  );
};

// Creando formulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// Configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append(inputEmail, inputPass, submitBtn);
const body = document.querySelector("body");
body.append(form);

//Streams
const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  tap((event) => event.preventDefault()),
  map((event) => ({
    email: event.target[0].value,
    password: event.target[1].value,
  })),
  mergeMap(pericionHttpLogin)
  //switchMap(pericionHttpLogin)
);

const submitForm2$ = fromEvent<Event>(form, "submit").pipe(
  tap((event) => event.preventDefault()),
  map((event) => ({
    email: event.target[0].value,
    password: event.target[1].value,
  })),
  // mergeMap(pericionHttpLogin)
  switchMap(pericionHttpLogin)
);

const submitForm3$ = fromEvent<Event>(form, "submit").pipe(
  tap((event) => event.preventDefault()),
  map((event) => ({
    email: event.target[0].value,
    password: event.target[1].value,
  })),
  // mergeMap(pericionHttpLogin)
  //  switchMap(pericionHttpLogin)
  exhaustMap(pericionHttpLogin)
);

submitForm$.subscribe((token) => console.log("token:", token));
submitForm2$.subscribe((token) => console.log("token:", token));
submitForm3$.subscribe((token) => console.log("token:", token));
