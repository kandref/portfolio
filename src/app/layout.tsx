import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// FontAwesome config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kurnia Andre Febrian | Data Analyst & Business Intelligence",
  description:
    "Portfolio of Kurnia Andre Febrian - Data Analyst & Microsoft Fabric Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
