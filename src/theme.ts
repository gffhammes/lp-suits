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
      fontSize: 48,
      fontWeight: 300,
    },
    h2: {
      fontFamily: taviraj.style.fontFamily,
      fontSize: 32,
      fontWeight: 300,
    },
    h3: {
      fontFamily: taviraj.style.fontFamily,
      fontSize: 24,
      fontWeight: 300,
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
    secondary: { main: "#311120" },
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: { borderRadius: 0 },
      },
    },
  },
});

export default theme;
