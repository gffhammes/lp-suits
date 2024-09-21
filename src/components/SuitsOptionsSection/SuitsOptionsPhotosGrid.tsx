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
      <Box sx={{ position: "relative", gridArea: "image1" }}>
        <Image src={photos[0]} alt="Suits Trajes" fill objectFit="cover" />
      </Box>

      <Box sx={{ position: "relative", gridArea: "image2" }}>
        <Image src={photos[1]} alt="Suits Trajes" fill objectFit="cover" />
      </Box>

      <Box sx={{ position: "relative", gridArea: "image3" }}>
        <Image src={photos[2]} alt="Suits Trajes" fill objectFit="cover" />
      </Box>
    </Box>
  );
};
