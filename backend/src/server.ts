import express, { Application, Router, Request, Response } from 'express';
import { connectRabbitMQ, sendToQueue, consumeFromQueue } from './services/rabbitmq.service';
import cors from 'cors';
import morgan from 'morgan';

interface IServer {
    listen(): void;
}

interface IServerConfig {
    port: number;
    routes: Router;
}

export class Server implements IServer {
    private readonly app: Application = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor({ port, routes }: IServerConfig) {
        this.port = port;
        this.routes = routes;
        this.middlewares();
        this.router();
    }

    private router(): void {
        this.app.use('/', this.routes);
        this.app.post('/send', async (req: Request, res: Response) => {
            const { message } = req.body;
            try {
                await sendToQueue('cola-rabbit', message);
                res.status(200).send('Mensaje enviado a RabbitMQ');
            } catch (error) {
                console.error('Error al enviar mensaje:', error);
                res.status(500).send('Error al enviar mensaje');
            }
        });
    }

    private middlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(morgan('dev'));
    }

    public async connectRabbitMQ() {
        await connectRabbitMQ();
        /*
        consumeFromQueue('cola-rabbit', (msg: string) => {
            console.log(`Mensaje recibido: ${msg}`);
        });*/
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }
};