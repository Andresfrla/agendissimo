import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const BeVietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "JeBlush | Transformando miradas",
  description: "Conocenos y transforma tu mirada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={BeVietnamPro.className}>{children}</body>
      </html>
  );
}
