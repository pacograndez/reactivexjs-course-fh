import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("next", value),
  error: (error: any) => console.warn("error", error),
  complete: () => console.log("completado"),
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>((subscriber) => {
  subscriber.next("Hola");
  subscriber.next("Mundo");

  subscriber.next("Hola");
  subscriber.next("Mundo");

  //Forzar error
  const a = undefined;
  a.nombre = "Paco";

  subscriber.complete();

  subscriber.next("Hola luego del complete");
  subscriber.next("Mundo, luego del complete");
});

// obs$.subscribe(res => console.log(res));

// Tres formas de llamar a un Observable
obs$.subscribe(console.log);

obs$.subscribe(
  (valor) => console.log("next: ", valor),
  (error) => console.warn("error: ", error),
  () => console.info("Completado")
);

obs$.subscribe(observer);
