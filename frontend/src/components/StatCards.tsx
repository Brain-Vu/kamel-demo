import { Typography, Card, CardContent } from "@mui/material";

interface StatCardsProps {
  totalUsers: number;
  totalRiders: number;
  avgRiders: number;
  totalReqs: number;
}

function StatCards({
  totalUsers,
  totalRiders,
  avgRiders,
  totalReqs,
}: StatCardsProps) {
  const stats = [
    {
      title: "Total number of users",
      count: totalUsers,
    },
    {
      title: "Total number of riders across all ride requests",
      count: totalRiders,
    },
    {
      title: "Average number of riders per ride request",
      count: avgRiders,
    },
    {
      title: "Total number of ride requests",
      count: totalReqs,
    },
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Analytics Overview
      </Typography>

      <div className="stats-grid">
        {stats.map((stat) => (
          <Card className="stat-card" key={stat.title}>
            <CardContent>
              <Typography color="text.secondary">{stat.title}</Typography>
              <Typography variant="h3">{stat.count}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default StatCards;
