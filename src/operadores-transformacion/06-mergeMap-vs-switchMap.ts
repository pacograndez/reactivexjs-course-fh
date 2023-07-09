/**
 * SwitchMap vs MergeMap: SwitchMap solo mantiene una subscripcion
 * interna activa , mientras que el mergeMap mantiene todas las
 * que se necesite
 */

import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

click$.pipe(mergeMap(() => interval$)).subscribe(console.log);

click$.pipe(switchMap(() => interval$)).subscribe(console.log);
