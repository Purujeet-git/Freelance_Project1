import { Geist, Geist_Mono } from "next/font/google";
import CurtainTransition from "@/components/CurtainTransition";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FreeLance Example",
  description: "This is what an example website would look like",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CurtainTransition />
        {children}
      </body>
    </html>
  );
}
