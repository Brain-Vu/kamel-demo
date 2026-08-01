import { RideReq } from "../../../types";
import { RideReqStore } from "../store/rideReqStore";

export class RideReqAnalyticsService {
  private rideReqs: RideReq[];

  constructor(store: RideReqStore) {
    this.rideReqs = store.getAll();
  }

  // value pairs of timestamp and rider count
  getRiderTraffic() {
    return this.rideReqs.map((rideReq) => [
      rideReq.timestamp,
      rideReq.rider_count,
    ]);
  }
  getTimes() {
    return this.rideReqs.map((rideReq) => rideReq.timestamp);
  }
  getStartLocs() {
    return this.rideReqs.map((rideReq) => rideReq.start_coord);
  }
  getEndLocs() {
    return this.rideReqs.map((rideReq) => rideReq.end_coord);
  }
  // getOverlap() {}
}
