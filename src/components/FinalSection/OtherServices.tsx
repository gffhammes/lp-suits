import { Stack, Typography } from "@mui/material";

export interface IOtherServicesProps {}

export const OtherServices = (props: IOtherServicesProps) => {
  return (
    <Stack gap={2}>
      <Typography variant="h2">Outros serviços</Typography>

      <Typography>
        Também contamos com serviço de <strong>barbearia</strong> e{" "}
        <strong>dia do noivo.</strong>
      </Typography>
    </Stack>
  );
};
