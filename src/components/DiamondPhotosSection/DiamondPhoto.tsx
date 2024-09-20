import { Box } from "@mui/material";
import Image from "next/image";

export interface IDiamondPhotoProps {
  src: string;
  size: number;
}

export const DiamondPhoto = ({ src, size }: IDiamondPhotoProps) => {
  const points = "50% 0%, 100% 50%, 50% 100%, 0% 50%";

  return (
    <Box height={size} width={size}>
      <Image
        src={src}
        alt=""
        fill
        style={{
          clipPath: `polygon(${points})`,
          objectFit: "cover",
        }}
      />
    </Box>
  );
};
