import { GlobalStyles } from "@/styles/global_styles";
import StyledComponentsRegistry from "../lib/registry";
import { Metadata } from "next";
import ReactDOM from "react-dom";

ReactDOM.preload("/fonts/TriniteNo1-RomanCondensed.woff", {
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
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
