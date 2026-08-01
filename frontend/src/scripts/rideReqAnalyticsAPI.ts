import { riderTrafficUrl, timestampsUrl, startLocUrl, endLocUrl } from "./urls";

export async function getRiderTraffic() {
  try {
    const response = await fetch(riderTrafficUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET rider traffic failed", error);
  }
}
export async function getTimestamps() {
  try {
    const response = await fetch(timestampsUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET timestamps failed", error);
  }
}
export async function getStartLocations() {
  try {
    const response = await fetch(startLocUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET start locations failed", error);
  }
}
export async function getEndLocations() {
  try {
    const response = await fetch(endLocUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET end locations failed", error);
  }
}
