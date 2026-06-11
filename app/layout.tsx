import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solid Community of Practice | EDM Association",
  description:
    "Solid makes regulated data shareable without losing control of it. The EDM Association and the Open Data Institute are convening the community that will make Solid production-ready for finance, healthcare and government.",
  openGraph: {
    title: "Solid Community of Practice | EDM Association",
    description:
      "Co-convened by the EDM Association and the Open Data Institute to make Solid production-ready for finance, healthcare and government.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
