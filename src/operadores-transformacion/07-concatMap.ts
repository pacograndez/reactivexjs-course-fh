/**
 * ConcatMap: sirve para concadenar los observables resultantes
 * que pueden fluir a traves de ese operador
 */

import { concatMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(500).pipe(take(3));

click$.pipe(concatMap(() => interval$)).subscribe(console.log);
