import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileFooter from "@/components/MobileFooter";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: `Personal site of ${site.name}. ${site.role}.`,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: `Personal site of ${site.name}.`,
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full lg:flex">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <main className="flex-1 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-24">
            <div className="mx-auto max-w-5xl">{children}</div>
          </main>
          <MobileFooter />
        </div>
      </body>
    </html>
  );
}
