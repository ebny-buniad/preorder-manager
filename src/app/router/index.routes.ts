import { Router } from "express";
import { preorderRoutes } from "../module/preorder/preorder.routes";

const router = Router();

router.use("/preorder", preorderRoutes);

export const indexRouter: Router = router;