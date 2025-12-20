import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe | IT Student & Developer Portfolio",
  description:
    "Portfolio of an IT student specializing in Cloud Computing, ERP Systems, and Software Development. Seeking internship opportunities in tech.",
  keywords: [
    "IT Student",
    "Developer",
    "Cloud Computing",
    "ERP",
    "Software Development",
    "Web Development",
    "Portfolio",
    "Internship",
  ],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "John Doe | IT Student & Developer Portfolio",
    description:
      "Portfolio of an IT student specializing in Cloud Computing, ERP Systems, and Software Development.",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | IT Student & Developer Portfolio",
    description:
      "Portfolio of an IT student specializing in Cloud Computing, ERP Systems, and Software Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
