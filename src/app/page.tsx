import { DiamondPhotosSection } from "@/components/DiamondPhotosSection";
import { HeroSection } from "@/components/HeroSection";
import { IconButton, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
      </Stack>
    </main>
  );
}
