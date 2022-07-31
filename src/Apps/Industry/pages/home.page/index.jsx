import styles from './home.page.style.module.css'
import { Link } from 'react-router-dom'
import ABOUT from '../../assets/about.jpg'
import ABOUT_MEDIUM from '../../assets/about-medium.jpg'
import ABOUT_LARGE from '../../assets/about-large.jpg'
import VISION from '../../assets/vision.jpg'
import PRIVACY from '../../assets/privacy.jpg'
import SKYPE from '../../assets/skype.png'
import WRITERS from '../../assets/writers.png'
import PLAGIARISM_FREE from '../../assets/plag-free.png'
import PEN from '../../assets/pen.png'
import BOOKS from '../../assets/books.png'
import DEGREE from '../../assets/degree.png'
import WEB_DEV from '../../assets/web-dev.png'

const scrollWindow = () => {
  window.scrollBy(0, window.innerHeight)
}

const HomePage = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerOverlay}></div>
        <div className={styles.intro}>
          <h1>Quality. Simplicity.</h1>
          <p>
            Planning for excellent academic skills and good research? Get
            started right now with <span className={styles.ard}>A&RD</span>
          </p>
          <div className={styles.bannerBtn}>
            <a href='javascript:void(0)' onClick={scrollWindow} className='btn'>
              Learn More
            </a>
            <br />
            <span>OR</span> <br />
            <a href='#services' className={`btn ${styles.customBtn}`}>
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.about} ${styles.homeLayout} addPad`}>
        <div className={styles.imageDiv}>
          <picture>
            <source media='(min-width: 950px)' srcSet={ABOUT_MEDIUM} />
            <source media='(min-width: 768px)' srcSet={ABOUT_LARGE} />
            <img src={ABOUT} alt='student' />
          </picture>
        </div>
        <div>
          <h2>About us</h2>
          <p>
            A&amp;RD is one of the reputed academic guidance provider to support
            students, research scholars, entrepreneurs, and professionals from
            various organizations in providing consistently high-quality writing
            and data analytical services every time. We value every client and
            make sure their requirements are identified and understood by our
            specialized professionals and analysts, enriched in experience to
            deliver technically sound output within the requested timeframe.
            Writers at A&amp;RD are best referred as &#39;Researchers&#39; since
            every topic they handle unique and challenging.
          </p>
          <p>
            We specialize in handling text and data, i.e., content development
            and our expertise has passion towards research and personal
            assistance as we work closely with you for a very professional and
            quality output within your stipulated time frame. Our services cover
            vast areas, and we also support either part or entire research
            paper/service as per your requirement.
          </p>
        </div>
        <div className='clear'></div>
      </section>

      <section className={`${styles.vision} ${styles.homeLayout} addPad`}>
        <div className={styles.imageDiv}>
          <img src={VISION} alt='A&RD Vision and Mission' />
        </div>
        <div>
          <h2>Vision and Mission</h2>
          <p>
            A&amp;RD aspires to the best research guidance provider in the world
            through its holistic approach and aspires to achieve this vision,
            A&amp;RD approaches each research work through unique methodology
            and after a lot of discussion between research expertise,
            professors, data management experts, industry professionals and
            language &amp; technical editors.
          </p>
        </div>
        <div className='clear'></div>
      </section>

      <section className={`${styles.privacy} ${styles.homeLayout} addPad`}>
        <div className={styles.imageDiv}>
          <img src={PRIVACY} alt='A&RD Confidensiality and Privacy' />
        </div>
        <div>
          <h2>Confidensiality and Privacy</h2>
          <p>
            We ensure that your research data, like your concept, collected
            data, interview transcripts, printed copies of these works, soft
            copies, research articles and every document related to your
            research is confidential and strictly handled only for the internal
            purposes. Your data will be kept with us up to six months so that in
            case if you accidently lost your data (thesis copies, excel sheets)
            you can get in touch with us for the secured research work of yours.
          </p>
        </div>
        <div className='clear'></div>
      </section>

      <section className={`${styles.features} addPad`}>
        <h2>Best Features</h2>

        <div className={styles.featuresRow}>
          <div className={styles.featuresCol}>
            <img src={SKYPE} alt='' />
            <h4>Learn Anywhere</h4>
            <p>Training with Team Viewer and Skype</p>
          </div>
          <div className={styles.featuresCol}>
            <img src={WRITERS} alt='' />
            <h4>Professional Writers</h4>
            <p>Learn from industry experts that are highly skillful</p>
          </div>
          <div className={styles.featuresCol}>
            <img src={PLAGIARISM_FREE} alt='' />
            <h4>Plagiarism free</h4>
            <p>100% Plagiarism Free Guaranteed</p>
          </div>
        </div>
      </section>

      <section className={`${styles.servicesBrief} addPad`} id='services'>
        <h2>Our Services</h2>

        <div className={styles.servicesRow}>
          <Link to='thesis-writing' className={styles.servicesCol}>
            <img src={PEN} alt='' />
            <h4>Thesis writing</h4>
          </Link>
          <Link to='journals-writing' className={styles.servicesCol}>
            <img src={BOOKS} alt='' />
            <h4>Journals and Book writing</h4>
          </Link>
          <Link to='academics' className={styles.servicesCol}>
            <img src={DEGREE} alt='' />
            <h4>Academics</h4>
          </Link>
          <Link to='web-development' className={styles.servicesCol}>
            <img src={WEB_DEV} alt='' />
            <h4>Web Development</h4>
          </Link>
        </div>
      </section>

      <section className={`${styles.contactForm} addPad`}>
        <h2>Contact Us</h2>

        <form
          action='contactform.php'
          className={styles.contactForm}
          method='POST'
        >
          <div className={styles.nameEmail}>
            <input type='text' name='name' placeholder='Your Name*' required />
            <input
              type='email'
              name='email'
              placeholder='Your Email*'
              required
            />
          </div>
          <input type='text' name='subject' placeholder='Your Subject..' />
          <textarea name='message' placeholder='Your Message..'></textarea>
          <button className='btn' type='submit' name='submit'>
            Send Message
          </button>
        </form>
      </section>
    </>
  )
}

export default HomePage
