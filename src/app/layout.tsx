import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://kiln-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kiln — Brand & Product Design Studio",
    template: "%s · Kiln",
  },
  description:
    "Kiln is a small studio for founders who need brand identity, product design, and web development done with the same hand — from raw idea to something that holds its shape.",
  keywords: [
    "design agency",
    "brand identity studio",
    "product design",
    "UI/UX design",
    "web development agency",
    "Next.js developer",
  ],
  authors: [{ name: "Kiln Studio" }],
  openGraph: {
    title: "Kiln — Brand & Product Design Studio",
    description:
      "We fire raw ideas into brands that hold their shape. Identity, product design, and web development for founders who care about craft.",
    url: SITE_URL,
    siteName: "Kiln",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kiln Studio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiln — Brand & Product Design Studio",
    description: "We fire raw ideas into brands that hold their shape.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4ECE1" },
    { media: "(prefers-color-scheme: dark)", color: "#221D1A" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
