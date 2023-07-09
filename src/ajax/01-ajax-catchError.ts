import { catchError, map, of, pluck } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (res: Response) => {
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res;
};

const ajaxErrores = (error: AjaxError) => {
  console.warn("error en:", error);
  return of([]);
};

const fetchPromise = fetch(url);

// fetchPromise
//   .then((res) => res.json())
//   .then((data) => console.log("data:", data))
//   .catch((error) => console.warn("error en usuario:", error));

// fetchPromise
//   .then(manejaErrores)
//   .then((res) => res.json())
//   .then((data) => console.log("data:", data))
//   .catch((error) => console.warn("error en usuario:", error));

ajax(url)
  .pipe(map((res) => res.response))
  .subscribe(console.log);

ajax(url)
  .pipe(
    pluck("response"),
    catchError((error) => {
      console.warn("error en:", error);
      return of([]);
    })
  )
  .subscribe((users) => console.log("usuarios:", users));

ajax(url)
  .pipe(pluck("response"), catchError(ajaxErrores))
  .subscribe((users) => console.log("usuarios:", users));
