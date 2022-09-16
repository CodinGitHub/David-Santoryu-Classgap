//CREACIÓN DE FECHA ACTUALIZADA:
/* InnerText o innerHTML, hace referencia a la parte del código vacía (donde escribes), del elemento que nombras. 
En este caso, fecha*/

const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString("es-ES", {
  year: "numeric",
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

/* CREAR DARK MODE - FORMA 1*/

let btn = document.getElementById("dark-mode");
let body = document.body; 
/* let iconos = document.getElementsByClassName("fa-solid");
 */

// Selecciono la luna y el sol
let moonIcon = document.querySelector('.moon-container'); 
let sunIcon = document.querySelector('.sun-container'); 

console.log(moonIcon)

 btn.addEventListener("click", () => {
  let val = body.classList.toggle("dark");
  
  //Cuando se presiona el boton se quita o oculta los iconos:
  if (val == true){
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  }else{
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
  localStorage.setItem("dark-mode", val);  // Modifica la info
 }); 
// LOCALSTORAGE: Guarda en caché la información de la página
 let valor = localStorage.getItem("dark-mode"); // Carga la info

 //Cuando se carga la página se quita o oculta los iconos:
if (valor === "true") {
  body.classList.add("dark");
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
} else {
  body.classList.remove("dark");
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
} 

// AGREGAR TAREAS

/* let idCount = 0;

let boton = document.querySelector("#boton");
let addTask = document.querySelector(".task-container");

boton.addEventListener("click", (event) => {
  event.preventDefault();
  idCount++;
  let userInput = document.querySelector("#userInput");
  addTask.innerHTML += `
  <li class="task-align">
    <input id="task${idCount}" type="checkbox" />
    <label for="task${idCount}">${userInput.value}</label>    
    <button id="${idCount}" class="button-delete-item fas fa-trash de"></button>
  </li>
  `;  */ //Reemplaza

/* ELIMINAR TEXTO ESCRITO EN EL INPUT TEXT */
/* userInput.value = "";
  updateValues();
});
 */
// AL HACER CLICK EN EL CHECKBOX Y TACHARSE LA TAREA, TE LA CUENTA COMO COMPLETADA:
/* taskList.addEventListener("click", (event) => {
  if (event.srcElement.nodeName == "INPUT") {
    updateValues();
  } else if (event.srcElement.nodeName == "BUTTON") {
    deleteTask(event.srcElement.id);
  }
}); */

/* ------------------ NO FUNCIONA: ------------------ */

// AL AÑADIR UNA TAREA, TE LA AGREGA COMO TAREA PENDIENTE:
/* let updateValues = () => {
  let element = taskList.querySelectorAll("div");
  let checkbox = taskList.querySelectorAll("input[type=checkbox]:checked");
  stats.innerHTML = `<h4 class="section-task-h4">Tareas pendientes: ${element.length}. Completadas: ${checkbox.length}</h4>`;
}; */

// FUNCION PARA ELIMINAR TAREA, PULSANDO EL BOTON DE LA PAPELERA
/* let deleteTask = (id) => {
  let taskDelete = document.getElementById("id");
  taskList.removeChild(taskDelete);
  updateValues();
}; */

/* -------------------------------------------------------------------------------- */
/* -----------> FORMA 2: AGREGAR TAREAS(SIN PONER ID AL INPUT HTML): <-----------*/
/* 1) Crear constante (apuntando al input de tipo texto) */
/* const input = document.querySelector("input[type=text]"); */
/* 2) Dentro de la función, creamos una variable newInput, para guardar aquellos
elementos (valores), que se escriben en el input: */
/* boton.addEventListener("click", (event) => {
  event.preventDefault();
  idCount++;
  let newInput = input.value; */
/* 3) Llamamos a ese newInput */
/*   addTask.innerHTML += `
  <li class="task-align">
    <input id="task${idCount}" type="checkbox" />
    <label for="task${idCount}">${newInput}</label>    
    <button class="button-delete-item fas fa-trash de"></button>
  </li>
  `;
}); */
