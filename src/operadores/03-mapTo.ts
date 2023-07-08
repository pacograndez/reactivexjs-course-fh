import { fromEvent, map, mapTo, pluck, range } from "rxjs";

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupMapTo$ = keyup$.pipe(mapTo("Tecla presionada"));

keyupMapTo$.subscribe((code) => console.log("mapTo", code));
