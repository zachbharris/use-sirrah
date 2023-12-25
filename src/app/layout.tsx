import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'useSirrah',
  description: 'React components, hooks and utilities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, "p-4 mt-14")}>
          <Navigation />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
