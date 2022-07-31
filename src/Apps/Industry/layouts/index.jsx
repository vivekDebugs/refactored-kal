import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './industry.global.style.css'
import { Header, Footer } from '../components'
import LOGO from '../assets/logo-cropped.png'

export const IndustryLayout = () => {
  useEffect(() => {
    document.title = 'A&RD'
    const FAVICON_ELEMENT = document.getElementById('favicon')
    FAVICON_ELEMENT.href = LOGO
  }, [])

  return (
    <main className='industry-wrapper-main'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
