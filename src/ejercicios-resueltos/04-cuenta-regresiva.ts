import { interval, map, take } from "rxjs";

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {
  const inicio = 7;
  const countdown$ = interval(700)
    .pipe
    // Usar los operadores necesarios
    // para realizar la cuenta regresiva
    ();

  // No tocar esta línea ==================
  // countdown$.subscribe(console.log); // =
  // ======================================
})();

(() => {
  const inicio = 7;
  const countdown$ = interval(700).pipe(
    // 0..1..2..3..4..5..
    map((i) => inicio - i),
    take(inicio + 1)
  );

  countdown$.subscribe(console.log);
})();
