/**
 * Merge (Function): recibe uno o más observables y devuelve como
 * resultado la combinación de los observables simultaneamente
 * Ambos observables deben de completarse para que se dispare el
 * complete de la subscripcion
 */

import { fromEvent, merge, pluck } from "rxjs";

const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

merge(keyup$.pipe(pluck("type")), click$.pipe(pluck("type"))).subscribe(
  console.log
);
