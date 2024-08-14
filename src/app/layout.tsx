import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PXO App",
  description: "Aplicación PXO para compra y venta de tokens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className={`${inter.className} min-h-screen bg-gradient-to-b from-green-600 to-blue-500`}>        {children}
      </body>
    </html>
  );
}
