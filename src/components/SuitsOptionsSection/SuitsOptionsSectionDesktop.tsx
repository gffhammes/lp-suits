"use client";
import {
  Box,
  Collapse,
  Container,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { ISuitsOption } from "./SuitsOptionsSection";
import { useState } from "react";
import { SuitsOptionsPhotosGrid } from "./SuitsOptionsPhotosGrid";
import EastIcon from "@mui/icons-material/East";

export interface ISuitsOptionsSectionDesktopProps {
  suitsOptions: ISuitsOption[];
}

export const SuitsOptionsSectionDesktop = ({
  suitsOptions,
}: ISuitsOptionsSectionDesktopProps) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const selectedOptionObject = suitsOptions[selectedOption];

  return (
    <Container>
      <Stack direction="row" gap={8}>
        <Stack flex="0 0 30rem" gap={4}>
          <Typography variant="h2" maxWidth="20ch">
            Veja os melhores trajes para cada evento:
          </Typography>

          <Stack maxWidth="25rem">
            {suitsOptions.map((option, index) => {
              const isSelectedOption = index === selectedOption;
              const isLastSlide = index === suitsOptions.length - 1;

              const showBorder =
                !isSelectedOption &&
                !isLastSlide &&
                index !== selectedOption - 1;

              return (
                <Box
                  key={option.label}
                  sx={{
                    backgroundColor: isSelectedOption
                      ? "secondary.main"
                      : "transparent",

                    transition: ".3s ease all",
                    px: 2,
                    py: 2,
                    borderBottom: showBorder
                      ? "1px solid rgba(255,255,255,0.5)"
                      : "none",
                    cursor: "pointer",

                    "&:hover": {
                      "& .arrow": isSelectedOption
                        ? {}
                        : {
                            opacity: 0.6,
                            transform: "translateX(5px)",
                          },
                    },
                  }}
                  onClick={() => setSelectedOption(index)}
                >
                  <Stack>
                    <Stack direction="row" alignItems="center" gap={2}>
                      <Typography
                        variant="h3"
                        fontSize={isSelectedOption ? undefined : 20}
                        sx={{
                          transition: ".3s ease all",
                        }}
                      >
                        {option.label}
                      </Typography>

                      <EastIcon
                        fontSize="small"
                        className="arrow"
                        color="primary"
                        sx={{
                          opacity: 0,
                          transition: ".3s ease all",
                          transform: "translateX(-5px)",
                        }}
                      />
                    </Stack>

                    <Collapse in={isSelectedOption}>
                      <Stack
                        sx={{
                          pt: 1,
                        }}
                        gap={3}
                      >
                        <Stack gap={1}>
                          <Typography
                            sx={{
                              display: "-webkit-box",
                              WebkitLineClamp: "3",
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {option.description}
                          </Typography>

                          <Typography color="white" sx={{ opacity: 0.2 }}>
                            Ver mais
                          </Typography>
                        </Stack>

                        <Typography
                          variant="h4"
                          sx={{
                            textDecoration: "underline",
                          }}
                        >
                          QUERO PROVAR
                        </Typography>
                      </Stack>
                    </Collapse>
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Stack>

        <Box flex="1 1 auto">
          <SuitsOptionsPhotosGrid photos={selectedOptionObject.photos} />
        </Box>
      </Stack>
    </Container>
  );
};
