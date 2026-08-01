import { RideReqStore } from "../store/rideReqStore";
import { RideReq } from "../models/RideReq";

export class RideReqService {
  constructor(private store: RideReqStore){}

  addRideReq(rideReq : RideReq){
    this.store.add(rideReq)
  }
  getRideReqs(){
    return this.store.getAll();
  }
}