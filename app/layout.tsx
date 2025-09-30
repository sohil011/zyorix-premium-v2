import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { cn } from "./lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Zyorix – Premium FinOps Consultancy",
  description: "World-class FinOps expertise. Optimize cloud costs, drive efficiency, and scale with confidence.",
  icons: {
    icon: "/favicon.ico",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Zyorix",
  "url": "https://zyorix.com", // Placeholder URL
  "logo": "https://zyorix.com/zyorix-logo-embedded.svg", // Placeholder URL
  "description": "Premium FinOps consultancy for cloud cost optimization.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Cloud Lane",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94107",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-010-ZYO",
    "contactType": "customer service"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}