"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DepartamentoController_1 = __importDefault(require("../controllers/DepartamentoController"));
var departamentoController = new DepartamentoController_1.default();
exports.default = (function (app) {
    app.get('/departamentos', departamentoController.list);
    app.get('/departamentos/totals', departamentoController.getTotals);
    app.get('/departamentos/:id', departamentoController.getById);
    app.post('/departamentos', departamentoController.create);
    app.put('/departamentos/:id', departamentoController.update);
    app.delete('/departamentos/:id', departamentoController.delete);
});
