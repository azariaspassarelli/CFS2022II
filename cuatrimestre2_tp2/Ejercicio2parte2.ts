interface televisorInterface{
    canal: number;
    estaPrendido: boolean;

    setCanal(canal:number):void;
}

class Televisor2 implements televisorInterface{
    canal= 45;
    estaPrendido= true;

    setCanal(canal:number) {
        this.canal= canal;
    }
}