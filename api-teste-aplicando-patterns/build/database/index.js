"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var db = knex_1.default({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'oton',
        password: 'zeta@odin@145',
        database: 'isp_dev'
    },
});
exports.default = db;
