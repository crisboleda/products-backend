import { body, validationResult } from "express-validator";
import { NextFunction, RequestHandler, Request, Response } from "express";


export const validateProduct: RequestHandler[] = [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("price").isFloat({ gt: 0 }).withMessage("Price must be greater than 0"),

    ((req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }) as RequestHandler,
];
  