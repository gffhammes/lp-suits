"use client";

import { useBreakpoints } from "@/hooks/useBreakpoints";
import { SuitsOptionsSectionDesktop } from "./SuitsOptionsSectionDesktop";
import { SuitsOptionsSectionMobile } from "./SuitsOptionsSectionMobile";
import { ISecaoOpcoesTrajes } from "@/services/interfaces";

export interface ISuitsOptionsSectionResponsiveProps {
  data: ISecaoOpcoesTrajes;
}

export const SuitsOptionsSectionResponsive = ({
  data,
}: ISuitsOptionsSectionResponsiveProps) => {
  const { md } = useBreakpoints();

  if (md) return <SuitsOptionsSectionDesktop data={data} />;

  return <SuitsOptionsSectionMobile data={data} />;
};
