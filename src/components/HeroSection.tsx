import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Logo } from "./Logo";
import { getDefaultWhatsappLink } from "@/utils";
import { HeroSectionArrowButton } from "./HeroSectionArrowButton";
import { Animate } from "./Animate";
import { getHeroSection } from "@/services/services";
import { CustomText } from "./CustomText";

export interface IHeroSectionProps {
  title?: string;
  subTitle?: string;
  bgImageUrl?: string;
}

export const HeroSection = async ({
  title,
  subTitle,
  bgImageUrl,
}: IHeroSectionProps) => {
  const data = await getHeroSection();

  if (!data) return null;

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
          src={bgImageUrl ?? data.attributes.Capa.data.attributes.url}
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
                  {title ?? data.attributes.Titulo}
                </Typography>
              </Animate>

              <Animate
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: "30px" }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {subTitle ? (
                  <Typography
                    sx={{
                      maxWidth: "50ch",
                      color: "white",
                    }}
                  >
                    {subTitle}
                  </Typography>
                ) : (
                  <CustomText
                    data={data.attributes.Descricao}
                    containerProps={{
                      maxWidth: "50ch",
                      color: "white",
                    }}
                  />
                )}
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
                {data.attributes.TextoBotao}
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
