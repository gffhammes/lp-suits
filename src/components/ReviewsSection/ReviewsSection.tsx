import { Box, Container, Stack, Typography } from "@mui/material";
import { ReviewsCarousel } from "./ReviewsCarousel";
import { getReviews } from "@/services/services";

export interface IReviewsSectionProps {}

export const ReviewsSection = async (props: IReviewsSectionProps) => {
  const data = await getReviews();

  if (!data) return null;

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
