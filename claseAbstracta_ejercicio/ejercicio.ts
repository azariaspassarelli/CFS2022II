/*• Iniciar proyecto NPM
• Implementar las siguientes clases con las 
variables y métodos que crea necesarios:• AutoCiudad
• AutoDeportivo
• Camioneta
• Abstraer elementos en común entre dichas 
clases → pasarlos a una clase abstracta, y 
que las tres clases extiendan de ella*/

abstract class Auto{
    protected ruedas: number = 4;
    abstract modelo: string;
    abstract asientos: number;
    abstract puertas: number;
    abstract velocidadAlcanzadaKm: number;
    abstract estaEnscendido: boolean;

    public acelerar(): void {
        console.log("El auto está acelerando");
    }
    public frenar(): void {
        console.log("El auto está frenando");
    }
    public mostrarSiEstaEnscendido(): void {
        if(this.estaEnscendido= true){
            console.log("El auto está enscendido");
        }else{
            console.log("El auto está apagado");
        }
    }
}

class AutoCiudad extends Auto{
    modelo= "Chevrolet Spin";
    tamaño= "4.36 metros de largo";
    asientos= 7;
    puertas= 5;
    velocidadAlcanzadaKm= 178;
    estaEnscendido= true;
}

class AutoDeportivo extends Auto{
    modelo= "Nissan GTR";
    tamaño= "4.71 metros de largo";
    asientos= 4;
    puertas= 5;
    velocidadAlcanzadaKm= 310;
    estaEnscendido= true;
}
class Camioneta extends Auto{
    modelo= "Toyota Hilux";
    tamaño= "5.33 metros de largo";
    asientos= 4;
    puertas= 4;
    velocidadAlcanzadaKm= 185;
    estaEnscendido= true;
}