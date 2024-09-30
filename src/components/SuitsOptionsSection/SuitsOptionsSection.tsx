import { getSuitsOptions } from "@/services/services";
import { SuitsOptionsSectionResponsive } from "./SuitsOptionsSectionResponsive";

export interface ISuitsOptionsSectionProps {}

export const SuitsOptionsSection = async (props: ISuitsOptionsSectionProps) => {
  const data = await getSuitsOptions();

  if (!data) return null;

  return <SuitsOptionsSectionResponsive data={data} />;
};
