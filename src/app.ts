import { envs } from './config/envs';
import { connect } from './database/dbConnect';
import { routes } from './routes/index.routes';
import { Server } from './server';


(async () => {
    const server = new Server({
        port: envs.port,
        routes: routes
    });
    await connect();
    server.listen();
})();