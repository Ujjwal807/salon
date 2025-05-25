import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boho Unisex Salon',
  description: 'A Salon for all your care',
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
