import { Geist } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
})

const metadata: Metadata = {
  title: 'My Hao Blog',
  description: 'A simple blog built with Next.js'
}
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='{geist.className}'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}