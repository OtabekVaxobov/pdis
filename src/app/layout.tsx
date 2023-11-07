import type { Metadata } from 'next'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import { Header2 } from '@/sections/Header'
import { Footer2 } from '@/sections/Footer'


import { ThemeProvider } from "@/components/theme/theme-provider"


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Sirdaryo viloyat asab va ruxiy kasalliklar dispanseri',
  description: 'Sirdaryo viloyat asab va ruxiy kasalliklar dispanseri',
  keywords: [
    'Sirdaryo viloyat asab va ruxiy kasalliklar dispanseri', 'sogliqni saqlash', 'sirdaryo', 'tibbiyot', 'salomatlik', 'bolnitsa sirdaryo', 'bolnitsa', 'klinika', 'ruxiy',
    'kasalliklar', 'viloyat', "dispanser", "infeksionniy", "asab kasalliklar, shifoxona", "asab",
    'Сырдарьинский областной нервно - психологический диспансер', 'Здравоохранение', 'Сырдарья', 'Медицина',
    'Здоровье', 'Сырдарьинская больница', 'Больница', 'Клиника', 'Психические', 'Болезни', 'Губернация', "диспансер", "инфекционная", "нерв, возьми", "нерв",
    'Syrdarya Regional Neuro - Psychological Dispensary', 'Healthcare', 'Syrdarya', 'Medicine', 'Health', 'Syrdarya Hospital', 'Hospital', 'Clinic', 'Mental', 'Diseases', "Government", "dispensary", "infectious", "nerve take", "nerve"
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          {children}

        </ThemeProvider>
      </body>
    </html>
  )
}
