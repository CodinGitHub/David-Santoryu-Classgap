let boton = document.querySelector('#boton');
let userInput = document.querySelector('#userInput')

boton.addEventListener('click', event=>{
    event.preventDefault();
    
    console.log(userInput.value);
});