"use client";

import { Box } from "@mui/material";
import { DiamondPhoto } from "./DiamondPhoto";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useMemo } from "react";
import { IImage } from "@/services/interfaces";

export interface IDiamondPhotosProps {
  photo1: IImage;
  photo2: IImage;
  photo3: IImage;
}

export const DiamondPhotos = ({
  photo1,
  photo2,
  photo3,
}: IDiamondPhotosProps) => {
  const { sm, md, lg, xl } = useBreakpoints();

  const diamondSize = useMemo(() => {
    if (sm) return 500;
    if (md) return 500;
    if (lg) return 500;
    if (xl) return 500;

    return 300;
  }, [sm, md, lg, xl]);

  const diamondsGap = ".5rem";

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        height: `calc(${diamondSize * 1.5}px + ${diamondsGap})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          height: diamondSize,
          widht: diamondSize,
          transform: `translateX(calc(-100% - ${diamondsGap}))`,
        }}
      >
        <DiamondPhoto size={diamondSize} src={photo1.data.attributes.url} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: 0,
          height: diamondSize,
          widht: diamondSize,
          transform: `translate(-50%, calc(50% + ${diamondsGap}))`,
        }}
      >
        <DiamondPhoto size={diamondSize} src={photo2.data.attributes.url} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "50%",
          height: diamondSize,
          widht: diamondSize,
          transform: `translateX(calc(100% + ${diamondsGap}))`,
        }}
      >
        <DiamondPhoto size={diamondSize} src={photo3.data.attributes.url} />
      </Box>
    </Box>
  );
};
