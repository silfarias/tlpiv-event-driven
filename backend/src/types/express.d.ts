import { Request, Express } from "express";

declare namespace Express {
    export interface Request{
        uid?: string;
        nombre?: string;
    }
}