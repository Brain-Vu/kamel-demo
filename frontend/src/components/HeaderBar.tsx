import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

interface HeaderBarProps {
  handleLoadButton: () => void;
}

function HeaderBar({ handleLoadButton }: HeaderBarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kamel Ride Dashboard
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<RefreshIcon />}
          onClick={handleLoadButton}
        >
          Load Data
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
