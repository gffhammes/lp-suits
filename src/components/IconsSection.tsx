import {
  Box,
  Button,
  Container,
  Stack,
  SvgIconProps,
  Typography,
} from "@mui/material";
import { JSXElementConstructor } from "react";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";

export interface IIconsSectionProps {}

export const IconsSection = (props: IIconsSectionProps) => {
  return (
    <Container>
      <Box
        display="grid"
        gap={8}
        justifyItems="flex-start"
        gridTemplateAreas={{
          xs: `
            'h2Mobile'
            'items'
            'cta'
          `,
          sm: `
            'h2Desktop  items'
            'nothing    items'
          `,
        }}
      >
        <Stack
          gridArea="h2Desktop"
          sx={{
            position: "sticky",
            top: 40,
            display: { xs: "none", sm: "flex" },
          }}
          gap={4}
          alignItems="flex-start"
        >
          <Typography variant="h2">
            Por que alugar um traje na Suits?
          </Typography>

          <Button sx={{ position: "sticky", top: 0 }} variant="contained">
            Agendar visita
          </Button>
        </Stack>

        <Typography
          variant="h2"
          gridArea="h2Mobile"
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          Por que alugar um traje na Suits?
        </Typography>

        <Stack gridArea="items" gap={8}>
          {iconsItems.map((iconItem) => {
            return (
              <Stack key={iconItem.title} direction="row" gap={2}>
                <Box sx={{ fontSize: 48 }}>
                  <iconItem.Icon color="primary" fontSize="inherit" />
                </Box>

                <Stack gap={2}>
                  <Typography variant="h3">{iconItem.title}</Typography>
                  <Typography>{iconItem.description}</Typography>
                </Stack>
              </Stack>
            );
          })}
        </Stack>

        <Button
          sx={{
            gridArea: "cta",

            display: { xs: "block", sm: "none" },
          }}
          variant="contained"
        >
          Agendar visita
        </Button>
      </Box>
    </Container>
  );
};

interface IIconsItem {
  Icon: JSXElementConstructor<SvgIconProps>;
  title: string;
  description: string;
}

const iconsItems: IIconsItem[] = [
  {
    Icon: CheckroomIcon,
    title: "Todos os tamanhos",
    description:
      "Oferecemos trajes famosos e elegantes com tamanhos que variam desde PPP até XXXG.",
  },
  {
    Icon: WorkspacePremiumOutlinedIcon,
    title: "Atendimento diferenciado",
    description:
      "Na Suits você será atendido por  profissionais que te ajudarão a  encontrar o seu melhor traje.",
  },
  {
    Icon: FullscreenExitIcon,
    title: "Ajustes finos",
    description:
      "Todos os trajes alugados passam por um alfaiate e são ajustados sob medida para seu corpo.",
  },
  {
    Icon: StyleOutlinedIcon,
    title: "Variedade & qualidade",
    description:
      "Temos ternos com corte italiano, francês, e cores que vão do azul ao verde militar, perfeitos para qualquer ocasião.",
  },
];
