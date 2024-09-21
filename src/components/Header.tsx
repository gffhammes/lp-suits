"use client";

import { Box, Container, Slide, useScrollTrigger } from "@mui/material";
import { Logo } from "./Logo";

export interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  return (
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
          <Logo height={40} width={40} />
        </Container>
      </Box>
    </Slide>
  );
};
