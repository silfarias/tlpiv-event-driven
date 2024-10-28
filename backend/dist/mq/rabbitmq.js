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
exports.connectRabbitMQ = connectRabbitMQ;
exports.sendToQueue = sendToQueue;
exports.consumeFromQueue = consumeFromQueue;
const amqplib_1 = __importDefault(require("amqplib"));
const RABBITMQ_URL = 'amqp://localhost';
let connection;
let channel;
function connectRabbitMQ() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            connection = yield amqplib_1.default.connect(RABBITMQ_URL);
            channel = yield connection.createChannel();
            console.log('Conectado a RabbitMQ');
        }
        catch (error) {
            console.error('Error al conectar con RabbitMQ:', error);
        }
    });
}
;
function sendToQueue(queue, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield channel.assertQueue(queue, { durable: true });
            channel.sendToQueue(queue, Buffer.from(message));
            console.log(`Mensaje enviado a la cola ${queue}: ${message}`);
        }
        catch (error) {
            console.error('Error al enviar mensaje a RabbitMQ:', error);
        }
    });
}
;
function consumeFromQueue(queue, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield channel.assertQueue(queue, { durable: true });
            channel.consume(queue, (msg) => {
                if (msg !== null) {
                    callback(msg.content.toString());
                    channel.ack(msg);
                }
            });
            console.log(`Escuchando mensajes de la cola ${queue}`);
        }
        catch (error) {
            console.error('Error al consumir mensajes de RabbitMQ:', error);
        }
    });
}
;
//# sourceMappingURL=rabbitmq.js.map