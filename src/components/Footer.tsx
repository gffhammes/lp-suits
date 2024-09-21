import { Box, Divider, Stack, Typography } from "@mui/material";
import { Logo } from "./Logo";
import Image from "next/image";

export interface IFooterProps {}

export const Footer = (props: IFooterProps) => {
  return (
    <Stack alignItems="center" gap={10} pb={10}>
      <Stack direction="row" alignItems="center" gap={4} width="100%">
        <Divider
          sx={{ flex: "1 1 100%", borderColor: "rgba(255,255,255,.4)" }}
        />

        <Box>
          <Logo height={100} width={100} />
        </Box>

        <Divider
          sx={{ flex: "1 1 100%", borderColor: "rgba(255,255,255,.4)" }}
        />
      </Stack>

      <Stack gap={2}>
        <Typography>
          © {new Date().getFullYear()} - Suits Aluguel de Trajes
        </Typography>

        <Stack
          direction="row"
          alignItems="flex-end"
          gap={0.5}
          component="a"
          href="https://www.studiodireto.com.br/"
          target="_blank"
          justifyContent="center"
        >
          <Typography lineHeight={0.75}>Desenvolvido por</Typography>

          <Box sx={{ position: "relative", height: "1rem", width: "4rem" }}>
            <Image
              src="https://www.studiodireto.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_direto_branca.6601ccc1.png&w=1920&q=75"
              alt="Direto."
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
