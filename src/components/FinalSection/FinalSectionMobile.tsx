import { Container, Stack } from "@mui/material";
import { Address } from "./Address";
import { Map } from "./Map";
import { OtherServices } from "./OtherServices";

export interface IFinalSectionMobileProps {}

export const FinalSectionMobile = (props: IFinalSectionMobileProps) => {
  return (
    <Stack gap={4}>
      <Container>
        <Address />
      </Container>

      <Map height="300" width="100%" />

      <Container sx={{ mt: 10 }}>
        <OtherServices />
      </Container>
    </Stack>
  );
};
