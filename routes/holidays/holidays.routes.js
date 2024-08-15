import express from "express";
import HolidaysController from "../../controllers/holidays.controller.js";
const router = express.Router();

router.get("/countries", HolidaysController.getCountries);
router.get("/holidays", HolidaysController.getHolidays);

const holidayRoutes = router;

export default holidayRoutes;
