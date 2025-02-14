import { Box, Container, Stack, Typography } from "@mui/material";
import { ReviewsCarousel } from "./ReviewsCarousel";
import { IAvaliacoes } from "@/services/interfaces";

export interface IReviewsSectionProps {}

export const ReviewsSection = async (props: IReviewsSectionProps) => {
  return (
    <Box sx={{ backgroundColor: "secondary.main", py: 10, pb: 20 }}>
      <Container sx={{ p: { xs: 0, md: 4 }, m: { xs: 0, md: "auto" } }}>
        <Stack gap={{ xs: 4, md: 8 }}>
          <Container
            sx={{ p: { xs: undefined, md: 0 }, m: { xs: undefined, md: 0 } }}
          >
            <Typography
              variant="h2"
              textAlign={{ xs: "left", md: "center" }}
              maxWidth="21ch"
              sx={{ m: { xs: 0, md: "auto" } }}
            >
              {data.attributes.Titulo}
            </Typography>
          </Container>

          <ReviewsCarousel reviews={data.attributes.Avaliacoes} />
        </Stack>
      </Container>
    </Box>
  );
};

const data: IAvaliacoes = {
  id: 1,
  attributes: {
    Titulo: "Veja a experiência de nossos clientes",
    createdAt: "2024-09-27T12:50:51.246Z",
    updatedAt: "2024-09-27T12:54:09.392Z",
    Avaliacoes: [
      {
        id: 1,
        QuantidadeEstrelas: 5,
        Texto:
          "Trajes de muito boa qualidade,  fomos muito bem atendidos, inclusive deram dicas de como colocar cada peça , camisa, gravata , até como usar o paletó quando for sentar, ficar de pé e tirar fotos! Dicas muito bem aproveitadas no dia do evento.  Sempre que o meu marido e meu filho  precisam de um traje especial  é a Suits que procuramos.\n    Super  recomendo",
        Nome: "Vera Lucia Valcanaia",
        URLFoto:
          "https://lh3.googleusercontent.com/a-/ALV-UjXR5fjXR7mofgcRu5UDd6hdZDpSnAsWrVIk4AQOvqxENrD_-2JU=w120-h120-p-rp-mo-br100",
      },
      {
        id: 2,
        QuantidadeEstrelas: 5,
        Texto:
          "Lugar maravilhoso, ternos variados e de bom gosto, atendimento diferenciado, os meninos mandam muito bem, eu sou cliente a mais de 3 anos e sempre me surpreendo",
        Nome: "Lucas Bueno",
        URLFoto:
          "https://lh3.googleusercontent.com/a-/ALV-UjXvP_QB1EkcTSOzebO5XTevX4R2VH0vToNAWUkBMWdVU4ftVJIS=w120-h120-p-rp-mo-br100",
      },
      {
        id: 3,
        QuantidadeEstrelas: 5,
        Texto:
          "Experiência ótima! Fui muito bem atendido por todos e nunca fui tão elogiado na vida com o traje e montaram pra mim, recomento totalmente!",
        Nome: "Arthur Brandão",
        URLFoto:
          "https://lh3.googleusercontent.com/a-/ALV-UjWsjMz1uc7AiyDX0Ua5XfuQzEz89NYC65IyYEzJTe4rjVoPft4=w120-h120-p-rp-mo-br100",
      },
      {
        id: 4,
        QuantidadeEstrelas: 5,
        Texto:
          "Atendimento impecável, já aluguei pelo menos 4 vezes com o estabelecimento e sempre bem atendido. Recomendo.",
        Nome: "Victor Hugo",
        URLFoto: null,
      },
    ],
  },
};
