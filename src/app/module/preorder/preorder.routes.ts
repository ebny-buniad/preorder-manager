import { Router } from "express";
import { preorderController } from "./preorder.controller";
import validateRequest from "../../middleware/validateRequest";
import { PreorderValidation } from "./preorder.validation";

const router = Router();

router.post("/", validateRequest(PreorderValidation.createPreorderSchema), preorderController.createPreorder);
router.get("/", preorderController.getAllPreorders);
router.get("/:slug", preorderController.getPreorderById);
router.put("/:id", validateRequest(PreorderValidation.updatePreorderSchema), preorderController.updatePreorder);
router.patch("/:id/status", preorderController.updatePreorderStatus)
router.delete("/:id", preorderController.deletePreorder);


export const preorderRoutes: Router = router;