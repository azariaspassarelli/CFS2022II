/*Crear una clase -con al menos 2 métodos y 2 atributos-
Crear un ejemplo de composición
Crear una relación de herencia
Crear un objeto*/

class Televisor{
    protected canal: number;
    protected estaPrendido: boolean;

    constructor(canal:number, estaPrendido:boolean){
        this.canal= canal;
        this.estaPrendido= estaPrendido;
    }

    public getCanal():string{
        return "esta en el canal " + this.canal;
    }
    public setCanal(canal:number){
        this.canal=canal;
    }
    public mostrarCanal (){
        console.log("Está en el canal " + this.canal);
    }
    public mostrarSiEstáPrendidaLaTele(){
        if(this.estaPrendido = true){
            console.log("El Televisor está prendido");
        }else{
            console.log("El Televisor está apagado");
        }
    }
}

class DvD{
    private estaPrendido: boolean;
    private cdPuesto: string;

    constructor(estaPrendido:boolean, cdPuesto:string){
        this.estaPrendido= estaPrendido;
        this.cdPuesto= cdPuesto;
    }

    public reproducir(){
        console.log("el dvd esta reproduciendo " + this.cdPuesto);
    }
    public mostrarSiEstáPrendidoElDvd(){
        if(this.estaPrendido = true){
            console.log("El DVD está prendido");
        }else{
            console.log("El DVD está apagado");
        }
    }
}

class TelevisorConDVD extends Televisor{
    private dvd: DvD;
    constructor(dvd:DvD, canal:number, estaPrendido:boolean){
        super(canal,estaPrendido);
        this.dvd= dvd;
    }
}

let dvd1: DvD = new DvD(true,"Las Cronicas de Narnia");
let televisor1: TelevisorConDVD = new TelevisorConDVD(dvd1,50,true);
dvd1.mostrarSiEstáPrendidoElDvd();
televisor1.mostrarSiEstáPrendidaLaTele();
televisor1.mostrarCanal();
televisor1.setCanal(44);
televisor1.mostrarCanal();