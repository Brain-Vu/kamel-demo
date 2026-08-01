import type { RideReq } from "../../../types";

const payload : RideReq = {
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
    longitude: 76.5019,
  },
};
// addRideReq(payload);