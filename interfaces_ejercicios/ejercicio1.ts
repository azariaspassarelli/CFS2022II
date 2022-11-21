/*Ejercicio 1
• Definir la interfaz Auto
• Implementar la clase AutoCarrera
• Implementar la clase AutoFamiliar*/

interface auto{
    modelo: string;
    tamaño: string;
    asientos: number;
    velocidadAlcanzadaKm: number;
    ruedas: number;
    estaEnscendido: boolean;

    acelerar(): void;
    frenar(): void;
    mostrarSiEstaEnscendido(): void;
}

class AutoDeCarreras implements auto{
    modelo= "Formula 1";
    tamaño= "5 metros y medio de largo"
    asientos= 1;
    velocidadAlcanzadaKm= 378;
    ruedas= 4;
    estaEnscendido= true;

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

class AutoFamiliar implements auto{
    modelo= "Chevrolet Spin";
    tamaño= "4.36 metros de largo";
    asientos= 7;
    velocidadAlcanzadaKm= 178;
    ruedas= 4;
    estaEnscendido= true;

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