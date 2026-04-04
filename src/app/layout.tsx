import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zcash Bug Bounty Program — bounty.z.cash",
  description:
    "Report vulnerabilities in Zcash protocol implementations and earn rewards. Critical bugs up to $50,000.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg viewBox='0 0 1080 1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m270,540c0-148.9,121.1-270,270-270s270,121.1,270,270-121.1,270-270,270-270-121.1-270-270Zm366.31-125.3v41.09l-114.28,155h114.28v54.5h-73.67v45.16h-45.28v-45.16h-73.67v-41.09l114.16-155h-114.16v-54.5h73.67v-45.28h45.28v45.28h73.67Z' fill='%23F4B728' fill-rule='evenodd'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
