"use client";

import { useState } from "react";
import { ISuitsOption } from "./SuitsOptionsSection";
import { SuitsOptionsSelector } from "./SuitsOptionsSelector";
import { Box, Button, Stack, Typography } from "@mui/material";

export interface ISuitsOptionsProps {
  suitsOptions: ISuitsOption[];
}

export const SuitsOptions = ({ suitsOptions }: ISuitsOptionsProps) => {
  const [selectedOption, setSelectedOption] =
    useState<string>("Casamento Noturno");

  const selectedOptionObject = suitsOptions.find(
    (option) => option.label === selectedOption
  );

  return (
    <Stack gap={8} alignItems="center">
      <SuitsOptionsSelector
        suitsOptions={suitsOptions}
        selectedOption={selectedOption}
        onSelectedOptionChange={(option) => setSelectedOption(option)}
      />

      <Stack direction="row" height="15rem">
        <Box
          sx={{ height: "100%", flex: "0 0 10rem", backgroundColor: "#f4f4f4" }}
        ></Box>

        <Box
          sx={{
            backgroundColor: "secondary.main",
            px: 2,
            py: 3,
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Stack gap={1}>
            <Typography variant="h3">{selectedOptionObject?.label}</Typography>

            <Typography
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: "5",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {selectedOptionObject?.description}
            </Typography>
          </Stack>
        </Box>
      </Stack>

      <Button variant="contained">Quero provar</Button>
    </Stack>
  );
};
