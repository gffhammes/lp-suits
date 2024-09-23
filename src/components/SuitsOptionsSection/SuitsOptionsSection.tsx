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
      "Para casamentos noturnos, opte por um terno escuro e formal, como preto ou azul-marinho, com gravata discreta e sapatos polidos.",
    photos: [
      casamento_noturno1.src,
      casamento_noturno2.src,
      casamento_noturno3.src,
    ],
  },
  {
    label: "Casamento Diurno",
    description:
      "Casamentos diurnos pedem ternos claros, como bege ou cinza. Tecidos leves, gravatas suaves e sapatos marrons completam o look.",
    photos: [
      casamento_diurno1.src,
      casamento_diurno2.src,
      casamento_diurno3.src,
    ],
  },
  {
    label: "Formatura Noturna",
    description:
      "Em formaturas noturnas, prefira um terno preto ou azul escuro. Gravatas elegantes e sapatos de couro garantem sofisticação.",
    photos: [
      formatura_noturna1.src,
      formatura_noturna2.src,
      formatura_noturna3.src,
    ],
  },
  {
    label: "Evento Corporativo",
    description:
      "Para eventos corporativos, use um terno em tons de cinza ou azul, com camisa clara e gravata discreta para um visual profissional.",
    photos: [
      evento_corporativo1.src,
      evento_corporativo2.src,
      evento_corporativo3.src,
    ],
  },
  {
    label: "Festa de Gala",
    description:
      "Numa festa de gala, escolha um smoking preto clássico, com laço, camisa branca e sapatos de verniz para máxima elegância.",
    photos: [festa_de_gala1.src, festa_de_gala2.src, festa_de_gala3.src],
  },
  {
    label: "Coquetel",
    description:
      "Coquetéis pedem um look elegante e descontraído. Um blazer, calça social e sapatos marrons garantem estilo e sofisticação.",
    photos: [coquetel1.src, coquetel2.src, coquetel3.src],
  },
];
