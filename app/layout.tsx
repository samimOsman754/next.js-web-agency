import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web agency | Next.js + Tailwind CSS",
  description: "A modern web agency built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${font.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <ResponsiveNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
