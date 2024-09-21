import { Box, Container, Stack } from "@mui/material";
import { Address } from "./Address";
import { Map } from "./Map";
import { OtherServices } from "./OtherServices";
import Image from "next/image";
import foto1 from "../../../public/images/2H0A9578.jpeg";

export interface IFinalSectionDesktopProps {}

export const FinalSectionDesktop = (props: IFinalSectionDesktopProps) => {
  return (
    <Container maxWidth="md">
      <Box
        display="grid"
        gridTemplateColumns={"1fr .25fr 1fr"}
        gridTemplateRows={"1fr 1fr 1fr"}
        gridTemplateAreas={`
          "address  map   map"
          "photo1   photo1    photo2"
          "services photo3  photo3"
        `}
        gap={2}
      >
        <Stack
          justifyContent="center"
          sx={{
            backgroundColor: "secondary.main",
            px: 3,
            py: 5,
            gridArea: "address",
          }}
        >
          <Address />
        </Stack>

        <Box
          sx={{
            gridArea: "map",
          }}
        >
          <Map height="250" width="100%" />
        </Box>

        <Stack
          sx={{
            backgroundColor: "secondary.main",
            px: 3,
            py: 5,
            gridArea: "services",
          }}
          justifyContent="center"
        >
          <OtherServices />
        </Stack>

        <Box
          sx={{
            gridArea: "photo1",
            position: "relative",
          }}
        >
          <Image fill src={foto1.src} alt="Suits Trajes" objectFit="cover" />
        </Box>

        <Box
          sx={{
            gridArea: "photo2",
            position: "relative",
          }}
        >
          <Image fill src={foto1.src} alt="Suits Trajes" objectFit="cover" />
        </Box>

        <Box
          sx={{
            gridArea: "photo3",
            position: "relative",
          }}
        >
          <Image fill src={foto1.src} alt="Suits Trajes" objectFit="cover" />
        </Box>
      </Box>
    </Container>
  );
};
