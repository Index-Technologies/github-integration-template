import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyApp",
  description: "A fake product management workspace for Alloy GitHub integration demos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
