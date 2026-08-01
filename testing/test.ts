import { addBatchRideReq } from "../frontend/src/scripts/rideReqAPI";
import type { Coord, RideReq } from "../shared/types";
import { randInt, randDec } from "./randomNums";

const numData = 10000;
const startRefCoord = {
  latitude: 47.6062,
  longitude: -122.3321,
};
const endRefCoord = {
  latitude: 42.4439,
  longitude: -76.5019,
};

function genUserID() {
  return randInt(10000, 99999);
}
function genTripID() {
  return randInt(10000, 99999);
}
function genRiderCount() {
  return randInt(1, 6);
}
function genTimestamp() {
  const now = Date.now();
  const twoYearsMilliseconds = 2 * 365 * 24 * 60 * 60 * 1000;
  const timestamp = randInt(now - twoYearsMilliseconds, now);
  return new Date(timestamp).toISOString();
}
function genCoord(reference: Coord) {
  const displacement = 0.3;
  return {
    latitude: Math.min(
      90,
      Math.max(-90, reference.latitude + randDec(-displacement, displacement)),
    ),
    longitude: Math.min(
      180,
      Math.max(
        -180,
        reference.longitude + randDec(-displacement, displacement),
      ),
    ),
  };
}

export async function generateData() {
  const rideReqs : RideReq[]= []
  for (let n = 0; n < numData; n++) {
    rideReqs.push({
      user_id: genUserID(),
      trip_id: genTripID(),
      rider_count: genRiderCount(),
      timestamp: genTimestamp(),
      start_coord: genCoord(startRefCoord),
      end_coord: genCoord(endRefCoord),
    });
    
  }
  await addBatchRideReq(rideReqs)
}

/*
Reference

const payload: RideReq = {
  user_id: 52402,
  trip_id: 24509,
  rider_count: 1,
  timestamp: "2026-07-31T20:07:00Z",
  start_coord: {
    latitude: 47.6062,
    longitude: -122.3321,
  },
  end_coord: {
    latitude: 42.4439,
    longitude: -76.5019,
  },
};
*/
