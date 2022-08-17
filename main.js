// let resultado1 = sumar(10, 15);
// let resultado2 = sumar(6, 7);

// function sumar(operando1, operando2){
//     console.log('Hola');
//     return operando1 + operando2;
// }

// console.log(resultado1);
// console.log(resultado2);

// function saludo(){
//     console.log('Hola David');
// }

//USO DE FUNCION FLECHA

setTimeout(()=>{
    //varias lineas de codigo
    console.log('Hola David');
}, 1000);


//FUNCIONES FLECHA CON NOMBRE:

let multiplicacion = (m1, m2) => {
    console.log( m1 * m2);
};

multiplicacion(6, 5);

// ARREGLOS

let fruta = 'manzana';
let array = [[1,2,3], 'manzana', 1, [true, false, true]];

// Metodos de los arreglos
let arreglo = ['uno', 'dos', 'tres']
arreglo.push('cuatro'); // agrega al final del arreglo
arreglo.pop(); // quitar del final del arreglo
arreglo.unshift('cero'); // agrega al inicio del arreglo
arreglo.shift(); // quita del inicio del arreglo

// FOREACH
let numeros = [1, 2, 3];

for(let i =0; i <numeros.length; i++){
    let numeros2 = numeros[i] * 10;
    console.log(numeros2);
}

// elemento = numeros[i]

numeros.forEach((elemento, indice, arreglo) => {
    let numeros3 = elemento*10;
    console.log(indice, numeros3, arreglo);
});