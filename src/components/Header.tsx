"use client";

import {
  Box,
  Container,
  Slide,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import logo from "../../public/images/logo suits branca 01 3.png";
import Image from "next/image";

export interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  return (
    <>
      <Container sx={{ position: "absolute", zIndex: 999, pt: 5 }}>
        <Image
          src={logo.src}
          height={100}
          width={100}
          alt="Logo Suits"
          style={{ objectFit: "contain" }}
        />
      </Container>

      <Slide in={trigger}>
        <Box
          sx={{
            width: "100%",
            position: "fixed",
            top: 0,
            zIndex: 999,
            backgroundColor: "rgba(30, 30, 30,.9)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid #3c3c3c",
            py: 1,
            transition: ".3s ease all",
          }}
        >
          <Container>
            <Image
              src={logo.src}
              height={40}
              width={40}
              alt="Logo Suits"
              style={{ objectFit: "contain", transition: ".3s ease all" }}
            />
          </Container>
        </Box>
      </Slide>
    </>
  );
};
