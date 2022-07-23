import styles from './contact.page.style.module.css'
import PROFILE_IMAGE from '../../assets/image.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <>
      <h1 className='heading'>Contact me</h1>

      <section className={styles.contact}>
        <div className={styles.imgSocialMedia}>
          <img src={PROFILE_IMAGE} /> <br />
          <a href='https://www.facebook.com/gauri.kalnoor' target='_blank'>
            <FaFacebookF className={`${styles.fa} ${styles.faFacebook}`} />
          </a>
          <a href='https://twitter.com/GKalnoor' target='_blank'>
            <FaTwitter className={`${styles.fa} ${styles.faTwitter}`} />
          </a>
          <a
            href='https://www.linkedin.com/in/gauri-kalnoor-00b41022/'
            target='_blank'
          >
            <FaLinkedinIn className={`${styles.fa} ${styles.faLinkedIn}`} />
          </a>
        </div>

        <div className={styles.contactInfo}>
          <p>
            <b>Gauri Kalnoor</b>
            <br />
            Assistant Professor (C)
            <br />
            Central Univeristy of Karnatka
            <br />
          </p>
          <p>
            kalnoor.gauri@gmail.com <br /> kalnoor.gauri@ieee.org <br />
            <br /> Ph: +919449975076 (M)
          </p>

          <ul>
            <li>
              OCRID:
              <a href='https://orcid.org/0000-0001-9970-4697' target='_blank'>
                https://orcid.org/0000-0001-9970-4697
              </a>
            </li>
            <li>Web of Science Researcher ID: AAS-6145-2020</li>
            <li>
              Website: <br />
              <a
                href='https://bmsce-in.academia.edu/GauriKalnoor'
                target='_blank'
              >
                https://bmsce-in.academia.edu/GauriKalnoor
              </a>
              <br />
              <a
                href='https://www.mendeley.com/profiles/gauri-kalnoor'
                target='_blank'
              >
                https://www.mendeley.com/profiles/gauri-kalnoor
              </a>
              <br />
              <a
                href='https://www.researchgate.net/profile/Gauri_Kalnoor'
                target='_blank'
              >
                https://www.researchgate.net/profile/Gauri_Kalnoor
              </a>
              <br />
              <a href='https://publons.com/' target='_blank'>
                https://publons.com/
              </a>
              <br />
              <a href='researcher/1449314/gauri-kalnoor' target='_blank'>
                researcher/1449314/gauri-kalnoor
              </a>
              <br />
              <a href='https://www.linkedin.com/feed/' target='_blank'>
                https://www.linkedin.com/feed/
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ContactPage
