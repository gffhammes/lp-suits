import { Box, Stack, Typography } from "@mui/material";
import { ISuitsOption } from "./SuitsOptionsSection";
import Image from "next/image";

export interface ISuitsOptionCardProps {
  option?: ISuitsOption;
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
          src={option.photos[0]}
          alt="Suits Trajes"
          objectFit="cover"
        />
      </Box>

      <Box
        sx={{
          backgroundColor: "secondary.main",
          px: 2,
          py: 3,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Stack gap={1}>
          <Typography variant="h3">{option.label}</Typography>

          <Typography
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "5",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {option.description}
          </Typography>

          <Typography color="white" sx={{ opacity: 0.2 }}>
            Ver mais
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
