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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const rabbitmq_1 = require("./mq/rabbitmq");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor({ port, routes }) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.routes = routes;
        this.middlewares();
        this.router();
    }
    router() {
        this.app.use('/', this.routes);
        this.app.post('/send', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { message } = req.body;
            try {
                yield (0, rabbitmq_1.sendToQueue)('mi_cola_rabbit', message);
                res.status(200).send('Mensaje enviado a RabbitMQ');
            }
            catch (error) {
                console.error('Error al enviar mensaje:', error);
                res.status(500).send('Error al enviar mensaje');
            }
        }));
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
    }
    connectRabbitMQ() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, rabbitmq_1.connectRabbitMQ)();
            (0, rabbitmq_1.consumeFromQueue)('mi_cola_rabbit', (msg) => {
                console.log(`Mensaje recibido: ${msg}`);
            });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }
}
exports.Server = Server;
;
//# sourceMappingURL=server.js.map