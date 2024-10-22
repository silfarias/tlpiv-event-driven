import { EventEmitter } from "events";

export class EventHandlers {
    private eventEmitter: EventEmitter;
    constructor(eventEmitter: EventEmitter){
        this.eventEmitter = eventEmitter;
    }

    // metodo que escuchará todos los eventos en lo que respecta el acceso a la ruta
    registerRouteEventHandlers() {
        console.log('Events FiredUp')
        this.eventEmitter.on('routeAccess', (route) => {
            try{
                this.anounceRouteAccess(route);
                this.upgradeSecurity(route)
            }
            catch(error){
                console.log('An error occured while perform Route accessed actions')
            }
        });
    };

    private anounceRouteAccess( route: string){
        console.log(`${route} has been accessed`)
    };

    private upgradeSecurity(route: string){
        console.log(`Locking all other routes and initiating higher security measures on ${route} route`)
    };
};