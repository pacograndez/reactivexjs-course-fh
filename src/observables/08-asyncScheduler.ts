import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

//SetTimeout

const saludar = () => console.log("Hola mudno");

asyncScheduler.schedule(saludar, 2000);

const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

asyncScheduler.schedule(saludar2, 2000, "Paco");

//SetInterval

const subs = asyncScheduler.schedule(
  function (state: number) {
    console.log("state", state);

    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
