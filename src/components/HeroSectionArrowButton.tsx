"use client";

import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface IHeroSectionArrowButtonProps {}

export const HeroSectionArrowButton = (props: IHeroSectionArrowButtonProps) => {
  return (
    <IconButton
      color="primary"
      sx={{ fontSize: 48 }}
      onClick={() => {
        const windowHeight = window.innerHeight;

        window.scrollTo({ top: windowHeight - 100, behavior: "smooth" });
      }}
    >
      <KeyboardArrowDownIcon fontSize="inherit" color="primary" />
    </IconButton>
  );
};
