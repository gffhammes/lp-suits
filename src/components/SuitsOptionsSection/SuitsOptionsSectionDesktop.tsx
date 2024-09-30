"use client";
import {
  Box,
  Collapse,
  Container,
  Divider,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { SuitsOptionsPhotosGrid } from "./SuitsOptionsPhotosGrid";
import EastIcon from "@mui/icons-material/East";
import { generateWhatsAppLink } from "@/utils";
import { ISecaoOpcoesTrajes } from "@/services/interfaces";
import { CustomText } from "../CustomText";

export interface ISuitsOptionsSectionDesktopProps {
  data: ISecaoOpcoesTrajes;
}

export const SuitsOptionsSectionDesktop = ({
  data,
}: ISuitsOptionsSectionDesktopProps) => {
  const [selectedOption, setSelectedOption] = useState<number>(
    data.attributes.OpcaoTraje[0].id
  );

  const selectedOptionObject = data.attributes.OpcaoTraje.find(
    (option) => option.id === selectedOption
  )!;

  const selectedOptionIndex = data.attributes.OpcaoTraje.findIndex(
    (option) => option.id === selectedOption
  );

  return (
    <Container>
      <Stack direction="row" gap={8}>
        <Stack flex="0 0 30rem" gap={4}>
          <Typography variant="h2" maxWidth="20ch">
            {data.attributes.Titulo}{" "}
          </Typography>

          <Stack maxWidth="25rem">
            {data.attributes.OpcaoTraje.map((option, index) => {
              const isSelectedOption = option.id === selectedOption;

              const isLastSlide =
                index === data.attributes.OpcaoTraje.length - 1;

              const showBorder =
                !isSelectedOption &&
                !isLastSlide &&
                index !== selectedOptionIndex - 1;

              return (
                <Box key={option.id}>
                  <Box
                    sx={{
                      backgroundColor: isSelectedOption
                        ? "secondary.main"
                        : "transparent",

                      transition: ".3s ease all",
                      px: 2,
                      py: 2,
                      cursor: "pointer",

                      "&:hover": {
                        "& .arrow": isSelectedOption
                          ? {}
                          : {
                              opacity: 0.3,
                              transform: "translateX(5px)",
                            },
                      },
                    }}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <Stack>
                      <Stack direction="row" alignItems="center" gap={2}>
                        <Typography
                          variant="h3"
                          fontSize={isSelectedOption ? undefined : 20}
                          sx={{
                            transition: ".3s ease all",
                          }}
                          color={
                            isSelectedOption
                              ? "rgba(255,255,255,1)"
                              : "rgba(255,255,255,.3)"
                          }
                        >
                          {option.Titulo}
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
                          alignItems="flex-start"
                        >
                          <Stack gap={1}>
                            <CustomText data={option.Descricao} />
                          </Stack>

                          <a
                            href={generateWhatsAppLink(
                              `Olá, vim pelo site e gostaria de alugar um traje elegante para o evento ${option.Titulo}!`
                            )}
                            target="_blank"
                          >
                            <Typography
                              variant="h3"
                              component="p"
                              fontSize={16}
                              sx={{
                                "&:hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              {data.attributes.TextoBotao}
                            </Typography>
                          </a>
                        </Stack>
                      </Collapse>
                    </Stack>
                  </Box>

                  <Divider
                    sx={{
                      borderColor: showBorder
                        ? "rgba(255,255,255,0.3)"
                        : "transparent",
                    }}
                  />
                </Box>
              );
            })}
          </Stack>
        </Stack>

        <Box flex="1 1 auto">
          <SuitsOptionsPhotosGrid selectedOption={selectedOptionObject} />
        </Box>
      </Stack>
    </Container>
  );
};
