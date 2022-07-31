import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation, NavLink } from 'react-router-dom'
import styles from './portfolio.layout.style.module.css'
import './portfolio.global.style.css'
import profileImage from '../assets/image.jpg'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaAngleDoubleDown,
} from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import LOGO from '../assets/logo.png'

const routes = [
  {
    id: 'home',
    route: '/#main',
    label: 'Home',
  },
  {
    id: 'about',
    route: '/about',
    label: 'About',
  },
  {
    id: 'research',
    route: '/research',
    label: 'Research',
  },
  {
    id: 'publications',
    route: '/publications',
    label: 'Publications',
  },
  {
    id: 'teaching',
    route: '/teaching',
    label: 'Teaching',
  },
  {
    id: 'resources',
    route: '/resources',
    label: 'Resources',
  },
  {
    id: 'awards-membership',
    route: '/awards-membership',
    label: 'Awards and Membership',
  },
  {
    id: 'conferences-workshops',
    route: '/conferences-workshops',
    label: 'Conferences and Workshops',
  },
  {
    id: 'industry',
    route: '/industry',
    label: 'Industry',
  },
  {
    id: 'contact',
    route: '/contact',
    label: 'Contact me',
  },
]

const socials = [
  {
    label: 'facebook',
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com/gauri.kalnoor',
  },
  {
    label: 'twitter',
    icon: <FaTwitter />,
    href: 'https://twitter.com/GKalnoor',
  },
  {
    label: 'linkedin',
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/gauri-kalnoor-00b41022/',
  },
]

export const PortfolioLayout = () => {
  const [isNavActive, setIsNavActive] = useState(false)

  const location = useLocation()

  const toggleNavbar = () => {
    setIsNavActive(isNavActive => !isNavActive)
  }

  const closeNavbar = () => {
    if (!isNavActive) return
    setIsNavActive(false)
  }

  useEffect(() => {
    document.title = 'Gauri Kalnoor'
    const FAVICON_ELEMENT = document.getElementById('favicon')
    FAVICON_ELEMENT.href = LOGO
  }, [])

  return (
    <div className={styles.body}>
      <div className={styles.poster}>
        <div className={styles.profile}>
          <img src={profileImage} />
          <h3>Gauri Kalnoor (Ph.D)</h3>
          <b>
            Assistant Professor (C) <br /> Central University of Karnataka,
            Kalaburagi
          </b>
        </div>
        <div className={styles.researchBrief}>
          <h3>Research Areas</h3>
          <ul>
            <li>Wireless Sensor Networks</li>
            <li>IoT (Internet of Things)</li>
            <li>Security in wireless networks</li>
            <li>Markov Decision Process</li>
          </ul>
        </div>
        <div className={styles.contactBrief}>
          <h3>Contact</h3>
          <p>
            CST dept., School of Engineering, Central Univeristy of Karnataka,
            Kalaburagi - Karnataka, India, Pin: 585367 <br />
            <br /> kalnoor.gauri@gmail.com <br /> kalnoor.gauri@ieee.org <br />
            <br /> (+91) 944-997-5076
          </p>
        </div>
        <div className={styles.socialBrief}>
          <h3>Connect with me</h3>
          <ul>
            {socials.map(s => (
              <li key={s.label}>
                <a href={s.href} target='_blank'>
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.mainContent}>
        <nav className={styles.nav}>
          <div className={`${styles.toggle} ${isNavActive ? styles.cut : ''}`}>
            <AiOutlineMenu className={styles.menu} onClick={toggleNavbar} />
          </div>
          <ul className={isNavActive ? styles.toggleActive : ''}>
            {routes.map(route => (
              <li id={route.id} key={route.id}>
                <NavLink
                  to={route.route}
                  onClick={closeNavbar}
                  className={({ isActive }) => isActive && styles.activeNavLink}
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {location.pathname === '/' && <HeroSection />}

        <main className={styles.main} id='main'>
          <Outlet />
        </main>

        <footer className={styles.footer}>
          &copy; 2020 - Developed by &nbsp;
          <a href='https://www.linkedin.com/in/vivekkumar1503/' target='_blank'>
            Vivek Kumar
          </a>
          <br />
          &nbsp; <b>All rights Reserved</b>
        </footer>
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className={styles.siteIntro}>
      <div className={styles.imageDiv}></div>

      <div className={styles.siteIntroTxt}>
        <h1>
          Hey, This is <span>Gauri&nbsp;Kalnoor</span>
        </h1>
        <h3>
          Welcome to my website, <br /> Know more about me.
        </h3>
        <Link to='/#main'>
          <FaAngleDoubleDown />
        </Link>
      </div>
    </section>
  )
}
