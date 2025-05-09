import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import { BackgroundCircles } from '@/components/BackgroundCircles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Introduction',
  description: 'Personal portfolio and introduction of Apisit Yambangyang, AI Developer and Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <BackgroundCircles />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
} 