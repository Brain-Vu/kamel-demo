import { RideReqStore } from "./store/rideReqStore";

import { RideReqService } from "./services/RideReqService";
import { RideReqAnalyticsService } from "./services/RideReqAnalyticsService";

const rideReqStore = new RideReqStore();

export const rideReqService = new RideReqService(rideReqStore);
export const rideReqAnalyticsService = new RideReqAnalyticsService(rideReqStore);