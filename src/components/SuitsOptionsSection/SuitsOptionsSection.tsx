"use client";

import casamento_noturno1 from "../../../public/images/casamento not1.jpeg";
import casamento_noturno2 from "../../../public/images/casamento not2.jpeg";
import casamento_noturno3 from "../../../public/images/casamento not3.jpeg";

import casamento_diurno1 from "../../../public/images/casamento diu1.jpeg";
import casamento_diurno2 from "../../../public/images/casamento diu2.jpeg";
import casamento_diurno3 from "../../../public/images/casamento diu3.jpeg";

import formatura_noturna1 from "../../../public/images/festa de gala 2.jpeg";
import formatura_noturna2 from "../../../public/images/casamento not3.jpeg";
import formatura_noturna3 from "../../../public/images/2H0A9939.jpeg";

import evento_corporativo1 from "../../../public/images/corp4.jpeg";
import evento_corporativo2 from "../../../public/images/corp2.jpeg";
import evento_corporativo3 from "../../../public/images/corp3.jpeg";

import festa_de_gala1 from "../../../public/images/2H0A9972.jpeg";
import festa_de_gala2 from "../../../public/images/casamento not2.jpeg";
import festa_de_gala3 from "../../../public/images/2H0A1377-2.jpeg";

import coquetel1 from "../../../public/images/2H0A0530.jpeg";
import coquetel2 from "../../../public/images/2H0A0667.jpeg";
import coquetel3 from "../../../public/images/2H0A0536.jpeg";

import { useBreakpoints } from "@/hooks/useBreakpoints";
import { SuitsOptionsSectionDesktop } from "./SuitsOptionsSectionDesktop";
import { SuitsOptionsSectionMobile } from "./SuitsOptionsSectionMobile";

export interface ISuitsOptionsSectionProps {}

export const SuitsOptionsSection = (props: ISuitsOptionsSectionProps) => {
  const { md } = useBreakpoints();

  if (md) return <SuitsOptionsSectionDesktop suitsOptions={suitsOptions} />;

  return <SuitsOptionsSectionMobile suitsOptions={suitsOptions} />;
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
    photos: [
      casamento_noturno1.src,
      casamento_noturno2.src,
      casamento_noturno3.src,
    ],
  },
  {
    label: "Casamento Diurno",
    description:
      "Em um casamento durante o dia, cores mais claras são bem-vindas, como bege, cinza claro ou azul claro. Trajes em linho ou algodão garantem conforto e elegância. Gravatas em tons pastéis e sapatos marrons ou de camurça complementam o visual.",
    photos: [
      casamento_diurno1.src,
      casamento_diurno2.src,
      casamento_diurno3.src,
    ],
  },
  {
    label: "Formatura Noturna",
    description:
      "Para uma formatura à noite, o look precisa equilibrar formalidade e estilo. Um terno slim preto ou azul-marinho, combinado com gravata ou laço em tons de prata, dourado ou vinho, confere sofisticação. Sapatos sociais em couro são indispensáveis.",
    photos: [
      formatura_noturna1.src,
      formatura_noturna2.src,
      formatura_noturna3.src,
    ],
  },
  {
    label: "Evento Corporativo",
    description:
      "Em eventos corporativos, a discrição é essencial. Um terno em tons de cinza, azul ou preto, com camisa social branca ou azul-clara, transmite profissionalismo. Gravatas discretas e sapatos sociais pretos ou marrons completam o visual.",
    photos: [
      evento_corporativo1.src,
      evento_corporativo2.src,
      evento_corporativo3.src,
    ],
  },
  {
    label: "Festa de Gala",
    description:
      "Para festas de gala, um smoking preto ou azul meia-noite é a escolha mais adequada. O uso de laço preto, camisa branca com botões discretos e sapatos de verniz traz um ar de luxo e sofisticação.",
    photos: [festa_de_gala1.src, festa_de_gala2.src, festa_de_gala3.src],
  },
  {
    label: "Coquetel",
    description:
      "Em coquetéis, o estilo pode ser um pouco mais descontraído, mas ainda elegante. Um blazer combinado com calça social, em tons como cinza ou azul, com camisa social sem gravata, é moderno e adequado. Sapatos marrons ou mocassins completam o visual. s",
    photos: [coquetel1.src, coquetel2.src, coquetel3.src],
  },
];
