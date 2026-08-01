import { RideReqStore } from "../store/rideReqStore";
import { RideReq } from "../../../shared/types";

export class RideReqService {
  constructor(private store: RideReqStore) {}

  addRideReq(rideReq: RideReq) {
    this.store.add(rideReq);
  }
  getRideReqs() {
    return this.store
      .getAll()
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      );
  }
}
