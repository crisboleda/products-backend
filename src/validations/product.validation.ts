import { body, validationResult } from "express-validator";
import { NextFunction, RequestHandler, Request, Response } from "express";


export const validateProduct: RequestHandler[] = [
    body("name").notEmpty().withMessage("El nombre es obligatorio."),
    body("description").notEmpty().withMessage("La descripción es obligatoria."),
    body("price").isFloat({ gt: 0 }).withMessage("El precio debe ser mayor a 0."),

    ((req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }) as RequestHandler,
];
  