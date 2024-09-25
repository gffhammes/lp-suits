import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Suits | Aluguel de Trajes Masculinos Elegantes",
  description:
    "Aluguel de trajes masculinos elegantes com grande variedade e ajustes sob medida por alfaiate. Tenha o look perfeito para qualquer ocasião com nosso atendimento especializado e assessoria de estilo personalizada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>

      <GoogleTagManager gtmId="GTM-MPDH9DPN" />
    </html>
  );
}
