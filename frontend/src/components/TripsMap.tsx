import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Typography, Paper } from "@mui/material";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Coord } from "../../../shared/types";

const coloredIcon = (color: string) =>
  new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

const blueIcon = coloredIcon("blue");
const redIcon = coloredIcon("red");

interface TripsMapProps {
  startCoords: Coord[];
  endCoords: Coord[];
}

function TripsMap({ startCoords, endCoords }: TripsMapProps) {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Trip Heatmap
      </Typography>
      <MapContainer
        center={[47.6062, -122.3321]}
        zoom={4}
        style={{ height: "400px", width: "100%" }}
        worldCopyJump={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {startCoords.map((pos, index) => (
          <Marker
            key={index}
            position={[pos.latitude, pos.longitude]}
            icon={blueIcon}
          >
            <Popup>{`${pos.latitude}, ${pos.longitude}`}</Popup>
          </Marker>
        ))}
        {endCoords.map((pos, index) => (
          <Marker
            key={index}
            position={[pos.latitude, pos.longitude]}
            icon={redIcon}
          >
            <Popup>{`${pos.latitude}, ${pos.longitude}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <p style={{ color: "blue" }}>Start Locations</p>
      <br />
      <p style={{ color: "red" }}>End Locations</p>
    </Paper>
  );
}

export default TripsMap;
