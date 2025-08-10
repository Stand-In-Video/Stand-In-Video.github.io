// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// v-- 就是这里！修改 title 和 description --v
export const metadata: Metadata = {
  // 你可以把它改成更简洁的，例如 "Stand-In Project" 或 "Stand-In by Tencent"
  title: "Stand-In: A Lightweight and Plug-and-Play Identity Control for Video Generation",
  description: "Project page for Stand-In, showcasing generative results for various video tasks.",
};
// ^-- 就是这里！修改 title 和 description --^

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}