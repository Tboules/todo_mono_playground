import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import TRPCProvider from "./_trpc/provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Todo Mono Playground",
  description: "Testing Monorepos with drizzle and trpc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.className}>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
