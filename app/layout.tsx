import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Charterxe',
  description: 'ultimate experience in luxury travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
