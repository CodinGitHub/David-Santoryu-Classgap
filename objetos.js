let dato = 1;
let arreglo = [1, 'hola', true];

let user = {
    name: 'David',
    edad: 38,
    developer: true,
    'es miembro': false
};

//METODOS DE OBJETOS

//Borrar
delete user.name;

//Consultar si existe un key/propiedad
console.log(Object.keys(user));
console.log(Object.values(user));

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

console.log(user1)
console.log(user2)

