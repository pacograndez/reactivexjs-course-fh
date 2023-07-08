import { filter, from, range } from "rxjs";

range(1, 10)
  .pipe(filter((value) => value % 2 === 1))
  .subscribe(console.log);

range(20, 30)
  .pipe(
    filter((value, index) => {
      console.log("index", index);
      return value % 2 === 1;
    })
  )
  .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  { tipo: "heroe", nombre: "Batman" },
  { tipo: "heroe", nombre: "Robin" },
  { tipo: "villano", nombre: "Joker" },
];

const obs$ = from<Personaje[]>(personajes);

obs$
  .pipe(filter((personaje: Personaje) => personaje.tipo === "heroe"))
  .subscribe(console.log);
