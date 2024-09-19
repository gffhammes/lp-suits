import { Box, Container, Stack, Typography } from "@mui/material";
import { ReviewsCarousel } from "./ReviewsCarousel";

export interface IReviewsSectionProps {}

export const ReviewsSection = (props: IReviewsSectionProps) => {
  return (
    <Box sx={{ backgroundColor: "secondary.main", py: 10, pb: 20 }}>
      <Stack gap={4}>
        <Container>
          <Typography variant="h2">
            Veja a experiência de nossos clientes
          </Typography>
        </Container>

        <ReviewsCarousel reviews={reviews} />
      </Stack>
    </Box>
  );
};

export interface IReview {
  rating: number;
  text: string;
  name: string;
  photoUrl: string;
}

const reviews: IReview[] = [
  {
    rating: 5,
    name: "Vera Lucia Valcanaia",
    photoUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXR5fjXR7mofgcRu5UDd6hdZDpSnAsWrVIk4AQOvqxENrD_-2JU=w120-h120-p-rp-mo-br100",
    text: `Trajes de muito boa qualidade,  fomos muito bem atendidos, inclusive deram dicas de como colocar cada peça , camisa, gravata , até como usar o paletó quando for sentar, ficar de pé e tirar fotos! Dicas muito bem aproveitadas no dia do evento.  Sempre que o meu marido e meu filho  precisam de um traje especial  é a Suits que procuramos.
    Super  recomendo`,
  },
  {
    rating: 5,
    name: "Lucas Bueno",
    photoUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXvP_QB1EkcTSOzebO5XTevX4R2VH0vToNAWUkBMWdVU4ftVJIS=w120-h120-p-rp-mo-br100",
    text: `Lugar maravilhoso, ternos variados e de bom gosto, atendimento diferenciado, os meninos mandam muito bem, eu sou cliente a mais de 3 anos e sempre me surpreendo`,
  },
  {
    rating: 5,
    name: "Arthur Brandão",
    photoUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjWsjMz1uc7AiyDX0Ua5XfuQzEz89NYC65IyYEzJTe4rjVoPft4=w120-h120-p-rp-mo-br100",
    text: "Experiência ótima! Fui muito bem atendido por todos e nunca fui tão elogiado na vida com o traje e montaram pra mim, recomento totalmente!",
  },
  {
    rating: 5,
    name: "Victor Hugo",
    photoUrl: "",
    text: "Atendimento impecável, já aluguei pelo menos 4 vezes com o estabelecimento e sempre bem atendido. Recomendo.",
  },
];
