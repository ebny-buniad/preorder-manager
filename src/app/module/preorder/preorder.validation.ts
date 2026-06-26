import { z } from "zod";
import { PreorderStatus } from "../../../generated/prisma/browser";

const createPreorderSchema = z.object({
    body: z.object({
        name: z.string().min(3),
        products: z.number().int().positive(),
        preorderWhen: z.enum([
            "out-of-stock",
            "regardless-of-stock",
        ]),
        startsAt: z.coerce.date(),
        endsAt: z.preprocess(
            (val) => val === "" ? undefined : val,
            z.coerce.date().optional()
        ),
        status: z.nativeEnum(
            PreorderStatus
        ),
    }),
});

const updatePreorderSchema = z.object({
    body: z.object({
        name: z.string().min(3).optional(),

        products: z
            .number()
            .int()
            .positive()
            .optional(),

        preorderWhen: z
            .enum([
                "out-of-stock",
                "regardless-of-stock",
            ])
            .optional(),

        startsAt: z.coerce
            .date()
            .optional(),

        endsAt: z.coerce
            .date()
            .optional(),

        status: z
            .nativeEnum(
                PreorderStatus
            )
            .optional(),
    }),
});

export const PreorderValidation = {
    createPreorderSchema,
    updatePreorderSchema,
};