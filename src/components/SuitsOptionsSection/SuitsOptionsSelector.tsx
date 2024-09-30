"use client";

import { Box, Stack, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ISecaoOpcoesTrajes } from "@/services/interfaces";

export interface ISuitsOptionsSelectorProps {
  data: ISecaoOpcoesTrajes;
  selectedOption: number;
  onSelectedOptionChange: (selectedOption: number) => void;
}

export const SuitsOptionsSelector = ({
  data,
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
        {data.attributes.OpcaoTraje.map((option, index) => {
          const isSelectedOption = option.id === selectedOption;
          const isFirstSlide = index === 0;
          const isLastSlide = index === data.attributes.OpcaoTraje.length - 1;

          return (
            <Box
              key={option.id}
              sx={{
                flex: "0 0 auto",
                pl: isFirstSlide ? 2 : 1,
                pr: isLastSlide ? 2 : 0,
              }}
              onClick={() => {
                onSelectedOptionChange(option.id);
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
                  {option.Titulo}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
