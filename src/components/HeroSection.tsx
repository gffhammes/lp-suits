import { Box, Button, Container, Stack, Typography } from "@mui/material";
import image from "../../public/images/bride-adjusting-her-boyfriend-s-bow-tie.webp";
import Image from "next/image";
import { Logo } from "./Logo";
import { getDefaultWhatsappLink } from "@/utils";
import { HeroSectionArrowButton } from "./HeroSectionArrowButton";
import { Animate } from "./Animate";

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
          priority
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
            <Logo height={{ xs: 70, md: 100 }} width={{ xs: 70, md: 100 }} />

            <Stack gap={2} alignItems="flex-start">
              <Animate
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography variant="h1" maxWidth="17ch">
                  Aluguel de trajes com a elegância que você merece.
                </Typography>
              </Animate>

              <Animate
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: "30px" }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Typography maxWidth="50ch" color="white">
                  Tenha muita presença com{" "}
                  <strong>trajes masculinos elegantes</strong> e ajustados com
                  perfeição para qualquer evento.
                </Typography>
              </Animate>
            </Stack>

            <Animate
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: "30px" }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Button
                variant="contained"
                LinkComponent={"a"}
                href={getDefaultWhatsappLink()}
                target="_blank"
                size="large"
              >
                Alugar traje
              </Button>
            </Animate>
          </Stack>
        </Container>

        <Stack alignItems="center" justifyContent="center">
          <HeroSectionArrowButton />
        </Stack>
      </Stack>
    </Box>
  );
};
