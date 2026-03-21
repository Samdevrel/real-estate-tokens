import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate Tokens | @samdevrel",
  description: "Invest in premium properties worldwide. Fractional real estate tokenization with APY yields.",
  keywords: ["real estate", "tokenization", "properties", "fractional ownership", "realT", "real estate investing"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
