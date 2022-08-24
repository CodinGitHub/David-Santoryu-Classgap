let dato = 1;
let arreglo = [1, 'hola', true];

let user = {
    name: 'David',
    edad: 38,
    developer: true,
    'es miembro': false
};
// console.log(user)

// Para consultar si existe una propiedad en un objeto
// console.log(user.hasOwnProperty('email'))

// METODOS DE OBJETOS

//Borrar
delete user.name;

//Consultar si existe un key/propiedad
// console.log(Object.keys(user));
// console.log(Object.values(user));

//CLASES
class Users{
    constructor(name, altura, developer){
        this.name = name;
        this.altura = altura;
        this.developer = developer;
    }
}

let user1 = new Users('Roberto', 25, true);
let user2 = new Users('Maria', 31, false);

/* ------------------------- */

class Product{
    constructor(img, producName, price, quantity){
        this.img = img;
        this.producName = producName;
        this.price = price;
        this.quantity = quantity;
    }
    subtotal(){
        return this.price * this.quantity;
    }
}

let producto1 = new Product('img/product1.jpg', 'B con logo', 18, 2);
let producto2 = new Product('img/product2.jpg', 'B', 26, 3);
let producto3 = new Product('img/product2.jpg', 'B', 10, 1);

//AGREGAR PRODUCTOS AL CARRO

let cart = [producto1, producto2, producto3];

// let subtotal = 0;
// for(let i=0; i<cart.length; i++){
//     subtotal = subtotal + cart[i].subtotal()
// }

// console.log(subtotal)

// forEach

// let subtotal = 0
// cart.forEach( product=>{
//     subtotal = subtotal + product.subtotal()
// } );

// console.log(subtotal)

// MAP - Siempre genera un arreglo, con el resultado de la funcion como elementos
let subtotal = 0
let resultado = cart.map(product => {
    // return subtotal = subtotal + product.subtotal()
    return product.subtotal()*2
})

console.log(resultado)