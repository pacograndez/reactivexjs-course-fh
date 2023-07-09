/**
 * Concat (Function): es una función que recibe observables como
 * argumento, con estos concat crea un nuevo observable para ser subscrito
 */

import { concat, endWith, interval, of, startWith, take } from "rxjs";
import { ajax } from "rxjs/ajax";

const interval$ = interval(1000);

concat(interval$.pipe(take(3)), interval$.pipe(take(3)), of(1)).subscribe(
  console.log
);
