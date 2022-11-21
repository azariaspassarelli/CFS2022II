/*Ejercicio 3:
Utilizar lo aprendido y crear una Clase, la cual tenga metedos y atributos,
una instancia de dicha clase, y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede.*/

class InstrumentoConCuerdas{
    protected instrumento: string;
    protected cuerdas: number;
    protected rol: string;

    public constructor(instrumento: string, cuerdas: number, rol: string){
        this.instrumento= instrumento;
        this.cuerdas= cuerdas;
        this.rol= rol;
    }

    public tocarInstrumento(): void{
        console.log("El instrumento esta siendo tocado");
    }
    public setInstrumento(instrumentoNuevo: string){
        this.instrumento= instrumentoNuevo;
    }
}

let bajo: InstrumentoConCuerdas= new InstrumentoConCuerdas("bajo",4,"Acompañamiento");

class Guitarras extends InstrumentoConCuerdas{
    private tipo: string;

    public constructor(instrumento: string, cuerdas: number, rol: string, tipo: string){
        super(instrumento,cuerdas,rol);
        this.tipo= tipo;
    }
}