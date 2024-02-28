import { GlobalStyles } from "@/styles/global_styles";
import StyledComponentsRegistry from "../lib/registry";
import { Metadata } from "next";
import ReactDOM from "react-dom";
import LayoutContainer from "@/components/LayoutContainer";

ReactDOM.preload("/fonts/GaramondPremrPro.otf", {
  as: "font",
  crossOrigin: "",
});

export const metadata: Metadata = {
  title: "Lennart Mink Weber",
  description: "Lennart Mink Weber - Portfolio",
  keywords: ["Lennart", "Mink", "Weber", "Portfolio", "Kuenstler", "Artist"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />

          <LayoutContainer>{children}</LayoutContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
