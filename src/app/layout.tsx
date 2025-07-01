import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'
import SmoothScrollHandler from '@/components/SmoothScrollHandler'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Zeeshan Anwar - Full Stack Developer & AI Enthusiast',
  description: 'Portfolio of Zeeshan Anwar - A Computer Science student specializing in full-stack development with MERN stack and AI technologies.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'AI', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Zeeshan Anwar' }],
  openGraph: {
    title: 'Zeeshan Anwar - Full Stack Developer & AI Enthusiast',
    description: 'Portfolio of Zeeshan Anwar - A Computer Science student specializing in full-stack development with MERN stack and AI technologies.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider>
          <SmoothScrollHandler />
          <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}