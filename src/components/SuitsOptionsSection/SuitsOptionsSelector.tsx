"use client";

import { Box, Stack, Typography } from "@mui/material";
import { ISuitsOption } from "./SuitsOptionsSection";

export interface ISuitsOptionsSelectorProps {
  suitsOptions: ISuitsOption[];
  selectedOption: string;
  onSelectedOptionChange: (selectedOption: string) => void;
}

export const SuitsOptionsSelector = ({
  suitsOptions,
  selectedOption,
  onSelectedOptionChange,
}: ISuitsOptionsSelectorProps) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      {suitsOptions.map((option) => {
        const isSelectedOption = option.label === selectedOption;

        return (
          <Box
            key={option.label}
            sx={{
              backgroundColor: isSelectedOption
                ? "secondary.main"
                : "rgba(255,255,255,.3)",
              px: 1,
            }}
            onClick={() => onSelectedOptionChange(option.label)}
          >
            <Typography
              fontWeight={isSelectedOption ? "500" : undefined}
              fontSize={14}
            >
              {option.label}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};
