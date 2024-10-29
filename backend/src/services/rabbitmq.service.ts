import amqp, { Channel, Connection, Message } from 'amqplib';
import { envs } from '../config/envs';

const rabbitMqUrl = envs.RABBITMQ_URL;

let connection: Connection;
let channel: Channel;


// conectamos a rabbitmq y creamos un canal de comunicación
export async function connectRabbitMQ(): Promise<void> {
    try {
        connection = await amqp.connect(rabbitMqUrl);
        channel = await connection.createChannel();
        console.log('Conectado a RabbitMQ');
    } catch (error) {
        console.error('Error al conectar con RabbitMQ:', error);
        throw error;
    }
}

export async function sendToQueue(queue: string, message: string): Promise<void> {
    if (!channel) {
        throw new Error("El canal de RabbitMQ no está inicializado");
    }

    try {
        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(message));
        console.log(`Mensaje enviado a la cola ${queue}: ${message}`);
    } catch (error) {
        console.error('Error al enviar mensaje a RabbitMQ:', error);
        throw error;
    }
}

export async function consumeFromQueue(queue: string, callback: (msg: string) => void): Promise<void> {
    if (!channel) {
        throw new Error("El canal de RabbitMQ no está inicializado");
    }

    try {
        await channel.assertQueue(queue, { durable: true });
        channel.consume(queue, (msg: Message | null) => {
            if (msg) {
                callback(msg.content.toString());
                channel.ack(msg);
            }
        });
        console.log(`Escuchando mensajes de la cola ${queue}`);
    } catch (error) {
        console.error('Error al consumir mensajes de RabbitMQ:', error);
        throw error;
    }
};