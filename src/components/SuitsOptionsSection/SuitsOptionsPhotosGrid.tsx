import { Box } from "@mui/material";
import { Animate } from "../Animate";
import Image from "next/image";
import { IOpcaoTraje, ISecaoOpcoesTrajes } from "@/services/interfaces";

export interface ISuitsOptionsPhotosGridProps {
  selectedOption: IOpcaoTraje;
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
        key={`${selectedOption.Fotos.data[0].id} ${selectedOption.id}`}
        style={{
          gridArea: "image1",
          position: "relative",
        }}
      >
        <Image
          priority
          src={selectedOption.Fotos.data[0].attributes.url}
          alt="Suits Trajes"
          fill
          objectFit="cover"
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
        key={`${selectedOption.Fotos.data[1].id} ${selectedOption.id}`}
        style={{
          gridArea: "image2",
          position: "relative",
        }}
      >
        <Image
          priority
          src={selectedOption.Fotos.data[1].attributes.url}
          alt="Suits Trajes"
          fill
          objectFit="cover"
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
        key={`${selectedOption.Fotos.data[2].id} ${selectedOption.id}`}
        style={{
          gridArea: "image3",
          position: "relative",
        }}
      >
        <Image
          priority
          src={selectedOption.Fotos.data[2].attributes.url}
          alt="Suits Trajes"
          fill
          objectFit="cover"
        />
      </Animate>
    </Box>
  );
};
