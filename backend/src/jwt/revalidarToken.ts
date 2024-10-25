import { Request, Response } from "express";
import { generateJWT } from "./jwt";


export const revalidarToken = async (req: Request, res: Response) => {

    const uid = req.uid as string;
    const name = req.nombre as string;

    console.log('uid: ', uid);
    console.log('name: ', name);

    const token = await generateJWT(uid, name)
    console.log('token: ', token);

    res.json(
        {
            ok: true,
            uid: uid,
            name: name,
            token: token
        });
};