import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Rizky Ardi Maulana`,
  description: 'Web Portfolio of Ardi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Head>
            <title>
              {`Ardi's Portfolio`}
            </title>
          </Head>
          <header style={{position:"sticky", width:"100%", top:"0px", backgroundColor:"white", zIndex:"2"}}>
            <Header/>
          </header>
          <main style={{marginTop:'120px'}}>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
    </html>
  )
}
