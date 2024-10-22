import { Request, Response } from 'express'
import { EventHandlers } from '../events/event'
import { MyService } from '../services/event.service'
import { EventEmitter } from 'events'

const eventEmitter = new EventEmitter();
const eventHandler = new EventHandlers(eventEmitter)
const myService = new MyService(eventEmitter)

eventHandler.registerRouteEventHandlers()

export const eventCtrl = (req: Request, res: Response): any => {
    try {
        myService.accessRoute('start')
        return res.status(200).json({"message" : "Welcome to EDA"})
    } catch (error) {
        return res.status(500).json({"message" : "An Error Occured on The Server"})   
    }
}