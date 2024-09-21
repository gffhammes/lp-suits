import Image from "next/image";
import logo from "../../public/images/logo suits branca 01 3.png";
import { Box } from "@mui/material";

export interface ILogoProps {
  height: any;
  width: any;
}

export const Logo = ({ height, width }: ILogoProps) => {
  return (
    <Box sx={{ position: "relative", height, width }}>
      <Image src={logo.src} alt="Logo Suits" fill objectFit="contain" />
    </Box>
  );
};
