import { Box, Container, Stack, Typography } from "@mui/material";

export interface IReviewsSectionProps {}

export const ReviewsSection = (props: IReviewsSectionProps) => {
  return (
    <Box sx={{ backgroundColor: "secondary.main", py: 10 }}>
      <Stack>
        <Container>
          <Typography variant="h2">
            Veja a experiência de nossos clientes
          </Typography>
        </Container>
      </Stack>
    </Box>
  );
};
