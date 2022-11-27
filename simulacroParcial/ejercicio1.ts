/*Ejercicio 1:
Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc).*/

//Codigo por default del ejercicio
class Dog {
 public name: string;
 constructor(name: string) {
   this.name = name;
 }
 public makeSound(): void {
   console.log ('wuff wuff\n');
 }
}
class Cat {
 public name: string;
 constructor(name: string) {
   this.name = name;
 }
  public makeSound(): void {
   console.log('meow meow\n');
 }
}
let minino: Cat = new Cat('Pocky');
minino.makeSound(); // -> meow meow
let firulais: Dog = new Dog('Pocky');
firulais.makeSound(); // -> wuff wuff

// Codigo optimizado por mi

class Animal{
    protected nombre: string;
    protected sonidoAnimal: string;

    constructor(nombre: string, sonidoAnimal: string){
        this.nombre=nombre;
        this.sonidoAnimal= sonidoAnimal;
    }

    public makeSound(): void{
        console.log(this.sonidoAnimal);
    }
}

class Perro extends Animal{
    constructor (nombre: string, sonidoAnimal: string){
        super(nombre,sonidoAnimal);
    }
}
class Gato extends Animal{
    constructor (nombre: string, sonidoAnimal: string){
        super(nombre,sonidoAnimal);
    }
}
let minino2: Gato= new Gato("Pocky", 'meow meow\n');
let firulais2: Perro = new Perro('Pocky', 'wuff wuff\n');
minino2.makeSound(); // -> meow meow
firulais2.makeSound(); // -> wuff wuff