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
    return Televisor;
}());
var DvD = /** @class */ (function () {
    function DvD(estaPrendido, cdPuesto) {
        this.estaPrendido = estaPrendido;
        this.cdPuesto = cdPuesto;
    }
    DvD.prototype.reproducir = function () {
        return "el dvd esta reproduciendo" + this.cdPuesto;
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
console.log(televisor1.getCanal());
televisor1.setCanal(44);
console.log(televisor1.getCanal());
