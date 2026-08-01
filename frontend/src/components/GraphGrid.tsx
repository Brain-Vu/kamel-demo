import { Grid, Typography, Paper } from "@mui/material";
import RiderTrafficGraph from "./RiderTrafficGraph";
import type { TrafficData } from "../../../shared/types";

interface GraphGridProps {
  riderTrafficHourly: TrafficData[];
  riderTrafficDaily: TrafficData[];
  riderTrafficMonthly: TrafficData[];
  riderTrafficYearly: TrafficData[];
}

function GraphGrid({
  riderTrafficHourly,
  riderTrafficDaily,
  riderTrafficMonthly,
  riderTrafficYearly,
}: GraphGridProps) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Hourly Rider Traffic
          </Typography>
          <RiderTrafficGraph riderTraffic={riderTrafficHourly} />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Daily Rider Traffic
          </Typography>
          <RiderTrafficGraph riderTraffic={riderTrafficDaily} />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Monthly Rider Traffic
          </Typography>
          <RiderTrafficGraph riderTraffic={riderTrafficMonthly} />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Yearly Rider Traffic
          </Typography>
          <RiderTrafficGraph riderTraffic={riderTrafficYearly} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default GraphGrid;
