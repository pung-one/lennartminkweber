import { GlobalStyles } from "@/styles/global_styles";
import StyledComponentsRegistry from "../lib/registry";
import LayoutContainer from "@/components/LayoutContainer";
import ReactDOM from "react-dom";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.preload("/fonts/GaramondPremrPro.otf", {
  as: "font",
  crossOrigin: "",
});

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
        <Analytics />
      </body>
    </html>
  );
}
