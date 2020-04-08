"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var DepartamentoRepository = /** @class */ (function () {
    function DepartamentoRepository() {
    }
    DepartamentoRepository.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, database_1.default.select()
                        .from('departamentos')
                        .where('id', id)
                        .first()];
            });
        });
    };
    DepartamentoRepository.prototype.list = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, currentPage, _b, pageSize, _c, sorter, status, txt, offset;
            return __generator(this, function (_d) {
                _a = params.currentPage, currentPage = _a === void 0 ? 1 : _a, _b = params.pageSize, pageSize = _b === void 0 ? 10 : _b, _c = params.sorter, sorter = _c === void 0 ? '' : _c, status = params.status, txt = params.txt;
                offset = pageSize * Math.max(0, currentPage) - pageSize;
                return [2 /*return*/, database_1.default.select()
                        .from('departamentos')
                        .modify(function (queryBuilder) {
                        queryBuilder.offset(offset);
                        if (typeof sorter !== 'undefined' && sorter !== null && sorter !== '') {
                            queryBuilder.orderBy(sorter.split('_')[0], sorter.split('_')[1]);
                        }
                        if (typeof status !== 'undefined' && status !== null) {
                            queryBuilder.where('status', status);
                        }
                        if (typeof txt !== 'undefined' && txt !== null && txt !== '') {
                            queryBuilder.where('nome', 'like', "%" + txt + "%");
                        }
                    })
                        .limit(pageSize)];
            });
        });
    };
    DepartamentoRepository.prototype.getTotals = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var txt, queryCallback, _a, ativos, desativados, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        txt = params.txt;
                        queryCallback = function (status) { return function (queryBuilder) {
                            if (typeof txt !== 'undefined' && txt !== null && txt !== '') {
                                queryBuilder.where('nome', 'like', "%" + txt + " %");
                            }
                            queryBuilder.where('status', status);
                        }; };
                        return [4 /*yield*/, Promise.all([
                                database_1.default.count({ count: '*' })
                                    .from('departamentos')
                                    .modify(queryCallback(true))
                                    .first()
                                    .then(function (result) {
                                    if (result === void 0) { result = {}; }
                                    return result.count;
                                }),
                                database_1.default.count({ count: '*' })
                                    .from('departamentos')
                                    .modify(queryCallback(false))
                                    .first()
                                    .then(function (result) {
                                    if (result === void 0) { result = {}; }
                                    return result.count;
                                }),
                                database_1.default.count({ count: '*' })
                                    .from('departamentos')
                                    .first()
                                    .then(function (result) {
                                    if (result === void 0) { result = {}; }
                                    return result.count;
                                })
                            ])];
                    case 1:
                        _a = _b.sent(), ativos = _a[0], desativados = _a[1], total = _a[2];
                        return [2 /*return*/, { ativos: ativos, desativados: desativados, total: total }];
                }
            });
        });
    };
    DepartamentoRepository.prototype.create = function (departamento) {
        return __awaiter(this, void 0, void 0, function () {
            var nome, status;
            var _this = this;
            return __generator(this, function (_a) {
                nome = departamento.nome, status = departamento.status;
                return [2 /*return*/, database_1.default.insert({ nome: nome, status: status })
                        .into('departamentos')
                        .then(function (ids) {
                        console.log(ids);
                        return _this.getById(ids[0]);
                    })];
            });
        });
    };
    DepartamentoRepository.prototype.update = function (id, departamento) {
        return __awaiter(this, void 0, void 0, function () {
            var nome, status;
            var _this = this;
            return __generator(this, function (_a) {
                nome = departamento.nome, status = departamento.status;
                return [2 /*return*/, database_1.default.table('departamentos')
                        .where('id', id)
                        .modify(function (queryBuilder) {
                        if (typeof nome !== 'undefined' && nome !== null) {
                            queryBuilder.update('nome', nome);
                        }
                        if (typeof status !== 'undefined' && status !== null) {
                            queryBuilder.update('status', status);
                        }
                    })
                        .then(function (updatedRows) {
                        if (updatedRows.length === 0) {
                            throw new Error('Departamento not found!');
                        }
                        return updatedRows;
                    }).then(function () {
                        return _this.getById(id);
                    })];
            });
        });
    };
    DepartamentoRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, database_1.default.table('departamentos').where('id', id).del()];
            });
        });
    };
    return DepartamentoRepository;
}());
exports.default = DepartamentoRepository;
