import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image2 from "../../public/images/suits2.png";

export interface IBigCTASectionProps {}

export const BigCTASection = (props: IBigCTASectionProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        maxWidth: { xs: undefined, md: 900 - 24 - 24 },
        mx: "auto",
      }}
    >
      <Stack
        direction="row"
        sx={{
          maxWidth: { xs: undefined, sm: 500, md: 700 },
          mx: "auto",
        }}
      >
        <Stack
          sx={{
            p: { xs: 3, md: 6 },
            pr: 0,
            flex: { xs: "0 0 16rem", md: "0 0 24rem" },
          }}
          gap={1}
        >
          <Typography
            color="secondary"
            variant="h3"
            fontSize={{ xs: 24, md: 32 }}
          >
            Quer se vestir com muita elegância?
          </Typography>

          <Typography color="secondary" maxWidth="32ch">
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
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "25rem", md: "30rem" },
                height: { xs: "28rem", md: "38rem" },
              }}
            >
              <Box
                component={Image}
                src={image2.src}
                alt="Terno"
                fill
                sx={{
                  position: "absolute",
                  filter: "drop-shadow(5px 5px 5px #222)",
                  right: 0,
                  bottom: 0,
                  objectFit: "contain",
                  transform: "translate(-24%, 40%)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
