import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import TRPCProvider from "./_trpc/provider";

const notoSans = Noto_Sans_Mono({
  subsets: ["latin"],
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
    <html lang="en" className={notoSans.className}>
      <body>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
