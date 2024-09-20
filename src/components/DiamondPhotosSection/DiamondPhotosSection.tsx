import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { DiamondPhotos } from "./DiamondPhotos";

export interface IDiamondPhotosSectionProps {}

export const DiamondPhotosSection = (props: IDiamondPhotosSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack alignItems="center" gap={4}>
          <Typography variant="h2" textAlign="center" maxWidth="20ch">
            O traje ideal para seu evento está aqui
          </Typography>

          <Typography textAlign="center" maxWidth="35ch">
            Na Suits você encontra a maior variedade de cores e modelos
            disponíveis no mercado.
          </Typography>

          <Button variant="contained">Agendar visita</Button>
        </Stack>
      </Container>

      <DiamondPhotos />
    </Box>
  );
};
