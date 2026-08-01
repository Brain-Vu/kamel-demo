import { RideReq } from "../../../shared/types";

export class RideReqStore {
  private rideRequests: RideReq[] = [];

  add(rideReq: RideReq) {
    this.rideRequests.push(rideReq);
  }
  getAll() {
    return this.rideRequests;
  }
}
