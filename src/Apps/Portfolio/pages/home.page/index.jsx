import { useState } from 'react'
import { useInterval } from '../../../../lib/utils'
import styles from './home.page.style.module.css'
import articleOneImg from '../../assets/abstract-1.png'
import articleTwoImg from '../../assets/abstract-2.png'
import articleThreeImg from '../../assets/abstract-3.png'
import articleFourImg from '../../assets/abstract-4.png'
import feedbackOneImg from '../../assets/feed-carousel-img-1.jpg'
import feedbackTwoImg from '../../assets/feed-carousel-img-2.jpeg'
import feedbackThreeImg from '../../assets/feed-carousel-img-3.jpeg'
import feedbackFourImg from '../../assets/feed-carousel-img-4.jpeg'
import { Link } from 'react-router-dom'
import { FaQuoteLeft } from 'react-icons/fa'

const articles = [
  {
    image: articleOneImg,
    href: '/research#abstract-one',
    title: 'Wireless Sensors',
  },
  {
    image: articleTwoImg,
    href: '/research#abstract-two',
    title: 'Intrusion detection',
  },
  {
    image: articleThreeImg,
    href: '/research#abstract-three',
    title: 'Review work',
  },
  {
    image: articleFourImg,
    href: '/research#abstract-four',
    title: 'Machine learning',
  },
]

const feedbacks = [
  {
    author: 'Prof. H.M Maheshwaraiah',
    quote:
      'No matter the situation, never let your emotions over power your intelligence.',
    designation: 'Vice Chancellor',
    organisation: 'Central University of Karnataka',
    image: feedbackOneImg,
  },
  {
    author: 'Basavaraj C Biradar',
    quote:
      'One of the most disciplined and dedicated person I have come across in my life.',
    designation: 'Entrepreneur',
    organisation: 'Kalaburagi',
    image: feedbackTwoImg,
  },
  {
    author: 'Suryakanth Kalnoor',
    quote:
      "Make sure you don't start seeing yourself through the eyes of those who don't value you. Know your worth even if they don't.",
    designation: 'Branch manager',
    organisation: 'SleuthsIndia Pvt limited, Banglore',
    image: feedbackThreeImg,
  },
  {
    author: 'Padmaraj Nandyal',
    quote:
      'Patience, persistence, and perspiration make an unbeatable combination for success, you have all, keep succeeding and all the best for your career.',
    designation: 'Foreman in dept. of I&PE',
    organisation: 'PDA College of Engineering',
    image: feedbackFourImg,
  },
]

const HomePage = () => {
  const [activeArticleIdx, setActiveArticleIdx] = useState(0)
  const [activeFeedbackIdx, setActiveFeedbackIdx] = useState(0)

  useInterval(() => {
    setActiveArticleIdx(
      activeArticleIdx => (activeArticleIdx + 1) % articles.length
    )
  }, 3000)

  useInterval(() => {
    setActiveFeedbackIdx(
      activeFeedbackIdx => (activeFeedbackIdx + 1) % feedbacks.length
    )
  }, 5000)

  return (
    <>
      <section className={styles.welcomeMessage}>
        <h3>
          “If you believe in living a respectable life, you believe in self-help
          which is the best help”
        </h3>

        <p>
          We must stand on our own feet and fight as best as we can for our
          rights for being identified as an individual. An attempt at this
          progressive journey of mine I call upon for collaborative work
          learning, let's carry on our agitation and organize our own forces of
          individuals. Power and prestige will come to you through struggle.
        </p>

        <p>
          This website provides a walk through of various works which I’m
          working on and have worked on, the platform is open for a professional
          collaboration for promoting education and being educated. Making use
          of cutting-edge technologies.
        </p>

        <ul>
          <li>Technical paper writing and support</li>
          <li> Career Guidance and placements</li>
          <li>Blended learning options</li>
        </ul>
      </section>

      <section>
        <h3 className='sub-heading' align='center'>
          Articles
        </h3>

        <div className={styles.articlesCarouselContainer}>
          <div className={styles.abstractContainer}>
            {articles.map((article, idx) => (
              <Link
                to={article.href}
                key={idx}
                className={`${styles.articleSlide} ${styles.abstractAmine}`}
                style={{ display: activeArticleIdx === idx ? 'block' : 'none' }}
              >
                <img src={article.image} />
                <h2>{article.title}</h2>
                <span>2 minutes</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3 className='sub-heading' align='center'>
          Learning Technology: WSN
        </h3>

        <div className={styles.videos}>
          <iframe
            src='https://www.youtube.com/embed/Y5aP8yvtyd0?autoplay=1&mute=1'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>

        <h3 className='sub-heading' align='center'>
          How IoT work?
        </h3>

        <div className={styles.videos}>
          <iframe
            src='https://www.youtube.com/embed/T2D6TdlJP5I?autoplay=1&mute=1'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section>
        <h3 className='sub-heading' align='center'>
          What people say about me.
        </h3>

        <div className={styles.quotes}>
          <div className={styles.feedbackCarouselContainer}>
            {feedbacks.map((feedback, idx) => (
              <div
                key={idx}
                className={`${styles.feedbackSlide} ${styles.abstractAnime}`}
                style={{
                  display: activeFeedbackIdx === idx ? 'block' : 'none',
                }}
              >
                <FaQuoteLeft className={styles.quoteLeft} />
                <q>{feedback.quote}</q>
                <img src={feedback.image} />
                <br />
                <p className={styles.author}>
                  <i>{feedback.author}</i> <br /> {feedback.designation} <br />
                  {feedback.organisation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
