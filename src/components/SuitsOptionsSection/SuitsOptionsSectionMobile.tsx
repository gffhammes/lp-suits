import { Box, Container, Stack, Typography } from "@mui/material";
import { ISuitsOption } from "./SuitsOptionsSection";
import { SuitsOptions } from "./SuitsOptions";

export interface ISuitsOptionsSectionMobileProps {
  suitsOptions: ISuitsOption[];
}

export const SuitsOptionsSectionMobile = ({
  suitsOptions,
}: ISuitsOptionsSectionMobileProps) => {
  return (
    <Box>
      <Stack gap={4}>
        <Container>
          <Typography variant="h2" textAlign="center" maxWidth="20ch">
            Veja os melhores trajes para cada evento:
          </Typography>
        </Container>

        <SuitsOptions suitsOptions={suitsOptions} />
      </Stack>
    </Box>
  );
};
