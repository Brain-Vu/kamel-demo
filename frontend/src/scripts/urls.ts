const url = "http://localhost:3000";

export const rideReqUrl = `${url}/rideReq`;
export const rideReqAnalyticsUrl = `${url}/rideReqAnalytics`;

export const riderTrafficHourlyUrl = `${rideReqAnalyticsUrl}/rider-traffic-hourly`;
export const riderTrafficDailyUrl = `${rideReqAnalyticsUrl}/rider-traffic-daily`;
export const riderTrafficMonthlyUrl = `${rideReqAnalyticsUrl}/rider-traffic-monthly`;
export const riderTrafficYearlyUrl = `${rideReqAnalyticsUrl}/rider-traffic-yearly`;

export const timestampsUrl = `${rideReqAnalyticsUrl}/timestamps`;
export const startLocUrl = `${rideReqAnalyticsUrl}/start-location`;
export const endLocUrl = `${rideReqAnalyticsUrl}/end-location`;
