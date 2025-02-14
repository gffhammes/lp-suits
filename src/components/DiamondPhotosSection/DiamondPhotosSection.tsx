import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { DiamondPhotos } from "./DiamondPhotos";
import { getDefaultWhatsappLink } from "@/utils";
import { Animate } from "../Animate";
import { CustomText } from "../CustomText";
import { ISecaoFotosDiamante } from "@/services/interfaces";

export interface IDiamondPhotosSectionProps {}

export const DiamondPhotosSection = async (
  props: IDiamondPhotosSectionProps
) => {
  return (
    <Box>
      <Container>
        <Stack alignItems="center" gap={4}>
          <Animate
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-35%" }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" textAlign="center" maxWidth="20ch">
              {data.attributes.Titulo}
            </Typography>
          </Animate>

          <Animate
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-35%" }}
            transition={{ duration: 1 }}
          >
            <CustomText
              data={data.attributes.Descricao}
              containerProps={{
                maxWidth: "35ch",
                textAlign: "center",
              }}
            />
          </Animate>

          <Animate
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-35%" }}
            transition={{ duration: 1 }}
          >
            <Button
              variant="contained"
              LinkComponent={"a"}
              href={getDefaultWhatsappLink()}
              target="_blank"
            >
              {data.attributes.TextoBotao}
            </Button>
          </Animate>
        </Stack>
      </Container>

      <DiamondPhotos
        photo1={data.attributes.Foto1}
        photo2={data.attributes.Foto2}
        photo3={data.attributes.Foto3}
      />
    </Box>
  );
};

