"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DepartamentoModel = /** @class */ (function () {
    function DepartamentoModel(departamentoModel) {
        this.departamentoModel = departamentoModel;
    }
    Object.defineProperty(DepartamentoModel.prototype, "id", {
        get: function () {
            return this.departamentoModel.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepartamentoModel.prototype, "nome", {
        get: function () {
            return this.departamentoModel.nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepartamentoModel.prototype, "status", {
        get: function () {
            return this.departamentoModel.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepartamentoModel.prototype, "createdAt", {
        get: function () {
            return this.departamentoModel.createdAt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepartamentoModel.prototype, "updatedAt", {
        get: function () {
            return this.departamentoModel.updatedAt;
        },
        enumerable: true,
        configurable: true
    });
    return DepartamentoModel;
}());
Object.seal(DepartamentoModel);
exports.default = DepartamentoModel;
