import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { preorderService } from "./preorder.service";
import { sendResponse } from "../../shared/sendResponse";


// ** Create preorder API
const createPreorder = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body;
    const preorder = await preorderService.createPreorder(payload);
    sendResponse(res, {
        httpStatusCode: 201,
        success: true,
        message: "Preorder created successfully",
        data: preorder
    });
});

// ** Get all preorders API
const getAllPreorders = catchAsync(async (req: Request, res: Response) => {
    const query = req.query;
    const preorders = await preorderService.getAllPreorders(query);
    sendResponse(res, {
        httpStatusCode: 200,
        success: true,
        message: "Preorders retrieved successfully",
        data: preorders
    });
});

// ** Get preorder by ID API
const getPreorderById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const preorder = await preorderService.getPreorderById(id as string);
    sendResponse(res, {
        httpStatusCode: 200,
        success: true,
        message: "Preorder retrieved successfully",
        data: preorder
    });
});

// ** Update preorder API
const updatePreorder = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;
    const preorder = await preorderService.updatePreorder(id as string, payload);
    sendResponse(res, {
        httpStatusCode: 200,
        success: true,
        message: "Preorder updated successfully",
        data: preorder
    });
});

// ** Delete preorder API
const deletePreorder = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const preorder = await preorderService.deletePreorder(id as string);
    sendResponse(res, {
        httpStatusCode: 200,
        success: true,
        message: "Preorder deleted successfully",
        data: preorder
    });
});

export const preorderController = {
    createPreorder,
    getAllPreorders,
    getPreorderById,
    updatePreorder,
    deletePreorder
};