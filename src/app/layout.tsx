import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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
      <GoogleTagManager gtmId="GTM-TRBSTKML" />
      {/* <GoogleAnalytics gaId="G-D8EH0M00KS" /> */}

      <Script
        id="microsoft-clarity-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "obu7zfg6eu");
                `,
        }}
      />
    </html>
  );
}