const data: ISecaoFotosDiamante = {
  id: 1,
  attributes: {
    Titulo: "O traje ideal para seu evento está aqui",
    Descricao: [
      {
        type: "paragraph",
        children: [
          {
            text: "Na Suits você encontra a maior variedade de cores e modelos disponíveis no mercado.",
            type: "text",
          },
        ],
      },
    ],
    TextoBotao: "AGENDAR VISITA",
    createdAt: "2024-09-27T12:48:48.992Z",
    updatedAt: "2024-09-27T12:48:48.992Z",
    Foto1: {
      data: {
        id: 2,
        attributes: {
          name: "2H0A9578.jpeg",
          alternativeText: null,
          caption: null,
          width: 3000,
          height: 2000,
          formats: {
            large: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/large_2_H0_A9578_6616a9fec7.jpg",
              hash: "large_2_H0_A9578_6616a9fec7",
              mime: "image/jpeg",
              name: "large_2H0A9578.jpeg",
              path: null,
              size: 95.68,
              width: 1000,
              height: 667,
              sizeInBytes: 95676,
              provider_metadata: {
                public_id: "Suits/large_2_H0_A9578_6616a9fec7",
                resource_type: "image",
              },
            },
            small: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/small_2_H0_A9578_6616a9fec7.jpg",
              hash: "small_2_H0_A9578_6616a9fec7",
              mime: "image/jpeg",
              name: "small_2H0A9578.jpeg",
              path: null,
              size: 24.67,
              width: 500,
              height: 333,
              sizeInBytes: 24667,
              provider_metadata: {
                public_id: "Suits/small_2_H0_A9578_6616a9fec7",
                resource_type: "image",
              },
            },
            medium: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/medium_2_H0_A9578_6616a9fec7.jpg",
              hash: "medium_2_H0_A9578_6616a9fec7",
              mime: "image/jpeg",
              name: "medium_2H0A9578.jpeg",
              path: null,
              size: 51,
              width: 750,
              height: 500,
              sizeInBytes: 50999,
              provider_metadata: {
                public_id: "Suits/medium_2_H0_A9578_6616a9fec7",
                resource_type: "image",
              },
            },
            thumbnail: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/thumbnail_2_H0_A9578_6616a9fec7.jpg",
              hash: "thumbnail_2_H0_A9578_6616a9fec7",
              mime: "image/jpeg",
              name: "thumbnail_2H0A9578.jpeg",
              path: null,
              size: 7.08,
              width: 234,
              height: 156,
              sizeInBytes: 7082,
              provider_metadata: {
                public_id: "Suits/thumbnail_2_H0_A9578_6616a9fec7",
                resource_type: "image",
              },
            },
          },
          hash: "2_H0_A9578_6616a9fec7",
          ext: ".jpeg",
          mime: "image/jpeg",
          size: 943.2,
          url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/2_H0_A9578_6616a9fec7.jpg",
          previewUrl: null,
          provider: "cloudinary",
          provider_metadata: {
            public_id: "Suits/2_H0_A9578_6616a9fec7",
            resource_type: "image",
          },
          createdAt: "2024-09-27T12:48:32.159Z",
          updatedAt: "2024-09-27T12:48:32.159Z",
        },
      },
    },
    Foto2: {
      data: {
        id: 4,
        attributes: {
          name: "2H0A9848.jpeg",
          alternativeText: null,
          caption: null,
          width: 3000,
          height: 2000,
          formats: {
            large: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441312/Suits/large_2_H0_A9848_b5bca58ebc.jpg",
              hash: "large_2_H0_A9848_b5bca58ebc",
              mime: "image/jpeg",
              name: "large_2H0A9848.jpeg",
              path: null,
              size: 159.57,
              width: 1000,
              height: 667,
              sizeInBytes: 159570,
              provider_metadata: {
                public_id: "Suits/large_2_H0_A9848_b5bca58ebc",
                resource_type: "image",
              },
            },
            small: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/small_2_H0_A9848_b5bca58ebc.jpg",
              hash: "small_2_H0_A9848_b5bca58ebc",
              mime: "image/jpeg",
              name: "small_2H0A9848.jpeg",
              path: null,
              size: 47.61,
              width: 500,
              height: 333,
              sizeInBytes: 47610,
              provider_metadata: {
                public_id: "Suits/small_2_H0_A9848_b5bca58ebc",
                resource_type: "image",
              },
            },
            medium: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/medium_2_H0_A9848_b5bca58ebc.jpg",
              hash: "medium_2_H0_A9848_b5bca58ebc",
              mime: "image/jpeg",
              name: "medium_2H0A9848.jpeg",
              path: null,
              size: 96.68,
              width: 750,
              height: 500,
              sizeInBytes: 96682,
              provider_metadata: {
                public_id: "Suits/medium_2_H0_A9848_b5bca58ebc",
                resource_type: "image",
              },
            },
            thumbnail: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441312/Suits/thumbnail_2_H0_A9848_b5bca58ebc.jpg",
              hash: "thumbnail_2_H0_A9848_b5bca58ebc",
              mime: "image/jpeg",
              name: "thumbnail_2H0A9848.jpeg",
              path: null,
              size: 13.18,
              width: 234,
              height: 156,
              sizeInBytes: 13177,
              provider_metadata: {
                public_id: "Suits/thumbnail_2_H0_A9848_b5bca58ebc",
                resource_type: "image",
              },
            },
          },
          hash: "2_H0_A9848_b5bca58ebc",
          ext: ".jpeg",
          mime: "image/jpeg",
          size: 1274.6,
          url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441312/Suits/2_H0_A9848_b5bca58ebc.jpg",
          previewUrl: null,
          provider: "cloudinary",
          provider_metadata: {
            public_id: "Suits/2_H0_A9848_b5bca58ebc",
            resource_type: "image",
          },
          createdAt: "2024-09-27T12:48:33.041Z",
          updatedAt: "2024-09-27T12:56:44.463Z",
        },
      },
    },
    Foto3: {
      data: {
        id: 3,
        attributes: {
          name: "2H0A9939.jpeg",
          alternativeText: null,
          caption: null,
          width: 3000,
          height: 2000,
          formats: {
            large: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/large_2_H0_A9939_c68e4e0183.jpg",
              hash: "large_2_H0_A9939_c68e4e0183",
              mime: "image/jpeg",
              name: "large_2H0A9939.jpeg",
              path: null,
              size: 71.87,
              width: 1000,
              height: 667,
              sizeInBytes: 71869,
              provider_metadata: {
                public_id: "Suits/large_2_H0_A9939_c68e4e0183",
                resource_type: "image",
              },
            },
            small: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441312/Suits/small_2_H0_A9939_c68e4e0183.jpg",
              hash: "small_2_H0_A9939_c68e4e0183",
              mime: "image/jpeg",
              name: "small_2H0A9939.jpeg",
              path: null,
              size: 24.31,
              width: 500,
              height: 333,
              sizeInBytes: 24311,
              provider_metadata: {
                public_id: "Suits/small_2_H0_A9939_c68e4e0183",
                resource_type: "image",
              },
            },
            medium: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/medium_2_H0_A9939_c68e4e0183.jpg",
              hash: "medium_2_H0_A9939_c68e4e0183",
              mime: "image/jpeg",
              name: "medium_2H0A9939.jpeg",
              path: null,
              size: 45.88,
              width: 750,
              height: 500,
              sizeInBytes: 45883,
              provider_metadata: {
                public_id: "Suits/medium_2_H0_A9939_c68e4e0183",
                resource_type: "image",
              },
            },
            thumbnail: {
              ext: ".jpeg",
              url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/thumbnail_2_H0_A9939_c68e4e0183.jpg",
              hash: "thumbnail_2_H0_A9939_c68e4e0183",
              mime: "image/jpeg",
              name: "thumbnail_2H0A9939.jpeg",
              path: null,
              size: 7.67,
              width: 234,
              height: 156,
              sizeInBytes: 7669,
              provider_metadata: {
                public_id: "Suits/thumbnail_2_H0_A9939_c68e4e0183",
                resource_type: "image",
              },
            },
          },
          hash: "2_H0_A9939_c68e4e0183",
          ext: ".jpeg",
          mime: "image/jpeg",
          size: 502.16,
          url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1727441311/Suits/2_H0_A9939_c68e4e0183.jpg",
          previewUrl: null,
          provider: "cloudinary",
          provider_metadata: {
            public_id: "Suits/2_H0_A9939_c68e4e0183",
            resource_type: "image",
          },
          createdAt: "2024-09-27T12:48:32.588Z",
          updatedAt: "2024-09-27T12:48:32.588Z",
        },
      },
    },
  },
};
