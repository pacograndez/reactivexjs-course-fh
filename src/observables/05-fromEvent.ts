import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */
// const scr1$ = fromEvent(document, "click");
// const scr2$ = fromEvent(document, "keyup");

const scr1$ = fromEvent<MouseEvent>(document, "click");
const scr2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (value) => console.log("next", value),
};

// scr1$.subscribe(observer);
scr1$.subscribe((ev) => {
  console.log(ev.x);
  console.log(ev.y);
});
scr1$.subscribe(({ x, y }) => {
  console.log(x);
  console.log(y);
});
// scr2$.subscribe(observer);
scr2$.subscribe((evento) => console.log(evento.key));
