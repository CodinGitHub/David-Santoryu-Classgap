// AGREGAR ELEMENTOS AL DOM

// Seleccionar los elementos que intervienen
let agregarBtn = document.querySelector('#agregar');
let listaOrdenada = document.querySelector('ol');


//AGREGAR 
//1. Crear el elemento
let etiquetaLi = document.createElement('li')  

//2. Agregar un contenido
let contenidoLi = document.createTextNode('Estudiar CSS');

//3 Agregar contenido al elemento
etiquetaLi.appendChild(contenidoLi)

//4. Agregar etiqueta al DOM
// agregarBtn.addEventListener('click', ()=>{
//     let etiquetaLi = document.createElement('li') 
//     let userInput = document.querySelector('#userInput');
//     let contenidoLi = document.createTextNode(`${userInput.value}`);
//     etiquetaLi.appendChild(contenidoLi)
//     listaOrdenada.appendChild(etiquetaLi);
// });

console.log(etiquetaLi)
console.log(contenidoLi)

agregarBtn.addEventListener('click', ()=>{
    let userInput = document.querySelector('#userInput');
    listaOrdenada.innerHTML += `
    <li>
        <div class="tarea">
            <input type="checkbox">
            <p>${userInput.value}</p>
            <img src="./imagen/trash" alt="papelera">
        </div>
    </li>`; //Reemplaza
});