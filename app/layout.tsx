import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ThemeToggle from "./components/ThemeToggle"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Kartik — CS (AI) @ Brunel",
  description: "Portfolio of Kartik — CS (AI) student, VC Scholar, Software Engineer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/80 dark:bg-[#0a0a0a]/80 border-b border-gray-200/50 dark:border-gray-800/50">
          <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Kartik</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {["about", "education", "experience", "projects", "skills", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 capitalize transition"
                >
                  {section}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}