import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors());

import rideReqRoutes from "./routes/rideReqRoutes"
import rideReqAnalytics from "./routes/rideReqAnalytics"

app.use(express.json());

// routes
app.use("/rideReq", rideReqRoutes);
app.use("/rideReqAnalytics", rideReqAnalytics);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
