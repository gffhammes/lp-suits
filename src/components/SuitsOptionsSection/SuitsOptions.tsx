"use client";

import { useState } from "react";
import { ISuitsOption } from "./SuitsOptionsSection";
import { SuitsOptionsSelector } from "./SuitsOptionsSelector";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { SuitsOptionCard } from "./SuitsOptionCard";
import { generateWhatsAppLink, getDefaultWhatsappLink } from "@/utils";

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
    <Stack gap={4} alignItems="center">
      <SuitsOptionsSelector
        suitsOptions={suitsOptions}
        selectedOption={selectedOption}
        onSelectedOptionChange={(option) => setSelectedOption(option)}
      />

      <Container>
        <Stack gap={4} alignItems="center">
          <SuitsOptionCard option={selectedOptionObject} />

          <Button
            variant="contained"
            LinkComponent={"a"}
            href={generateWhatsAppLink(
              `Olá, vim pelo site e gostaria de alugar um traje elegante para o evento ${selectedOption}!`
            )}
            target="_blank"
          >
            Quero provar
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};
