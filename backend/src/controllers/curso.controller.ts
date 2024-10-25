import { CursoService } from "../services/curso.service";
import { Request, Response } from "express";

export class CursoController {

    private cursoService: CursoService;
    
    constructor() {
        this.cursoService = new CursoService();
        this.publicarCurso = this.publicarCurso.bind(this);
    }

    public async publicarCurso(req: Request, res: Response): Promise<any> {
        
        const profesorId = req.uid as string;

        try {
            
            const { nombre, descripcion } = req.body;
    
            const curso = await this.cursoService.publicarCurso(
                { nombre, descripcion },
                profesorId
            );
    
            return res.status(201).json({
                ok: true,
                curso
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                message: 'Error al publicar el curso',
                error
            });
        }
    }    
};