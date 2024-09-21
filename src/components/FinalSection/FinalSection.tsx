"use client";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { FinalSectionMobile } from "./FinalSectionMobile";
import { FinalSectionDesktop } from "./FinalSectionDesktop";

export interface IFinalSectionProps {}

export const FinalSection = (props: IFinalSectionProps) => {
  const { sm } = useBreakpoints();

  if (sm) return <FinalSectionDesktop />;

  return <FinalSectionMobile />;
};
