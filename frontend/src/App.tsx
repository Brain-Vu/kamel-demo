import { useState } from "react";
import { Box } from "@mui/material";
import {
  getRiderTrafficHourly,
  getRiderTrafficDaily,
  getRiderTrafficMonthly,
  getRiderTrafficYearly,
  getTotalUsers,
  getTotalRiders,
  getAvgRiders,
  getTotalReqs,
  getMapPoints,
} from "./scripts/rideReqAnalyticsAPI";
import { getAllRideReq } from "./scripts/rideReqAPI";
import TripsMap from "./components/TripsMap";
import StatCards from "./components/StatCards";
import GraphGrid from "./components/GraphGrid";
import HeaderBar from "./components/HeaderBar";
import RecentList from "./components/RecentList";
import type { TrafficData, RideReq, Coord } from "../../shared/types";
import "./App.css";

import { generateData } from "../../testing/test";

function App() {
  const [riderTrafficHourly, setRiderTrafficHourly] = useState<TrafficData[]>(
    [],
  );
  const [riderTrafficDaily, setRiderTrafficDaily] = useState<TrafficData[]>([]);
  const [riderTrafficMonthly, setRiderTrafficMonthly] = useState<TrafficData[]>(
    [],
  );
  const [riderTrafficYearly, setRiderTrafficYearly] = useState<TrafficData[]>(
    [],
  );
  const [rideReqs, setRideReqs] = useState<RideReq[]>([]);
  const [startCoords, setStartLocations] = useState<Coord[]>([]);
  const [endCoords, setEndLocations] = useState<Coord[]>([]);

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRiders, setTotalRiders] = useState(0);
  const [avgRiders, setAvgRiders] = useState(0);
  const [totalReqs, setTotalReqs] = useState(0);

  async function loadContent() {
    // generating data
    await generateData();

    // loading content for statistics
    const _totalUsers = await getTotalUsers();
    const _totalRiders = await getTotalRiders();
    const _avgRiders = await getAvgRiders();
    const _totalReqs = await getTotalReqs();
    setTotalUsers(_totalUsers);
    setTotalRiders(_totalRiders);
    setAvgRiders(_avgRiders);
    setTotalReqs(_totalReqs);

    // loading content for graph grid
    const _riderTrafficHourly = await getRiderTrafficHourly();
    const _riderTrafficDaily = await getRiderTrafficDaily();
    const _riderTrafficMonthly = await getRiderTrafficMonthly();
    const _riderTrafficYearly = await getRiderTrafficYearly();
    setRiderTrafficHourly(_riderTrafficHourly);
    setRiderTrafficDaily(_riderTrafficDaily);
    setRiderTrafficMonthly(_riderTrafficMonthly);
    setRiderTrafficYearly(_riderTrafficYearly);

    // loading content for trips map
    // const _startLocations = await getStartLocations();
    // const _endLocations = await getEndLocations();
    const { startCoords, endCoords } = await getMapPoints();
    setStartLocations(startCoords);
    setEndLocations(endCoords);

    // loading content for recency list
    const _rideReqs = await getAllRideReq();
    setRideReqs(_rideReqs);
  }

  return (
    <Box className="app">
      <HeaderBar handleLoadButton={loadContent}></HeaderBar>
      <Box className="content">
        <StatCards
          totalUsers={totalUsers}
          totalRiders={totalRiders}
          avgRiders={avgRiders}
          totalReqs={totalReqs}
        ></StatCards>
        <RecentList rideReqs={rideReqs} />
        <GraphGrid
          riderTrafficHourly={riderTrafficHourly}
          riderTrafficDaily={riderTrafficDaily}
          riderTrafficMonthly={riderTrafficMonthly}
          riderTrafficYearly={riderTrafficYearly}
        />
        <TripsMap startCoords={startCoords} endCoords={endCoords} />
      </Box>
    </Box>
  );
}

export default App;
