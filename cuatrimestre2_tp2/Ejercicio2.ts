class Televisor{
    protected canal: number;
    protected estaPrendido: boolean;

    constructor(canal:number, estaPrendido:boolean){
        this.canal= canal;
        this.estaPrendido= estaPrendido;
    }

    public getCanal():string{
        return "esta en el canal" + this.canal;
    }
    public setCanal(canal:number){
        this.canal=canal;
    }
}

class DvD{
    private estaPrendido: boolean;
    private cdPuesto: string;

    constructor(estaPrendido:boolean, cdPuesto:string){
        this.estaPrendido= estaPrendido;
        this.cdPuesto= cdPuesto;
    }

    public reproducir():string {
        return "el dvd esta reproduciendo" + this.cdPuesto;
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
console.log(televisor1.getCanal);