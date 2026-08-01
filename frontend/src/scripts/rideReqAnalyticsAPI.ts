import {
  riderTrafficHourlyUrl,
  riderTrafficDailyUrl,
  riderTrafficMonthlyUrl,
  riderTrafficYearlyUrl,
  timestampsUrl,
  startLocUrl,
  endLocUrl,
  totalUsersUrl,
  totalRidersUrl,
  avgRidersUrl,
  totalReqsUrl,
  mapPointsUrl,
} from "./urls";

async function get(url: string, errorMssg: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(errorMssg, error);
  }
}
export async function getMapPoints() {
  return await get(mapPointsUrl, "GET map points failed");
}
export async function getTotalUsers() {
  return await get(totalUsersUrl, "GET total users failed");
}
export async function getTotalRiders() {
  return await get(totalRidersUrl, "GET total riders failed");
}
export async function getAvgRiders() {
  return await get(avgRidersUrl, "GET average riders failed");
}
export async function getTotalReqs() {
  return await get(totalReqsUrl, "GET total requests failed");
}
export async function getRiderTrafficHourly() {
  return await get(riderTrafficHourlyUrl, "GET rider traffic hourly failed");
}
export async function getRiderTrafficDaily() {
  return await get(riderTrafficDailyUrl, "GET rider traffic daily failed");
}
export async function getRiderTrafficMonthly() {
  return await get(riderTrafficMonthlyUrl, "GET rider traffic monthly failed");
}
export async function getRiderTrafficYearly() {
  return await get(riderTrafficYearlyUrl, "GET rider traffic yearly failed");
}
export async function getTimestamps() {
  return await get(timestampsUrl, "GET timestamps failed");
}
export async function getStartLocations() {
  return await get(startLocUrl, "GET start locations failed");
}
export async function getEndLocations() {
  return await get(endLocUrl, "GET end locations failed");
}
