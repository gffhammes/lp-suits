"use client";

import { useBreakpoints } from "@/hooks/useBreakpoints";
import { SuitsOptionsSectionDesktop } from "./SuitsOptionsSectionDesktop";
import { SuitsOptionsSectionMobile } from "./SuitsOptionsSectionMobile";
import { ISecaoOpcoesTrajes } from "@/services/interfaces";
import { Box } from "@mui/material";

export interface ISuitsOptionsSectionResponsiveProps {
  data: ISecaoOpcoesTrajes;
}

export const SuitsOptionsSectionResponsive = ({
  data,
}: ISuitsOptionsSectionResponsiveProps) => {
  const { md } = useBreakpoints();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SuitsOptionsSectionDesktop data={data} />
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <SuitsOptionsSectionMobile data={data} />
      </Box>
    </>
  );
};
