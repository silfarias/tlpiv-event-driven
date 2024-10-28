import amqp, { Channel, Connection } from 'amqplib';
import { envs } from '../config/envs';

const rabbitMqUrl = envs.RABBITMQ_URL; 

let connection: Connection;
let channel: Channel;

export async function connectRabbitMQ() {
    try {
        connection = await amqp.connect(rabbitMqUrl);
        channel = await connection.createChannel();
        console.log('Conectado a RabbitMQ');
    } catch (error) {
        console.error('Error al conectar con RabbitMQ:', error);
    }
};

export async function sendToQueue(queue: string, message: string) {
    try {
        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(message));
        console.log(`Mensaje enviado a la cola ${queue}: ${message}`);
    } catch (error) {
        console.error('Error al enviar mensaje a RabbitMQ:', error);
    }
};

export async function consumeFromQueue(queue: string, callback: (msg: any) => void) {
    try {
        await channel.assertQueue(queue, { durable: true });
        channel.consume(queue, (msg) => {
            if (msg !== null) {
                callback(msg.content.toString());
                channel.ack(msg);
            }
        });
        console.log(`Escuchando mensajes de la cola ${queue}`);
    } catch (error) {
        console.error('Error al consumir mensajes de RabbitMQ:', error);
    }
};