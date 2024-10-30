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
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = require("./config/envs");
const dbConnect_1 = require("./database/dbConnect");
const index_routes_1 = require("./routes/index.routes");
const server_1 = require("./server");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const server = new server_1.Server({
        port: envs_1.envs.port,
        routes: index_routes_1.routes
    });
    const db = new dbConnect_1.DbConnect({
        mongoUrl: envs_1.envs.MONGO_URL
    });
    yield db.connect();
    yield server.connectRabbitMQ();
    server.listen();
}))();
//# sourceMappingURL=app.js.map