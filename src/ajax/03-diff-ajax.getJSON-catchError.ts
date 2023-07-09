import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = "https://httpbin.orgXXX/delay/1";

const obs$ = ajax.getJSON(url, {
  "Content-Type": "application/json",
  "mi-token": "abc",
});

const obs2$ = ajax(url);

obs$.subscribe((data) => console.log("data:", data));
obs2$.subscribe((data) => console.log("data:", data));

const manejaError = (res: AjaxError) => {
  console.warn("Error:", res.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

obs$
  .pipe(catchError(manejaError))
  .subscribe((data) => console.log("getJSON:", data));
obs2$
  .pipe(catchError(manejaError))
  .subscribe((data) => console.log("ajax:", data));

// Otra manera de manejar errors
obs$.subscribe((data) => console.log("data:", data));
// obs2$.subscribe((data) => console.log("data:", data));
obs$.pipe(catchError(manejaError)).subscribe({
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error en subs:", error),
  complete: () => console.log("complete"),
});
