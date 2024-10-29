import { NextFunction, Request, Response } from "express";
import { ApppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";

export function errorHandler(error: ApppError | Error, _: Request, res: Response, __: NextFunction) {
    if (error instanceof ApppError) {

        res.status(error.statusCode).json({ message: error.message })
    }

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({

        message: error.message
    })
}