import { IOpcaoTraje } from "@/services/interfaces";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CustomText } from "../CustomText";

export interface ISuitsOptionCardProps {
  option?: IOpcaoTraje;
}

export const SuitsOptionCard = ({ option }: ISuitsOptionCardProps) => {
  if (!option) return null;

  return (
    <Stack direction="row" height="17rem">
      <Box
        sx={{
          height: "100%",
          flex: "0 0 10rem",
          position: "relative",
        }}
      >
        <Image
          fill
          src={option.Fotos.data[0].attributes.url}
          alt="Suits Trajes"
          objectFit="cover"
        />
      </Box>

      <Box
        sx={{
          backgroundColor: "secondary.main",
          px: 2,
          py: 2,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Stack gap={1}>
          <Typography variant="h3" fontSize={16}>
            {option.Titulo}
          </Typography>

          <CustomText data={option.Descricao} />
        </Stack>
      </Box>
    </Stack>
  );
};
