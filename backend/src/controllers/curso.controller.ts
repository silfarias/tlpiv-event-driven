// import { CursoService } from "../services/curso.service";
// import { Request, Response } from "express";

// export class CursoController {

//     private cursoService: CursoService;
    
//     constructor() {
//         this.cursoService = new CursoService();
//     }

//     public async publicarCurso(req: Request, res: Response): Promise<any> {
        
//         const uid = req.uid as string;
//         console.log(uid);
        // try {
            
        //     const { nombre, descripcion, profesores } = req.body;
    
        //     const curso = await this.cursoService.publicarCurso(
        //         { nombre, descripcion, profesores },
        //         // profesorId as string
        //     );
    
        //     return res.status(201).json({
        //         ok: true,
        //         curso
        //     });
        // } catch (error) {
        //     return res.status(500).json({
        //         ok: false,
        //         message: 'Error al publicar el curso',
        //         error
        //     });
        // }
    // }    
// }