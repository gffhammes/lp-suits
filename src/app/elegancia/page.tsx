import { DiamondPhotosSection } from "@/components/DiamondPhotosSection/DiamondPhotosSection";
import { HeroSection } from "@/components/HeroSection";
import { Container, Divider, Stack } from "@mui/material";
import { IconsSection } from "@/components/IconsSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { BigCTASection } from "@/components/BigCTASection";
import { FinalSection } from "@/components/FinalSection/FinalSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuitsOptionsSection } from "@/components/SuitsOptionsSection/SuitsOptionsSection";

export default function Home() {
  return (
    <main>
      <Header />

      <Stack gap={{ xs: 20, md: 30 }}>
        <HeroSection />

        <DiamondPhotosSection />

        <Container maxWidth={false} sx={{ maxWidth: "300px" }}>
          <Divider color="white" />
        </Container>

        <IconsSection />

        <Container maxWidth={false} sx={{ maxWidth: "300px" }}>
          <Divider color="white" />
        </Container>

        <SuitsOptionsSection />

        <Stack gap={{ xs: 0, md: 20 }}>
          <ReviewsSection />

          <BigCTASection />
        </Stack>

        <FinalSection />

        <Footer />
      </Stack>
    </main>
  );
}
