import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Messenger Clone by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en suppressHydrationWarning">
      <body className={inter.className} suppressHydrationWarning={true} >
        <AuthContext>
          <ToasterContext/>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
