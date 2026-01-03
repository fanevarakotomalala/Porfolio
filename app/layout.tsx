import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ThemeProvider } from "@/components/ui/theme-provider"

 
export const metadata: Metadata = {
  title: {
    template: '%s | Porfolio',
    default: 'Porfolio',
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const newsreader = Newsreader({ subsets: ["latin"], style: "italic", variable: "--font-serif" })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"  className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased `} suppressHydrationWarning>
      <body
       className="min-h-screen bg-background text-foreground antialiased"
      >
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-5xl mx-auto px-6">
            <Navbar />
            {children}
            <div className="mb-14">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
