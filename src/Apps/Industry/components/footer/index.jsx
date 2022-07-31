import styles from './footer.style.module.css'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'
import LOGO from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.quickNav}>
        <img className={styles.brandLogo} src={LOGO} alt='A&RD Logo' />
        <div className={styles.navBlockContainer}>
          <h3>Quick Navigation</h3>
          <div className={styles.navBlock}>
            <a href='http://thesisconcepts.com/post-graduatemasters/'>
              Mtech Thesis Writing Service
            </a>
            <a href='http://thesisconcepts.com/phd-thesis-writing-services/'>
              PhD Dissertation Writing
            </a>
          </div>
          <div className={styles.navBlock}>
            <a href='http://thesisconcepts.com/thesis-editing-services/'>
              PhD Dissertation Editing
            </a>
            <a href='http://thesisconcepts.com/journal-writing/'>
              Journal Research Paper Writing
            </a>
          </div>
          <div className={styles.navBlock}>
            <a href='http://thesisconcepts.com/journal-editing/'>
              Journal Paper Publication Support
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerXt}>
        <div className={styles.developerInfo}>
          2020 © A&RD. Design by
          <a href='https://www.linkedin.com/in/vivekkumar1503/' target='_blank'>
            Vivek Kumar
          </a>
          .
        </div>
        <ul>
          <li>
            <a
              href='https://www.facebook.com/gauri.kalnoor'
              target='_blank'
              className='fa'
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href='mailto: ard.info2020@gmail.com' className='fa'>
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href='https://wa.me/919449975076' target='_blank' className='fa'>
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/gauri-kalnoor-00b41022/'
              target='_blank'
              className='fa'
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
