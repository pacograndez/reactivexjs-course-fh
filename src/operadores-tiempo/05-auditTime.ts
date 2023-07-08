/**
 * AuditTime: emite el último valor que ha sido emitido por el observable
 * dentro de un periodo de tiempo determinado
 */

import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => x),
    tap((value) => console.log("tap:", value)),
    auditTime(5000)
  )
  .subscribe(console.log);
