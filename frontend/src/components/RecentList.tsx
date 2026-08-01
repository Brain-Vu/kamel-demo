import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import type { RideReq } from "../../../shared/types";

interface RecentListProps {
  rideReqs: RideReq[];
}

function RecentList({ rideReqs }: RecentListProps) {
  return (
    <>
      <Paper className="table-paper" elevation={3}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Recent Events
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Trip ID</TableCell>
              <TableCell># of People Riding</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rideReqs.slice(0, 9).map((rideReq) => (
              <TableRow key={rideReq.trip_id}>
                <TableCell>{rideReq.user_id}</TableCell>
                <TableCell>{rideReq.trip_id}</TableCell>
                <TableCell>{rideReq.rider_count}</TableCell>
                <TableCell>{rideReq.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default RecentList;
