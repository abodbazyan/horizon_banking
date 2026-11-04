import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google"; // Next 14 syntax
import "./globals.css";

// 1. Initialize the Inter font for main text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

// 2. Initialize the IBM Plex Serif font for banking headings
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif"
});

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "Modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Inject BOTH class names directly into the body wrapper */}
      <body className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
