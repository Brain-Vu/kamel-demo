import { RideReqStore } from "../store/rideReqStore";
import { TrafficData } from "../../../shared/types";

export class RideReqAnalyticsService {
  constructor(private store: RideReqStore) {}

  getRiderTrafficHourly(): TrafficData[] {
    const traffic: TrafficData[] = Array.from({ length: 24 }, (_, i) => ({
      time: `${i.toString().padStart(2, "0")}:00`,
      count: 0,
    }));

    for (const rideReq of this.store.getAll()) {
      const hour = new Date(rideReq.timestamp).getHours();
      traffic[hour].count += rideReq.rider_count;
    }

    return traffic;
  }

  getRiderTrafficDaily(): TrafficData[] {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const traffic: TrafficData[] = days.map((day) => ({
      time: day,
      count: 0,
    }));

    for (const rideReq of this.store.getAll()) {
      const day = new Date(rideReq.timestamp).getDay();
      traffic[day].count += rideReq.rider_count;
    }

    return traffic;
  }

  getRiderTrafficMonthly(): TrafficData[] {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const traffic: TrafficData[] = months.map((month) => ({
      time: month,
      count: 0,
    }));

    for (const rideReq of this.store.getAll()) {
      const month = new Date(rideReq.timestamp).getMonth();
      traffic[month].count += rideReq.rider_count;
    }

    return traffic;
  }

  getRiderTrafficYearly(): TrafficData[] {
    const rideReqs = this.store.getAll();

    if (rideReqs.length === 0) {
      return [];
    }

    const years = rideReqs.map((r) => new Date(r.timestamp).getFullYear());

    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    const traffic: TrafficData[] = [];

    for (let year = minYear; year <= maxYear; year++) {
      traffic.push({
        time: year.toString(),
        count: 0,
      });
    }

    for (const rideReq of rideReqs) {
      const year = new Date(rideReq.timestamp).getFullYear();
      traffic[year - minYear].count += rideReq.rider_count;
    }

    return traffic;
  }

  getTimes() {
    return this.store.getAll().map((rideReq) => rideReq.timestamp);
  }
  getStartLocs() {
    return this.store.getAll().map((rideReq) => rideReq.start_coord);
  }
  getEndLocs() {
    return this.store.getAll().map((rideReq) => rideReq.end_coord);
  }
}
