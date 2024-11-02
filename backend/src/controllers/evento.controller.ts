import { EventoService, IEvento } from "../services/evento.service";
import { Request, Response } from "express";

const eventoService = new EventoService();

export class EventoController {
    public async crearEvento(req: Request, res: Response) {
        const profesorId = req.uid as string;
        try {
            const { titulo, descripcion, cursoDestinado } = req.body;

            const eventoData: IEvento = { 
                titulo, 
                descripcion, 
                profesor: profesorId, 
                cursoDestinado 
            };

            const newEvent = await eventoService.crearEvento(eventoData);
            res.status(201).json({
                ok: true,
                message: 'Evento creado exitosamente',
                newEvent
            })
        } catch (error: unknown) {
            res.status(400).json({
                ok: false,
                message:'Error al crear el evento',
                error: error
            });
        }
    }
}