"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DepartamentoRepository_1 = __importDefault(require("../repositories/DepartamentoRepository"));
var departamentoRepository = new DepartamentoRepository_1.default();
var DepartamentoResolver = {
    Query: {
        departamentos: function () { return departamentoRepository.list({}); },
        departamento: function (_, _a) {
            var id = _a.id;
            return departamentoRepository.getById(parseInt(id, 10));
        },
    },
    Mutation: {
        createDepartamento: function (_, params) { return departamentoRepository.create(params); },
    }
};
exports.default = DepartamentoResolver;
