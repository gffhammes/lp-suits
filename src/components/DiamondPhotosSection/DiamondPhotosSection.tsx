import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { DiamondPhotos } from "./DiamondPhotos";
import { getDefaultWhatsappLink } from "@/utils";
import { Animate } from "../Animate";

export interface IDiamondPhotosSectionProps {}

export const DiamondPhotosSection = (props: IDiamondPhotosSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack alignItems="center" gap={4}>
          <Animate
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-35%" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h2" textAlign="center" maxWidth="20ch">
              O traje ideal para seu evento está aqui
            </Typography>
          </Animate>

          <Animate
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Typography textAlign="center" maxWidth="35ch">
              Na Suits você encontra a maior variedade de cores e modelos
              disponíveis no mercado.
            </Typography>
          </Animate>

          <Animate
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              variant="contained"
              LinkComponent={"a"}
              href={getDefaultWhatsappLink()}
              target="_blank"
            >
              Agendar visita
            </Button>
          </Animate>
        </Stack>
      </Container>

      <DiamondPhotos />
    </Box>
  );
};
