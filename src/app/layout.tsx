import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { GetStaticProps, Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Awa BAH - Developer",
  description: "Awa Bah is a developer, artist and amateur designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-muted text-foreground"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-muted flex-1 overflow-y-auto">
            <div className="flex-1 bg-background min-h-screen lg:rounded-tl-xl border border-transparent lg:border-border overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
