import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers/provider";
import { AppLayout } from "@/components/layout/app.layout";

const inter = Inter({subsets:['latin'],variable:'--font-inter', display: "swap"});

export const metadata: Metadata = {
  title: "AdminHub",
  description: "Admin dashboard application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
       <AppLayout>
            {children}
          </AppLayout>
        </Providers>
        </body>
    </html>
  );
}
