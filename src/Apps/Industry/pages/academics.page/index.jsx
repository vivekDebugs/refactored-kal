import styles from './academics.page.style.module.css'
import ACADEMICS from '../../assets/academics-image.jpg'
import ACADEMICS_MEDIUM from '../../assets/academics-image-medium.jpg'

const AcademicsPage = () => {
  return (
    <>
      <div className='white-space'></div>

      <div className='services-content-wrapper'>
        <h1 className='heading'>Academics and Internships</h1>

        <div className='content-img show-on-scroll'>
          <picture>
            <source media='(min-width: 768px)' srcSet={ACADEMICS_MEDIUM} />
            <img src={ACADEMICS} alt='student' />
          </picture>
        </div>

        <section className='content-services'>
          <h2 className='sub-heading'>
            Computer Science &amp; Information Technology Writing
          </h2>
          <p>
            <a href='http://www.phdassistance.com/help-guide/engineering/computer-science-engineering/'>
              Computer Science engineering
            </a>
             aspires to broaden its knowledge in cutting edge computing areas
            through advanced mandatory and optional modules. Both hardware and
            software elements of computing systems and other related topics are
            included in the master’s degree course of computer engineering.
            Students are required to complete manuscript preparation,
            dissertation/thesis and assignment writing to achieve higher credit
            score. Professional help from expert writers with years of
            experience is essential in such cases of computer science and
            engineering writing works. Such expert help guarantees high score
            and grade. We extend assistance in undergraduate study,
            post-graduate study and PhD program for manuscript writing, editing
            and proof reading, analysis of computer science dissertation and
            thesis.
          </p>
        </section>

        <section className='content-services'>
          <h2 className='sub-heading'>Our Other Services</h2>
          <h3>
            Computer Science and Engineering subjects and related materials will
            be provided
          </h3>
          <h3>Internship opportunities</h3>
          <h3>Basics and foundation of Computer and Communication Skills</h3>
        </section>
      </div>
    </>
  )
}

export default AcademicsPage
