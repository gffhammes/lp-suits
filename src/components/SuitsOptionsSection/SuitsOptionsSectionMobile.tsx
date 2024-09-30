import { Box, Container, Stack, Typography } from "@mui/material";
import { SuitsOptions } from "./SuitsOptions";
import { ISecaoOpcoesTrajes } from "@/services/interfaces";

export interface ISuitsOptionsSectionMobileProps {
  data: ISecaoOpcoesTrajes;
}

export const SuitsOptionsSectionMobile = ({
  data,
}: ISuitsOptionsSectionMobileProps) => {
  return (
    <Box>
      <Stack gap={4}>
        <Container>
          <Typography
            variant="h2"
            textAlign="center"
            maxWidth="20ch"
            sx={{ mx: "auto" }}
          >
            {data.attributes.Titulo}
          </Typography>
        </Container>

        <SuitsOptions data={data} />
      </Stack>
    </Box>
  );
};
