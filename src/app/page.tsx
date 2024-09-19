import { DiamondPhotosSection } from "@/components/DiamondPhotosSection";
import { HeroSection } from "@/components/HeroSection";
import { Container, Divider, IconButton, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconsSection } from "@/components/IconsSection";
import { SuitsOptionsSection } from "@/components/SuitsOptionsSection/SuitsOptionsSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";

export default function Home() {
  return (
    <main>
      <Stack gap={10}>
        <HeroSection />

        <Stack alignItems="center" justifyContent="center">
          <IconButton color="primary" sx={{ fontSize: 48 }}>
            <KeyboardArrowDownIcon fontSize="inherit" color="primary" />
          </IconButton>
        </Stack>

        <DiamondPhotosSection />

        <Container maxWidth={false} sx={{ maxWidth: "300px" }}>
          <Divider color="white" />
        </Container>

        <IconsSection />

        <SuitsOptionsSection />

        <ReviewsSection />
      </Stack>
    </main>
  );
}
