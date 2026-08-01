import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import type { TrafficData } from "../../../shared/types";

interface RiderTrafficGraphProps {
  riderTraffic: TrafficData[];
}

function RiderTrafficGraph({ riderTraffic }: RiderTrafficGraphProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={riderTraffic}
        layout="vertical"
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid stroke="#ccc" />
        <XAxis type="number" />
        <YAxis dataKey="time" type="category" width={80} />
        <Tooltip />
        <Bar dataKey="count" fill="green" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RiderTrafficGraph;