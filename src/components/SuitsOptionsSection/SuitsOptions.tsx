"use client";

import { useState } from "react";
import { SuitsOptionsSelector } from "./SuitsOptionsSelector";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { SuitsOptionCard } from "./SuitsOptionCard";
import { generateWhatsAppLink, getDefaultWhatsappLink } from "@/utils";
import { ISecaoOpcoesTrajes } from "@/services/interfaces";

export interface ISuitsOptionsProps {
  data: ISecaoOpcoesTrajes;
}

export const SuitsOptions = ({ data }: ISuitsOptionsProps) => {
  const [selectedOption, setSelectedOption] = useState(
    data.attributes.OpcaoTraje[0].id
  );

  const selectedOptionObject = data.attributes.OpcaoTraje.find(
    (option) => option.id === selectedOption
  );

  return (
    <Stack gap={4} alignItems="center">
      <SuitsOptionsSelector
        data={data}
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
              `Olá, vim pelo site e gostaria de alugar um traje elegante para o evento ${selectedOptionObject?.Titulo}!`
            )}
            target="_blank"
          >
            {data.attributes.TextoBotao}
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};
