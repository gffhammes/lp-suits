import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { DiamondPhotos } from "./DiamondPhotos";
import { getDefaultWhatsappLink } from "@/utils";
import { Animate } from "../Animate";
import { getDiamondPhotosSection } from "@/services/services";
import { CustomText } from "../CustomText";

export interface IDiamondPhotosSectionProps {}

export const DiamondPhotosSection = async (
  props: IDiamondPhotosSectionProps
) => {
  const data = await getDiamondPhotosSection();

  if (!data) return null;

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
              {data.attributes.Titulo}
            </Typography>
          </Animate>

          <Animate
            initial={{ opacity: 0, y: "30px" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, delay: 1 }}
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
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 1.5 }}
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
