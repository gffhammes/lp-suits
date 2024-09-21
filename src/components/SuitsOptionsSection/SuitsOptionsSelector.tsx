"use client";

import { Box, Stack, Typography } from "@mui/material";
import { ISuitsOption } from "./SuitsOptionsSection";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    skipSnaps: true,
  });

  const onItemClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <Box
      className="embla"
      ref={emblaRef}
      sx={{ overflow: "hidden", width: "100%" }}
    >
      <Box className="embla__container" sx={{ display: "flex" }}>
        {suitsOptions.map((option, index) => {
          const isSelectedOption = option.label === selectedOption;
          const isFirstSlide = index === 0;
          const isLastSlide = index === suitsOptions.length - 1;

          return (
            <Box
              key={option.label}
              sx={{
                flex: "0 0 auto",
                pl: isFirstSlide ? 2 : 1,
                pr: isLastSlide ? 2 : 0,
              }}
              onClick={() => {
                onSelectedOptionChange(option.label);
                onItemClick(index);
              }}
            >
              <Box
                sx={{
                  backgroundColor: isSelectedOption
                    ? "primary.main"
                    : "transparent",
                  px: 1,
                  border: "1px solid",
                  borderColor: isSelectedOption
                    ? "primary.main"
                    : "rgba(255,255,255,.3)",
                  cursor: "pointer",
                }}
              >
                <Typography
                  fontSize={14}
                  color={isSelectedOption ? "secondary" : undefined}
                >
                  {option.label}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
