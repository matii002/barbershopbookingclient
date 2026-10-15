import { Box, Typography } from "@mui/material";
import Team from "./Team";
import Portfolio from "./Portfolio";

function MainPageContent() {
  return (
    <>
      <Box
        component="section"
        sx={{ padding: 4, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography variant="h4" align="center">
          Welcome to MenThingsBarber!
        </Typography>
        <Typography align="center">
          Your go-to place for the best barber services in town. Book your
          appointment now and experience top-notch grooming.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Portfolio />
      </Box>
      <Team />
    </>
  );
}

export default MainPageContent;
