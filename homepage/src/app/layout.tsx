import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useRouter } from 'next/router';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  const isMainPage = router.pathname === '/'; 

  const isPaymentPage = router.pathname === '/tickets/payment';

  return (
    <>
      {!isPaymentPage && <Navbar />}
      {children}
      {!isMainPage && !isPaymentPage && <Footer />} {/* 메인 페이지가 아닌 경우에만 Footer를 렌더링 */}
    </>
  )
}