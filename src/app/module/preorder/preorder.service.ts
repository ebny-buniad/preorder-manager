import prisma from "../../lib/prisma";
import { ICreatePreorderPayload, IGetPreordersArgs, IUpdatePreorderPayload } from "./preorder.interface";
import { Prisma } from "../../../generated/prisma/browser";


// ** Create preorder API
const createPreorder = async (payload: ICreatePreorderPayload) => {
    // check duplicate preorder name
    const isDuplicate = await prisma.preorder.findFirst({
        where: {
            name: payload.name,
        },
    });

    if (isDuplicate) {
        throw new Error("Preorder with the same name already exists");
    }
    const slug = payload.name.toLowerCase().replace(/\s+/g, '-');
    const preorder = await prisma.preorder.create({
        data: {
            ...payload,
            slug: slug
        }
    });
    return preorder;
};

// ** Get all preorders API
const getAllPreorders = async (query: IGetPreordersArgs) => {
    const {
        page = "1",
        limit = "10",
        status = "all",
        sortBy = "createdAt",
        sortOrder = "desc",
    } = query;

    const currentPage = Number(page);
    const perPage = Number(limit);

    // Status Filter
    const where: Prisma.PreorderWhereInput = {};

    if (status !== "all") {
        where.status = status;
    }

    // Allowed sortable fields
    const sortableFields = [
        "name",
        "createdAt",
        "startsAt",
        "endsAt",
    ] as const;

    const validSortBy = sortableFields.includes(
        sortBy as (typeof sortableFields)[number]
    )
        ? sortBy
        : "createdAt";

    // Sorting
    const orderBy: Prisma.PreorderOrderByWithRelationInput = {
        [validSortBy]: sortOrder === "asc" ? "asc" : "desc",
    };

    const [preorders, total] = await Promise.all([
        prisma.preorder.findMany({
            where,
            orderBy,
            skip: (currentPage - 1) * perPage,
            take: perPage,
        }),
        prisma.preorder.count({
            where,
        }),
    ]);

    return {
        meta: {
            page: currentPage,
            limit: perPage,
            total,
            totalPage: Math.ceil(total / perPage),
        },
        data: preorders,
    };
};

// ** Get preorder by ID API
const getPreorderById = async (id: string) => {
    const preorder = await prisma.preorder.findUnique({
        where: {
            id: id
        }
    });
    return preorder;
};

// ** Update preorder API
const updatePreorder = async (id: string, payload: Partial<IUpdatePreorderPayload>) => {
    const preorder = await prisma.preorder.update({
        where: {
            id: id
        },
        data: payload
    });
    return preorder;
};

// ** Delete preorder API
const deletePreorder = async (id: string) => {
    const preorder = await prisma.preorder.delete({
        where: {
            id: id
        }
    });
    return preorder;
};

export const preorderService = {
    createPreorder,
    getAllPreorders,
    getPreorderById,
    updatePreorder,
    deletePreorder
};