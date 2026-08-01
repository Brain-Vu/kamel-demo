import { Router } from "express";
import { rideReqAnalyticsService } from "../dependencies";

const router = Router();

/* GET all ride request ridership traffic*/
router.get("/rider-traffic", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getRiderTraffic();
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

export default router