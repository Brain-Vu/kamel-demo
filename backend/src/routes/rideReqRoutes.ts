import { Router } from "express";
import { RideReq } from "../../../shared/types";
import { rideReqService } from "../dependencies";

const router = Router();

/* POST new ride requests */
router.post("/", (req, res) => {
  const rideReq: RideReq = req.body;
  rideReqService.addRideReq(rideReq);
  res.status(201).json({ message: "POST ride request" });
});

/* POST a batch of new ride requests */
router.post("/batch", (req, res) => {
  const rideReqs: RideReq[] = req.body;
  for (const rideReq of rideReqs){
    rideReqService.addRideReq(rideReq);
  }
  res.status(201).json({ message: "POST ride request" });
});

/* GET all ride requests*/
router.get("/", (req, res) => {
  const rideReqs = rideReqService.getRideReqs();
  res.json(rideReqs);
});

export default router;
