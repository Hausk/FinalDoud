import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Sidebar } from '@/components/dashboard/sidebar'
import { playlists } from '@/lib/playlists'
import { getAuthSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Dashboard Libre et vivant',
  description: 'Dashboard de libre et vivant',
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getAuthSession()
  if(!session) {
    redirect('/login')
  }
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
            <div className="m-h-dvh">
              <div className="border-t h-full">
                <div className="bg-background h-full">
                  <div className="grid lg:grid-cols-5 h-full">
                    <Sidebar playlists={playlists} session={session} className="hidden lg:flex" />
                    <div className="col-span-3 lg:col-span-4 lg:border-l min-h-full">
                      <div className="flex-1 space-y-4 p-8 pt-6 h-full">
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
