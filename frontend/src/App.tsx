import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./App.css";

function App() {
  const handleRefresh = () => {
    console.log("Refresh");
  };

  const events = [
    {
      id: 1,
      type: "Ride Request",
      user: 52402,
      time: "20:07",
    },
    {
      id: 2,
      type: "Ride Accepted",
      user: 41231,
      time: "20:12",
    },
    {
      id: 3,
      type: "Ride Completed",
      user: 78952,
      time: "20:29",
    },
  ];

  const stats = [
    {
      title: "Total Events",
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
                  <Typography color="text.secondary">
                    {stat.title}
                  </Typography>

                  <Typography variant="h3">{stat.value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper className="table-paper" elevation={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Recent Events
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Event</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell>{event.type}</TableCell>
                  <TableCell>{event.user}</TableCell>
                  <TableCell>{event.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;