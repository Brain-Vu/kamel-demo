import type { RideReq } from "../../../shared/types";
import { batchUrl, rideReqUrl } from "./urls";

export async function getAllRideReq() {
  try {
    const response = await fetch(rideReqUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET all ride reqs failed", error);
  }
}

export async function addRideReq(rideReq: RideReq) {
  try {
    const response = await fetch(rideReqUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rideReq),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("POST ride req failed", error);
  }
}

export async function addBatchRideReq(rideReqs: RideReq[]) {
  try {
    const response = await fetch(batchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rideReqs),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("POST ride req failed", error);
  }
}
