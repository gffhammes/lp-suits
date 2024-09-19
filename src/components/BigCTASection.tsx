import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image2 from "../../public/images/suits2.png";

export interface IBigCTASectionProps {}

export const BigCTASection = (props: IBigCTASectionProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Stack sx={{ p: 3, pr: 0, flex: "0 0 16rem" }}>
        <Typography color="secondary" variant="h2" fontSize={24}>
          Quer se vestir com muita elegância?
        </Typography>

        <Typography color="secondary">
          <strong>Clique aqui</strong> para agendar uma visita e{" "}
          <strong>ganhe uma consultoria de estilo</strong> para seu evento
        </Typography>
      </Stack>

      <Box sx={{ flex: "1 1 100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            bottom: 0,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "15rem",
            }}
          >
            <Image
              src={image2.src}
              alt="Terno"
              fill
              style={{
                position: "absolute",
                filter: "drop-shadow(5px 5px 5px #222)",
                right: 0,
                bottom: 0,
                objectFit: "none",
                objectPosition: "27% 12%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
