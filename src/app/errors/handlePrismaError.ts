import { Prisma } from "../../generated/prisma/client";
import { TGenericErrorResponse } from "../interface/error";


const handlePrismaError = (
    error: Prisma.PrismaClientKnownRequestError
): TGenericErrorResponse => {
    let message = "Database Error";

    if (error.code === "P2002") {
        message = "Duplicate value found";
    }

    return {
        statusCode: 400,
        message,
        errorSources: [
            {
                path: "",
                message,
            },
        ],
    };
};

export default handlePrismaError;