import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Logo } from "./Logo";
import { getDefaultWhatsappLink } from "@/utils";
import { HeroSectionArrowButton } from "./HeroSectionArrowButton";
import { Animate } from "./Animate";
import { CustomText } from "./CustomText";
import { IPrimeiraSecao } from "@/services/interfaces";

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

const data: IPrimeiraSecao = {
  id: 1,
  attributes: {
    Titulo: "Aluguel de trajes com a elegância que você merece.",
    Descricao: [
      {
        type: "paragraph",
        children: [
          {
            text: "Tenha muita presença com ",
            type: "text",
          },
          {
            bold: true,
            text: "trajes masculinos elegantes",
            type: "text",
          },
          {
            text: " e ajustados com perfeição para qualquer evento.",
            type: "text",
          },
        ],
      },
    ],
    TextoBotao: "ALUGAR TRAJE",
    createdAt: "2024-09-27T12:40:53.453Z",
    updatedAt: "2024-10-01T20:23:56.076Z",
    Capa: {
      data: {
        id: 1,
        attributes: {
          name: "bride-adjusting-her-boyfriend-s-bow-tie.webp",
          alternativeText: null,
          caption: null,
          width: 3000,
          height: 2000,
          formats: {
            large: {
              ext: ".webp",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727440847/Suits/large_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7.webp",
              hash: "large_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
              mime: "image/webp",
              name: "large_bride-adjusting-her-boyfriend-s-bow-tie.webp",
              path: null,
              size: 31.28,
              width: 1000,
              height: 667,
              sizeInBytes: 31280,
              provider_metadata: {
                public_id:
                  "Suits/large_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
                resource_type: "image",
              },
            },
            small: {
              ext: ".webp",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727440847/Suits/small_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7.webp",
              hash: "small_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
              mime: "image/webp",
              name: "small_bride-adjusting-her-boyfriend-s-bow-tie.webp",
              path: null,
              size: 13.53,
              width: 500,
              height: 333,
              sizeInBytes: 13532,
              provider_metadata: {
                public_id:
                  "Suits/small_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
                resource_type: "image",
              },
            },
            medium: {
              ext: ".webp",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727440847/Suits/medium_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7.webp",
              hash: "medium_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
              mime: "image/webp",
              name: "medium_bride-adjusting-her-boyfriend-s-bow-tie.webp",
              path: null,
              size: 22.26,
              width: 750,
              height: 500,
              sizeInBytes: 22264,
              provider_metadata: {
                public_id:
                  "Suits/medium_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
                resource_type: "image",
              },
            },
            thumbnail: {
              ext: ".webp",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727440847/Suits/thumbnail_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7.webp",
              hash: "thumbnail_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
              mime: "image/webp",
              name: "thumbnail_bride-adjusting-her-boyfriend-s-bow-tie.webp",
              path: null,
              size: 5.39,
              width: 234,
              height: 156,
              sizeInBytes: 5388,
              provider_metadata: {
                public_id:
                  "Suits/thumbnail_bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
                resource_type: "image",
              },
            },
          },
          hash: "bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
          ext: ".webp",
          mime: "image/webp",
          size: 128.42,
          url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727440847/Suits/bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7.webp",
          previewUrl: null,
          provider: "cloudinary",
          provider_metadata: {
            public_id:
              "Suits/bride_adjusting_her_boyfriend_s_bow_tie_ad1bbf50b7",
            resource_type: "image",
          },
          createdAt: "2024-09-27T12:40:48.299Z",
          updatedAt: "2024-09-27T12:40:48.299Z",
        },
      },
    },
  },
};
