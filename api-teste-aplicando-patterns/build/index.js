"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var resolvers_1 = __importDefault(require("./resolvers"));
var database_1 = __importDefault(require("./database"));
var routes_1 = __importDefault(require("./routes"));
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: path_1.default.resolve(__dirname, './graphql/schema.graphql'),
    resolvers: resolvers_1.default,
    context: {
        db: database_1.default
    }
});
server.start();
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
routes_1.default(app);
app.route('/departamentos');
app.listen(9001, function () {
    console.log("Listening on 9001");
});
