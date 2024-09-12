import { Box } from "@mui/material";
import { DiamondPhoto } from "./DiamondPhoto";

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
        height: "50rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: `translateX(calc(-100% - ${diamondsGap}))`,
        }}
      >
        <DiamondPhoto size={diamondSize} src="https://picsum.photos/500/500" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: `translate(-50%, calc(50% + ${diamondsGap}))`,
        }}
      >
        <DiamondPhoto size={diamondSize} src="https://picsum.photos/500/500" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "50%",
          transform: `translateX(calc(100% + ${diamondsGap}))`,
        }}
      >
        <DiamondPhoto size={diamondSize} src="https://picsum.photos/500/500" />
      </Box>
    </Box>
  );
};
