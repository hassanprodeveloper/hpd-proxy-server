import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import AuthOverlay from "@/components/AuthOverlay";

import Providers from "@/services/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mate Live",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NextTopLoader color="#f29e27" showSpinner={false} />

          <AuthOverlay />

          {children}
        </Providers>
      </body>
    </html>
  );
}
