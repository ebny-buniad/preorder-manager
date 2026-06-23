/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                error: error.message || "An unexpected error occurred",
            })
        }
    }
}

export default catchAsync;