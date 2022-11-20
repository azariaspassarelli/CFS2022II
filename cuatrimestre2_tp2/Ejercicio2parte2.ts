/*Crear una interfaz - implementarla en una clase-
Crear una clase Abstracta*/

interface libro{
    hojas: number;
    paginaActual: number;
    titulo: string;

    mostrarPaginaActual(): void;
    setPagina(paginaNueva: number);
}

class LibrodeMatematicas implements libro{
    hojas= 100;
    paginaActual= 35;
    titulo= "Matematicas y Angulos";

    public mostrarPaginaActual(): void{
        console.log("Estás en la pagina " + this.paginaActual);
    }
    public setPagina(paginaNueva: number){
        this.paginaActual = paginaNueva;
    }
}

abstract class Libro{
    abstract hojas: number;
    abstract paginaActual: number;
    abstract titulo: string;

    abstract mostrarPaginaActual(): void;
    public setPagina(paginaNueva: number){
        this.paginaActual = paginaNueva;
    }
}

class libroBiblia extends Libro{
    hojas= 1500;
    paginaActual= 287;
    titulo= "Biblia";

    mostrarPaginaActual(): void{
        console.log("Estás en la pagina " + this.paginaActual);
    }
}