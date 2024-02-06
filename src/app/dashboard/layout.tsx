import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Image from 'next/image'
import { Sidebar } from '@/components/dashboard/sidebar'
import { playlists } from '@/lib/playlists'
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="h-[100dvh]">
              <div className="border-t h-full">
                <div className="bg-background h-full">
                  <div className="grid lg:grid-cols-5 h-full">
                    <Sidebar playlists={playlists} className="hidden lg:flex" />
                    <div className="col-span-3 lg:col-span-4 lg:border-l min-h-full">
                      <div className="flex-1 space-y-4 p-8 pt-6">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
