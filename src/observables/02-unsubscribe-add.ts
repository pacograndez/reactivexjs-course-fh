import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("next", value),
  error: (error: any) => console.warn("error", error),
  complete: () => console.log("completado"),
};

const interfvalo$ = new Observable<number>((subscriber) => {
  // Crear un contador 1,2,3,4,5...
  let count = 0;
  const interval = setInterval(() => {
    //cada segundo
    count++;
    subscriber.next(count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("intervalo destruido");
  };
});

// const subscription = interfvalo$.subscribe((num) => console.log("Num", num));
const subscription = interfvalo$.subscribe(observer);
const subscription2 = interfvalo$.subscribe(observer);
const subscription3 = interfvalo$.subscribe(observer);

//Encadenar subscripciones a la subscription original
subscription.add(subscription2);
subscription.add(subscription3);

setTimeout(() => {
  //entra al return del observable y destruye el intervalo
  subscription.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  console.log("completado timeout");
}, 6000);

// El Complete del Subscriber no es lo mismo al Unsubscriber de la Subscription
