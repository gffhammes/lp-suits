import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import image from "../../public/images/bride-adjusting-her-boyfriend-s-bow-tie.webp";
import Image from "next/image";

export interface IHeroSectionProps {}

export const HeroSection = (props: IHeroSectionProps) => {
  return (
    <Box>
      <Box sx={{ position: "absolute", height: "20rem", width: "100%" }}>
        <Image src={image.src} alt="" fill objectFit="cover" />

        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(rgba(30, 30, 30, 0.5),rgba(30, 30, 30, 0.8) 40%, #1e1e1e )",
            top: 0,
          }}
        />
      </Box>

      <Container sx={{ position: "relative", pt: 30 }}>
        <Stack gap={6} alignItems="flex-start">
          <Stack gap={2} alignItems="flex-start">
            <Typography variant="h1" maxWidth="15ch">
              Aluguel de trajes com a elegância que você merece.
            </Typography>

            <Typography maxWidth="30ch" color="white">
              Tenha muita presença com{" "}
              <strong>trajes masculinos elegantes</strong> e ajustados com
              perfeição para qualquer evento.
            </Typography>
          </Stack>

          <Button variant="contained">Alugar traje</Button>
        </Stack>
      </Container>
    </Box>
  );
};
