import { Box, Container, Stack, Typography } from "@mui/material";
import { SuitsOptionsSelector } from "./SuitsOptionsSelector";
import { SuitsOptions } from "./SuitsOptions";

export interface ISuitsOptionsSectionProps {}

export const SuitsOptionsSection = (props: ISuitsOptionsSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={8}>
          <Stack alignItems="center" gap={2}>
            <Typography variant="h2" textAlign="center" maxWidth="13ch">
              Conheça algumas opções de ternos
            </Typography>

            <Typography textAlign="center" maxWidth="29ch">
              Selecione um evento e veja alguns trajes que temos a disposição
            </Typography>
          </Stack>

          <SuitsOptions suitsOptions={suitsOptions} />
        </Stack>
      </Container>
    </Box>
  );
};

export interface ISuitsOption {
  label: string;
  description: string;
  photos: string[];
}

const suitsOptions: ISuitsOption[] = [
  {
    label: "Casamento Noturno",
    description:
      "Para um casamento à noite, o mais indicado é um terno formal em tons escuros, como preto, azul-marinho ou grafite. O estilo clássico ou slim é ideal, acompanhado de uma gravata em tons sóbrios e sapatos de couro polido. Um smoking também é uma escolha elegante para eventos mais formais.",
    photos: [""],
  },
  {
    label: "Casamento Diurno",
    description:
      "Em um casamento durante o dia, cores mais claras são bem-vindas, como bege, cinza claro ou azul claro. Trajes em linho ou algodão garantem conforto e elegância. Gravatas em tons pastéis e sapatos marrons ou de camurça complementam o visual.",
    photos: [""],
  },
  {
    label: "Formatura Noturna",
    description:
      "Para uma formatura à noite, o look precisa equilibrar formalidade e estilo. Um terno slim preto ou azul-marinho, combinado com gravata ou laço em tons de prata, dourado ou vinho, confere sofisticação. Sapatos sociais em couro são indispensáveis.",
    photos: [""],
  },
  {
    label: "Evento Corporativo",
    description:
      "Em eventos corporativos, a discrição é essencial. Um terno em tons de cinza, azul ou preto, com camisa social branca ou azul-clara, transmite profissionalismo. Gravatas discretas e sapatos sociais pretos ou marrons completam o visual.",
    photos: [""],
  },
  {
    label: "Festa de Gala",
    description:
      "Para festas de gala, um smoking preto ou azul meia-noite é a escolha mais adequada. O uso de laço preto, camisa branca com botões discretos e sapatos de verniz traz um ar de luxo e sofisticação.",
    photos: [""],
  },
  {
    label: "Coquetel",
    description:
      "Em coquetéis, o estilo pode ser um pouco mais descontraído, mas ainda elegante. Um blazer combinado com calça social, em tons como cinza ou azul, com camisa social sem gravata, é moderno e adequado. Sapatos marrons ou mocassins completam o visual. s",
    photos: [""],
  },
];
