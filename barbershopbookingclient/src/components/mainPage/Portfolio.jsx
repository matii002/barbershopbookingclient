import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

function Portfolio() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: 600, margin: "0 auto" }}>
        <CardMedia
          sx={{ height: 360 }}
          image="https://tse2.mm.bing.net/th/id/OIP.DQSBmrSRYVYQPjvxGR_3BgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" /*zmienić na plik*/
          title="portfolio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Our Portfolio
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Check out our portfolio to see the amazing transformations we have
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">See More photos</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default Portfolio;
