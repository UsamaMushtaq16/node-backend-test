import express from "express";
import holidayRoutes from "./holidays/holidays.routes.js";

const router = express.Router();

router.use("/v1", holidayRoutes);

const apiRoutes = router;

export default apiRoutes;
