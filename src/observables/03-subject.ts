import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("next", value),
  error: (error: any) => console.warn("error", error),
  complete: () => console.log("completado"),
};

const intervalo$ = new Observable<number>((subscribe) => {
  const intervalId = setInterval(() => subscribe.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalId);
    console.log("intervalo destruido");
  };
});

// const subscription = intervalo$.subscribe((rnd) => console.log("subs", rnd));
// const subscription2 = intervalo$.subscribe((rnd) => console.log("subs2", rnd));

/**
 * Cuando la data es producida por el observable en sí mismo,
 * es considerado un Cold Observable, pero cuando la data es producida
 * duera del observable, es llamado Hot Observable
 */

/**
 * 1- Casteo múltiple, muchas subscripciones van a estar sujetas
 * al mismo subject u observable y sirve para distribuir la misma informacion
 * a todos los lugares donde se hayan subscrito
 *
 * 2- También es un observer
 * 3- Next, error y complete
 * 4- Ayuda transformar un Cold Observable a un Hot Observable
 */
const subject$ = new Subject();

const intervalSubjectSubscription = intervalo$.subscribe(subject$);

// const subscription = subject$.subscribe((rnd) => console.log("subs", rnd));
// const subscription2 = subject$.subscribe((rnd) => console.log("subs2", rnd));

const subscription = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();

  intervalSubjectSubscription.unsubscribe();
}, 3500);
