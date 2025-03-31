import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test App',
  description: 'A simple test app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
