import { fromEvent, map, pluck, range } from "rxjs";

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupPluck$ = keyup$.pipe(pluck("key"));

const keyupPluck2$ = keyup$.pipe(pluck("target", "baseURI"));

keyupPluck$.subscribe((code) => console.log("pluck", code));
keyupPluck2$.subscribe((code) =>
  console.log("pluck prop dentro de un objeto ", code)
);
