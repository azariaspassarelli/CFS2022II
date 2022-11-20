/*Crear una clase -con al menos 2 métodos y 2 atributos-
Crear un ejemplo de composición
Crear una relación de herencia
Crear un objeto*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Televisor = /** @class */ (function () {
    function Televisor(canal, estaPrendido) {
        this.canal = canal;
        this.estaPrendido = estaPrendido;
    }
    Televisor.prototype.getCanal = function () {
        return "esta en el canal " + this.canal;
    };
    Televisor.prototype.setCanal = function (canal) {
        this.canal = canal;
    };
    Televisor.prototype.mostrarCanal = function () {
        console.log("Está en el canal " + this.canal);
    };
    Televisor.prototype.mostrarSiEstáPrendidaLaTele = function () {
        if (this.estaPrendido = true) {
            console.log("El Televisor está prendido");
        }
        else {
            console.log("El Televisor está apagado");
        }
    };
    return Televisor;
}());
var DvD = /** @class */ (function () {
    function DvD(estaPrendido, cdPuesto) {
        this.estaPrendido = estaPrendido;
        this.cdPuesto = cdPuesto;
    }
    DvD.prototype.reproducir = function () {
        console.log("el dvd esta reproduciendo " + this.cdPuesto);
    };
    DvD.prototype.mostrarSiEstáPrendidoElDvd = function () {
        if (this.estaPrendido = true) {
            console.log("El DVD está prendido");
        }
        else {
            console.log("El DVD está apagado");
        }
    };
    return DvD;
}());
var TelevisorConDVD = /** @class */ (function (_super) {
    __extends(TelevisorConDVD, _super);
    function TelevisorConDVD(dvd, canal, estaPrendido) {
        var _this = _super.call(this, canal, estaPrendido) || this;
        _this.dvd = dvd;
        return _this;
    }
    return TelevisorConDVD;
}(Televisor));
var dvd1 = new DvD(true, "Las Cronicas de Narnia");
var televisor1 = new TelevisorConDVD(dvd1, 50, true);
dvd1.mostrarSiEstáPrendidoElDvd();
televisor1.mostrarSiEstáPrendidaLaTele();
televisor1.mostrarCanal();
televisor1.setCanal(44);
televisor1.mostrarCanal();
