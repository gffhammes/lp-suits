import { Box } from "@mui/material";
import { DiamondPhoto } from "./DiamondPhoto";
import foto1 from "../../../public/images/2H0A9578.jpeg";
import foto2 from "../../../public/images/2H0A9848.jpeg";
import foto3 from "../../../public/images/2H0A9939.jpeg";

export interface IDiamondPhotosProps {}

export const DiamondPhotos = (props: IDiamondPhotosProps) => {
  const diamondSize = 300;
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
        <DiamondPhoto size={diamondSize} src={foto1.src} />
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
        <DiamondPhoto size={diamondSize} src={foto2.src} />
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
        <DiamondPhoto size={diamondSize} src={foto3.src} />
      </Box>
    </Box>
  );
};
