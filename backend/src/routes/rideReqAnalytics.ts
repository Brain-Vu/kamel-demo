import { Router } from "express";
import { rideReqAnalyticsService, rideReqService } from "../dependencies";

const router = Router();

/* GET the total number of unique users*/
router.get("/total-users", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getTotalUsers();
  res.json(rideReqs);
});

/* GET the average number of riders per ride request*/
router.get("/average-riders", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getAverageRiders();
  res.json(rideReqs);
});

/* GET the total number of riders*/
router.get("/total-riders", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getTotalRiders();
  res.json(rideReqs);
});

/* GET the total number of ride requests*/
router.get("/total-reqs", (req, res) => {
  const rideReqs = rideReqAnalyticsService.getTotalRideRequests();
  res.json(rideReqs);
});

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

/* GET a limited number of start and end locations */
router.get("/map-points", (req, res) => {
  const requestedLimit = Number(req.query.limit);
  const limit = Math.min(
    Number.isInteger(requestedLimit) && requestedLimit > 0
      ? requestedLimit
      : 500,
    500,
  );
  const rides = rideReqService.getRideReqs().slice(0, limit);
  res.json({
    startCoords: rides.map((ride) => ride.start_coord),
    endCoords: rides.map((ride) => ride.end_coord),
  });
});

export default router;
