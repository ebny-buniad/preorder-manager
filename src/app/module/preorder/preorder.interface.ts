import { PreorderStatus } from "../../../generated/prisma/enums";

export interface ICreatePreorderPayload {
    name: string;
    products: number;
    preorderWhen: string;
    startsAt: Date | string;
    endsAt?: Date | string;
    status: PreorderStatus;
}

export interface IGetPreordersArgs {
    page?: string;
    limit?: string;
    status?: PreorderStatus | "all";
    sortBy?: "name" | "createdAt" | "startsAt" | "endsAt";
    sortOrder?: "asc" | "desc";
}

export interface IUpdatePreorderPayload {
    name?: string;
    products?: number;
    preorderWhen?: string;
    startsAt?: Date | string;
    endsAt?: Date | string;
    status?: PreorderStatus;
}