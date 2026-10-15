import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Item from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const employees = [
  {
    id: 1,
    name: "Jan Kowalski",
    role: "Barber",
    img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Specjalista od klasycznych i nowoczesnych fryzur męskich. Zawsze dba o perfekcyjne wykończenie brody i włosów, tak aby każdy klient czuł się pewnie i stylowo.",
  },
  {
    id: 2,
    name: "Adam Nowak",
    role: "Barber",
    img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Pasjonat kreatywnych cięć i modnych stylizacji. Łączy tradycję z nowoczesnością, tworząc fryzury idealnie dopasowane do charakteru klienta",
  },
  {
    id: 3,
    name: "Piotr Wiśniewski",
    role: "Barber",
    img: "https://tse3.mm.bing.net/th/id/OIP.m82gn70QaT1hPIXmCtqEsgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Ekspert od pielęgnacji brody i detali fryzur. Jego precyzja i wyczucie stylu sprawiają, że każdy klient wychodzi zadowolony i elegancki.",
  },
  {
    id: 3,
    name: "Piotr Wiśniewski",
    role: "Barber",
    img: "https://tse3.mm.bing.net/th/id/OIP.m82gn70QaT1hPIXmCtqEsgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Ekspert od pielęgnacji brody i detali fryzur. Jego precyzja i wyczucie stylu sprawiają, że każdy klient wychodzi zadowolony i elegancki.",
  },
  {
    id: 3,
    name: "Piotr Wiśniewski",
    role: "Barber",
    img: "https://tse3.mm.bing.net/th/id/OIP.m82gn70QaT1hPIXmCtqEsgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Ekspert od pielęgnacji brody i detali fryzur. Jego precyzja i wyczucie stylu sprawiają, że każdy klient wychodzi zadowolony i elegancki.",
  },
];

function Team() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} mt={8}>
      <Typography variant="h4" align="center">
        Meet Our Team
        <Divider sx={{ mx: 14 }} />
      </Typography>
      <Box
        component="section"
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: "center",
          overflow: "auto",
        }}
      >
        <Grid container spacing={2} sx={{ px: 10 }}>
          {employees.map((emp) => (
            <Grid
              size={{ xs: 12, md: 4, lg: 4 }}
              sx={{ padding: 2 }}
              key={emp.id}
            >
              <Item>
                <Card>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={emp.img}
                    title={emp.name}
                    alt={emp.name}
                  />
                  <CardContent sx={{ height: 180 }}>
                    <Typography variant="h5" color="text.primary">
                      {emp.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary">
                      {emp.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      mt={1}
                    >
                      {emp.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small">Book an appointment</Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Team;
