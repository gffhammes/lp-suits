import { Box } from "@mui/material";
import Image from "next/image";

export interface ISuitsOptionsPhotosGridProps {
  photos: string[];
}

export const SuitsOptionsPhotosGrid = ({
  photos,
}: ISuitsOptionsPhotosGridProps) => {
  return (
    <Box
      display="grid"
      width="100%"
      height="100%"
      gridTemplateAreas={`
        'image1 image3'
        'image2 image3'
      `}
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="1fr 1fr"
      gap={2}
    >
      <Box
        sx={{
          position: "relative",
          gridArea: "image1",
          backgroundImage: `url('${photos[0]}')`,
          transition: ".3s ease all",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box
        sx={{
          position: "relative",
          gridArea: "image2",
          backgroundImage: `url('${photos[1]}')`,
          transition: ".3s ease all",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box
        sx={{
          position: "relative",
          gridArea: "image3",
          backgroundImage: `url('${photos[2]}')`,
          transition: ".3s ease all",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
};
