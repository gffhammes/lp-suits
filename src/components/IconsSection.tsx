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
import { getDefaultWhatsappLink } from "@/utils";
import { Animate } from "./Animate";
import { IParagraph, ISecaoDiferenciais } from "@/services/interfaces";
import { CustomText } from "./CustomText";

export interface IIconsSectionProps {}

export const IconsSection = async (props: IIconsSectionProps) => {
  const iconsItems: IIconsItem[] = [
    {
      Icon: CheckroomIcon,
      title: data.attributes.Diferenciais[0].Titulo,
      description: data.attributes.Diferenciais[0].Descricao,
    },
    {
      Icon: WorkspacePremiumOutlinedIcon,
      title: data.attributes.Diferenciais[1].Titulo,
      description: data.attributes.Diferenciais[1].Descricao,
    },
    {
      Icon: FullscreenExitIcon,
      title: data.attributes.Diferenciais[2].Titulo,
      description: data.attributes.Diferenciais[2].Descricao,
    },
    {
      Icon: StyleOutlinedIcon,
      title: data.attributes.Diferenciais[3].Titulo,
      description: data.attributes.Diferenciais[3].Descricao,
    },
  ];

  return (
    <Container>
      <Box
        display="grid"
        gap={8}
        justifyContent="center"
        justifyItems="flex-start"
        gridTemplateColumns={{ xs: "1fr", md: "400px 400px" }}
        gridTemplateAreas={{
          xs: `
            'h2Mobile'
            'items'
            'cta'
          `,
          md: `
            'h2Desktop  items'
            'nothing    items'
          `,
        }}
      >
        <Stack
          gridArea="h2Desktop"
          sx={{
            position: "sticky",
            top: "40%",
            display: { xs: "none", md: "flex" },
          }}
          gap={4}
          alignItems="flex-start"
        >
          <Typography variant="h2" maxWidth="15ch">
            {data.attributes.Titulo}
          </Typography>

          <Button
            sx={{ position: "sticky", top: 0 }}
            variant="contained"
            LinkComponent={"a"}
            href={getDefaultWhatsappLink()}
            target="_blank"
          >
            {data.attributes.TextoBotao}
          </Button>
        </Stack>

        <Typography
          variant="h2"
          gridArea="h2Mobile"
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {data.attributes.Titulo}
        </Typography>

        <Stack gridArea="items" gap={8}>
          {iconsItems.map((iconItem) => {
            return (
              <Animate
                key={iconItem.title}
                initial={{ opacity: 0, x: "-30px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true, margin: "-35%" }}
                transition={{
                  duration: 1,
                }}
              >
                <Stack direction="row" gap={2}>
                  <Box sx={{ fontSize: 48 }}>
                    <iconItem.Icon color="primary" fontSize="inherit" />
                  </Box>

                  <Stack gap={2}>
                    <Typography variant="h3">{iconItem.title}</Typography>

                    <CustomText data={iconItem.description} />
                  </Stack>
                </Stack>
              </Animate>
            );
          })}
        </Stack>

        <Button
          sx={{
            gridArea: "cta",

            display: { xs: "block", md: "none" },
          }}
          variant="contained"
          LinkComponent={"a"}
          href={getDefaultWhatsappLink()}
          target="_blank"
        >
          {data.attributes.TextoBotao}
        </Button>
      </Box>
    </Container>
  );
};

interface IIconsItem {
  Icon: JSXElementConstructor<SvgIconProps>;
  title: string;
  description: IParagraph[];
}

const data: ISecaoDiferenciais = {
  id: 1,
  attributes: {
    Titulo: "Por que alugar um traje na Suits?",
    TextoBotao: "AGENDAR VISITA",
    createdAt: "2024-09-27T12:50:02.439Z",
    updatedAt: "2024-09-30T23:03:37.801Z",
    Diferenciais: [
      {
        id: 1,
        Titulo: "Todos os tamanhos",
        Descricao: [
          {
            type: "paragraph",
            children: [
              {
                text: "Disponibilizamos trajes sofisticados em uma ampla variedade de tamanhos, do PPP ao XXXG, garantindo o ajuste ideal para todos.",
                type: "text",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        Titulo: "Atendimento diferenciado",
        Descricao: [
          {
            type: "paragraph",
            children: [
              {
                text: "Na Suits, nossos especialistas estão prontos para guiá-lo na escolha do traje que melhor reflete seu estilo e ocasião.",
                type: "text",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        Titulo: "Ajustes finos",
        Descricao: [
          {
            type: "paragraph",
            children: [
              {
                text: "Todos os trajes passam por ajustes sob medida com alfaiates experientes, assegurando um caimento impecável para você.",
                type: "text",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        Titulo: "Variedade & qualidade",
        Descricao: [
          {
            type: "paragraph",
            children: [
              {
                text: "Nossa coleção oferece uma seleção de trajes em diversas cores e estilos, garantindo opções elegantes para qualquer ocasião especial.",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
  },
};
