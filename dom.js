let elementoTitulo = document.getElementById('dos');
// let elementoTitulo2 = document.getElementsByClassName('encabezado');
// let elementoTitulo3 = document.getElementsByTagName('h2');

// let elementoTitulo4 = document.querySelector('#uno');
// let elementoTitulo5 = document.querySelectorAll('.encabezado');
// let elementoTitulo6 = document.querySelectorAll('h2');
// elementoTitulo6 = [...elementoTitulo6];

let btn = document.getElementById('btn')

let body = document.getElementsByTagName('body')
console.log(body)


//Cambiar el color del texto al presional el boton "Cambiar Color"

let titulos = document.getElementsByClassName('encabezado');
titulos = [...titulos]

btn.addEventListener('click', ()=>{
    body[0].classList.toggle('darkmode');
    titulos.forEach(element => {
        element.classList.toggle('tituloBlanco');
    });
});

// function cambiarColor(){
//     console.log('Hola')
//     elementoTitulo.style.color = 'red'
// }


