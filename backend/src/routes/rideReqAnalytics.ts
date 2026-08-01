import { Router } from "express";
import { rideReqAnalyticsService } from "../dependencies";

const router = Router();

/* GET all ride request ridership traffic by the hour*/
router.get("/rider-traffic-hourly", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getRiderTrafficHourly();
  res.json(rideReqs);
});

/* GET all ride request ridership traffic by the day*/
router.get("/rider-traffic-daily", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getRiderTrafficDaily();
  res.json(rideReqs);
});

/* GET all ride request ridership traffic by the month*/
router.get("/rider-traffic-monthly", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getRiderTrafficMonthly();
  res.json(rideReqs);
});

/* GET all ride request ridership traffic by the year*/
router.get("/rider-traffic-yearly", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getRiderTrafficYearly();
  res.json(rideReqs);
});

/* GET all ride request timestamps*/
router.get("/timestamps", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getTimes();
  res.json(rideReqs);
});

/* GET all ride request start locations*/
router.get("/start-location", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getStartLocs();
  res.json(rideReqs);
});

/* GET all ride request end locations*/
router.get("/end-location", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getEndLocs();
  res.json(rideReqs);
});

export default router;
