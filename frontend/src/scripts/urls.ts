const url = "http://localhost:3000";

export const rideReqUrl = `${url}/rideReq`;
export const rideReqAnalyticsUrl = `${url}/rideReqAnalytics`;

export const batchUrl = `${rideReqUrl}/batch`;
export const mapPointsUrl = `${rideReqAnalyticsUrl}/map-points?limit=500`;

export const totalUsersUrl = `${rideReqAnalyticsUrl}/total-users`;
export const totalRidersUrl = `${rideReqAnalyticsUrl}/total-riders`;
export const avgRidersUrl = `${rideReqAnalyticsUrl}/average-riders`;
export const totalReqsUrl = `${rideReqAnalyticsUrl}/total-reqs`;

export const riderTrafficHourlyUrl = `${rideReqAnalyticsUrl}/rider-traffic-hourly`;
export const riderTrafficDailyUrl = `${rideReqAnalyticsUrl}/rider-traffic-daily`;
export const riderTrafficMonthlyUrl = `${rideReqAnalyticsUrl}/rider-traffic-monthly`;
export const riderTrafficYearlyUrl = `${rideReqAnalyticsUrl}/rider-traffic-yearly`;

export const timestampsUrl = `${rideReqAnalyticsUrl}/timestamps`;
export const startLocUrl = `${rideReqAnalyticsUrl}/start-location`;
export const endLocUrl = `${rideReqAnalyticsUrl}/end-location`;
