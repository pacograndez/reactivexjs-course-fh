import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ultricies orci. Sed blandit egestas dolor, vel placerat quam facilisis vel. Nulla facilisi. Etiam scelerisque mauris ut ornare vestibulum. Nam aliquam, nisi vel volutpat molestie, metus tellus egestas magna, vel tempor tortor felis vitae dolor. Etiam sit amet leo massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam fermentum ac tortor at ultricies. Proin tincidunt cursus diam, mattis scelerisque orci pulvinar in. Donec in tellus tempus, pharetra nisi ut, porta augue.
<br/><br/>
Fusce ut suscipit eros, ut laoreet tellus. Donec tincidunt ante quis suscipit rutrum. Nullam pretium, nibh ac lobortis lacinia, tortor risus hendrerit sapien, et malesuada mauris lorem quis mauris. Nam placerat nunc quis est sagittis mollis. Quisque tempus ultricies auctor. Nullam in sapien metus. Mauris interdum pulvinar massa, quis blandit eros rhoncus at. Sed fermentum fermentum suscipit. Nam ullamcorper sollicitudin enim. Donec vehicula ornare nisl. Vestibulum vitae fermentum metus. Aliquam erat volutpat. Sed venenatis tortor vitae placerat semper. Donec justo enim, pellentesque id turpis a, pulvinar luctus magna. Suspendisse ligula elit, scelerisque eget neque in, euismod rutrum libero.
<br/><br/>
Phasellus ligula tortor, viverra nec massa ac, mollis interdum purus. Mauris tincidunt lacinia risus, id pulvinar leo porta et. Mauris sed tempus leo, ut aliquet erat. Mauris eget sodales dui. Integer sit amet interdum erat. Sed condimentum vehicula neque. Aenean dolor felis, gravida egestas lectus eget, hendrerit congue elit. Fusce laoreet nisi et elit mattis, non tincidunt ex egestas. Quisque tristique nisi id sapien elementum consectetur. Maecenas porttitor nunc leo, a convallis diam posuere non. Sed nisi dolor, interdum eget nibh at, ornare fermentum sapien. Quisque commodo efficitur augue, a rhoncus mi tristique a.
<br/><br/>
Phasellus id nibh malesuada, cursus magna et, auctor arcu. Praesent vulputate lacus vitae felis dapibus blandit. Maecenas velit ante, tempus eget libero nec, gravida semper libero. Donec blandit metus ut pellentesque tempor. Vestibulum id sagittis mauris. Cras accumsan leo vulputate, viverra nibh eget, ultrices ante. Quisque placerat cursus massa. Aenean quam tellus, accumsan et auctor quis, pellentesque in neque. Nulla facilisi.
<br/><br/>
Quisque vitae sollicitudin magna. Suspendisse sollicitudin, erat quis venenatis pulvinar, ligula risus scelerisque eros, in pretium libero neque quis quam. Phasellus vulputate massa id felis tincidunt consequat. Maecenas arcu ex, vehicula sed condimentum ac, pharetra ut ex. Nam finibus sem ac tortor varius lacinia. Maecenas in urna eget lorem egestas lobortis sit amet id enim. Vestibulum ultrices erat nec dolor viverra congue. Sed ut libero egestas, finibus arcu non, varius justo. Praesent posuere, ipsum sed porttitor accumsan, ante est laoreet turpis, porttitor venenatis nisi magna vel dui. Sed tempus risus sit amet magna sagittis imperdiet. Aliquam mi enim, aliquet eleifend ante et, cursus dignissim justo. Nam faucibus sem eu sem auctor aliquet. Curabitur varius pulvinar mi, sed tristique sem volutpat ac. Nunc porttitor maximus ante ut egestas.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// Funcion que haga el calculo
const calcularPorcetnajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  map((event) => calcularPorcetnajeScroll(event)),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
