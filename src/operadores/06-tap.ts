import { map, range, tap } from "rxjs";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => {
      console.log("antes", x);
    }),
    map((value) => value * 10),
    tap({
      next: (valor) => console.log("despues", valor),
      complete: () => console.log("se terminó todo"),
    })
  )
  .subscribe((value) => console.log("subs", value));
