"use client";
import { createTheme } from "@mui/material/styles";
import { Taviraj, Kumbh_Sans } from "next/font/google";

const taviraj = Taviraj({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const kumbhSans = Kumbh_Sans({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: kumbhSans.style.fontFamily,
    fontWeightRegular: 200,
    allVariants: { color: "white" },
    h1: {
      fontFamily: taviraj.style.fontFamily,
      fontSize: "clamp(32px, 5.5vh, 48px)",
      fontWeight: 400,
      "@media (min-width:900px)": {
        fontSize: "64px",
      },
    },
    h2: {
      fontFamily: taviraj.style.fontFamily,
      fontSize: 32,
      fontWeight: 400,
    },
    h3: {
      fontFamily: taviraj.style.fontFamily,
      fontSize: 24,
      fontWeight: 400,
    },
    h4: {
      fontFamily: taviraj.style.fontFamily,
      fontSize: 16,
      fontWeight: 400,
    },
    body1: {
      color: "rgba(255,255,255,.6)",
    },

    button: {
      fontFamily: taviraj.style.fontFamily,
      fontWeight: 600,
    },
  },
  palette: {
    primary: { main: "#ffffff" },
    secondary: { main: "#651730", light: "#85757c" },
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: { borderRadius: 0 },
        color: "secondary",
      },
    },
  },
});

export default theme;
