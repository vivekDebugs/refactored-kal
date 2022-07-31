import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.style.module.css'
import CROPPED_LOGO from '../../assets/logo-cropped.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const LIST_OF_SERVICES_LINKS = [
  {
    href: 'thesis-writing',
    title: 'Thesis Writing',
  },
  {
    href: 'journals-writing',
    title: 'Journals and Book Writing',
  },
  {
    href: 'academics',
    title: 'Academics',
  },
  {
    href: 'plagiarism-removal',
    title: 'Plagiarism Removal',
  },
  {
    href: 'web-development',
    title: 'Web Development',
  },
]

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const handleBurgerClick = () => {
    setIsNavbarOpen(isNavbarOpen => !isNavbarOpen)
  }

  const onLinkClick = () => {
    setIsNavbarOpen(false)
  }

  const ListOfServicesLinksList = () => {
    return (
      <ul className={styles.listOfServices}>
        {LIST_OF_SERVICES_LINKS.map((link, idx) => (
          <li key={idx}>
            <Link to={link.href} onClick={onLinkClick}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <header id='header' className={styles.header}>
      <div className={styles.brand}>
        <Link to='/industry/' onClick={onLinkClick}>
          <img src={CROPPED_LOGO} /> A&amp;RD
        </Link>
      </div>
      <nav>
        <ul className={`${styles.mainUl} ${isNavbarOpen ? styles.active : ''}`}>
          <li>
            <Link to='/industry' onClick={onLinkClick}>
              Home
            </Link>
          </li>
          <li className={styles.services}>
            <a href='javascript:void(0)'>Services</a>
            <ListOfServicesLinksList />
          </li>
          <li>
            <Link to='tutorials' onClick={onLinkClick}>
              Tutorials
            </Link>
          </li>
          <li>
            <Link to='resources' onClick={onLinkClick}>
              Resources
            </Link>
          </li>
          <li>
            <Link to='faq-tools' onClick={onLinkClick}>
              FAQs &amp; Tools
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.burger} onClick={handleBurgerClick}>
        {isNavbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </header>
  )
}

export default Header
