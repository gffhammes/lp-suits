import { Box } from "@mui/material";
import { Animate } from "../Animate";
import { ISuitsOption } from "./SuitsOptionsSection";
import { AnimatePresence } from "framer-motion";

export interface ISuitsOptionsPhotosGridProps {
  selectedOption: ISuitsOption;
}

export const SuitsOptionsPhotosGrid = ({
  selectedOption,
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
      <Animate
        initial={{
          opacity: 0,
          x: "-30px",
        }}
        transition={{
          duration: 0.7,
          delay: 0.6,
        }}
        animate={{ opacity: 1, x: "-0px" }}
        key={selectedOption.photos[0] + selectedOption.label}
        style={{
          gridArea: "image1",
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url('${selectedOption.photos[0]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />
      </Animate>

      <Animate
        initial={{
          opacity: 0,
          x: "-30px",
        }}
        transition={{
          duration: 0.7,
          delay: 0.8,
        }}
        animate={{ opacity: 1, x: "-0px" }}
        key={selectedOption.photos[1] + selectedOption.label}
        style={{
          gridArea: "image2",
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url('${selectedOption.photos[1]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />
      </Animate>

      <Animate
        initial={{
          opacity: 0,
          x: "-30px",
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        animate={{ opacity: 1, x: "-0px" }}
        key={selectedOption.photos[2] + selectedOption.label}
        style={{
          gridArea: "image3",
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url('${selectedOption.photos[2]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />
      </Animate>
    </Box>
  );
};
