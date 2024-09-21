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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../public/images/logo suits branca 01 3.png";

export interface IHeroSectionProps {}

export const HeroSection = (props: IHeroSectionProps) => {
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          height: { xs: "50vh", sm: "50vh", md: "80vh" },
          width: "100%",
        }}
      >
        <Image
          src={image.src}
          alt=""
          fill
          objectFit="cover"
          objectPosition="bottom"
        />

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

      <Stack gap="clamp(60px, 10vh, 400px)">
        <Container
          sx={{ position: "relative", pt: "clamp(50px, 10vh, 500px)" }}
        >
          <Stack gap={6} alignItems="flex-start">
            <Image
              src={logo.src}
              height={100}
              width={100}
              alt="Logo Suits"
              style={{ objectFit: "contain" }}
            />

            <Stack gap={2} alignItems="flex-start">
              <Typography variant="h1" maxWidth="17ch">
                Aluguel de trajes com a elegância que você merece.
              </Typography>

              <Typography maxWidth="50ch" color="white">
                Tenha muita presença com{" "}
                <strong>trajes masculinos elegantes</strong> e ajustados com
                perfeição para qualquer evento.
              </Typography>
            </Stack>

            <Button variant="contained">Alugar traje</Button>
          </Stack>
        </Container>

        <Stack alignItems="center" justifyContent="center">
          <IconButton color="primary" sx={{ fontSize: 48 }}>
            <KeyboardArrowDownIcon fontSize="inherit" color="primary" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};
