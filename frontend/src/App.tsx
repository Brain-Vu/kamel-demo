import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  getRiderTrafficHourly,
  getRiderTrafficDaily,
  getRiderTrafficMonthly,
  getRiderTrafficYearly,
} from "./scripts/rideReqAnalyticsAPI";
import { getAllRideReq } from "./scripts/rideReqAPI";
import {
  getStartLocations,
  getEndLocations,
} from "./scripts/rideReqAnalyticsAPI";
import TripsMap from "./components/TripsMap";
import GraphGrid from "./components/GraphGrid";
import RecentList from "./components/RecentList";
import type { TrafficData, RideReq, Coord } from "../../shared/types";
import "./App.css";

import { testFunc } from "./scripts/test"; // remove me

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

  useEffect(() => {
    testFunc();
    async function loadContent() {
      // loading content for graph grid
      const _riderTrafficHourly = await getRiderTrafficHourly();
      const _riderTrafficDaily = await getRiderTrafficDaily();
      const _riderTrafficMonthly = await getRiderTrafficMonthly();
      const _riderTrafficYearly = await getRiderTrafficYearly();
      setRiderTrafficHourly(_riderTrafficHourly);
      setRiderTrafficDaily(_riderTrafficDaily);
      setRiderTrafficMonthly(_riderTrafficMonthly);
      setRiderTrafficYearly(_riderTrafficYearly);

      // loading content for recency list
      const _rideReqs = await getAllRideReq();
      setRideReqs(_rideReqs);

      // loading content for trips map
      const _startLocations = await getStartLocations();
      const _endLocations = await getEndLocations();
      setStartLocations(_startLocations);
      setEndLocations(_endLocations);
    }
    loadContent();
  }, []);

  const handleRefresh = () => {
    console.log("Refresh");
  };

  const stats = [
    {
      title: "Total People Needing a Ride",
      value: "143",
    },
    {
      title: "Ride Requests",
      value: "71",
    },
    {
      title: "Completed Trips",
      value: "58",
    },
    {
      title: "Active Users",
      value: "36",
    },
  ];

  return (
    <Box className="app">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Kamel Ride Dashboard
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<RefreshIcon />}
            onClick={handleRefresh}
          >
            Refresh
          </Button>
        </Toolbar>
      </AppBar>

      <Box className="content">
        <Typography variant="h4" gutterBottom>
          Analytics Overview
        </Typography>

        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.title}>
              <Card className="stat-card">
                <CardContent>
                  <Typography color="text.secondary">{stat.title}</Typography>

                  <Typography variant="h3">{stat.value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            paddingTop: "40px",
          }}
        >
          <RecentList rideReqs={rideReqs} />
          <GraphGrid
            riderTrafficHourly={riderTrafficHourly}
            riderTrafficDaily={riderTrafficDaily}
            riderTrafficMonthly={riderTrafficMonthly}
            riderTrafficYearly={riderTrafficYearly}
          />
          <TripsMap startCoords={startCoords} endCoords={endCoords} />
        </div>
      </Box>
    </Box>
  );
}

export default App;
