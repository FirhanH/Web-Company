import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface LayoutProps {
  children: ReactNode
  footerVariant?: 'full' | 'minimal' | 'projects'
  bgClass?: string
}

export default function Layout({ children, footerVariant = 'full', bgClass = 'bg-[#f6f7f8]' }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${bgClass}`}>
      <Navbar />
      <main className="flex-1 pt-14">
        {children}
      </main>
      <Footer variant={footerVariant} />
    </div>
  )
}
