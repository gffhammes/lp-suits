import { Stack, Typography } from "@mui/material";

export interface IAddressProps {}

export const Address = (props: IAddressProps) => {
  return (
    <Stack gap={2}>
      <Typography variant="h2">Venha nos visitar!</Typography>

      <Typography>
        R. Dona Francisca, 2590
        <br />
        Saguaçu - Joinville/SC
      </Typography>
    </Stack>
  );
};
