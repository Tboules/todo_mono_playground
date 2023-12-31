import "@repo/ui/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import TRPCProvider from "./_trpc/provider";
import { cn } from "@repo/ui/lib/utils";
import { ThemeProvider } from "./_components/theme-provider";

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCProvider>{children}</TRPCProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
