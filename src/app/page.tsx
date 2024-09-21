import { DiamondPhotosSection } from "@/components/DiamondPhotosSection/DiamondPhotosSection";
import { HeroSection } from "@/components/HeroSection";
import { Container, Divider, Stack } from "@mui/material";
import { IconsSection } from "@/components/IconsSection";
import { SuitsOptionsSection } from "@/components/SuitsOptionsSection/SuitsOptionsSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { BigCTASection } from "@/components/BigCTASection";
import { FinalSection } from "@/components/FinalSection";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <Stack gap={20}>
        <HeroSection />

        <DiamondPhotosSection />

        <Container maxWidth={false} sx={{ maxWidth: "300px" }}>
          <Divider color="white" />
        </Container>

        <IconsSection />

        <SuitsOptionsSection />

        <Container maxWidth={false} sx={{ maxWidth: "300px" }}>
          <Divider color="white" />
        </Container>

        <Stack>
          <ReviewsSection />

          <BigCTASection />
        </Stack>

        <FinalSection />

        {/* <Footer /> */}
      </Stack>
    </main>
  );
}
