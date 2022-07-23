import styles from './teaching.page.style.module.css'
import CUK_STAFF_IMAGE_2015 from '../../assets/random9.jpg'

const TeachingPage = () => {
  return (
    <>
      <h1 className='heading'>Teaching</h1>

      <section className={`${styles.exp} ${styles.section}`}>
        <h3 className='sub-heading'>Professional Experience</h3>

        <ul>
          <li>
            <b>
              Assistant Professor (C) <br />
              Central University of Karnataka, Kalaburagi, India
            </b>
            <br />
            <i>October 2014 – Present</i>
          </li>

          <li>
            <b>
              Assistant Professor (Guest Faculty) <br />
              PDA Engineering College,Kalaburagi, Karnataka, India
            </b>
            <br />
            <i>August. 2014– Dec.2015</i>
          </li>

          <li>
            <b>
              Project Engineer <br />
              Wipro Technologies Pvt. Ltd., Bangalore, India
            </b>
            <br />
            <i>August 2010– July 2012</i>
          </li>
        </ul>
      </section>

      <div className='random-image show-on-scroll'>
        <img src={CUK_STAFF_IMAGE_2015} />
        <h4>CUK Staff, 2015</h4>
      </div>

      <section className={styles.section}>
        <h3 className='sub-heading'>Current Subjects and Resources</h3>

        <h3 className='sub-heading'>C</h3>

        <div>
          <iframe src='https://drive.google.com/file/d/173tha6m19YFyFiLv4x6gOiDgo0gAe80d/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1Jh4TXP9ObhVdiiSJWQvfZu9iMUNR7vK6/preview'></iframe>
        </div>

        <h3 className='sub-heading'>Computer Networks</h3>

        <div>
          <iframe src='https://drive.google.com/file/d/1pgFcFcQXxDlGa8jShJGquYtXhyvRcDLW/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1MGcjpdCGbrMWwJpe6SkkiSWbml8TwaMD/preview'></iframe>
        </div>

        <h3 className='sub-heading'>Disturbed Systems</h3>

        <div>
          <iframe src='https://drive.google.com/file/d/1TT5_0cXCrr2U4nYGH5V1Nff5VuIOLUaC/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1T_xj6V7SEHL8K3HzsLxe8h9YD7XCc0V-/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1vVskAHOy0XEKso_9Rv11VLw7AIht2MD1/preview'></iframe>
        </div>

        <h3 className='sub-heading'>Machine Learning</h3>

        <div>
          <iframe src='https://drive.google.com/file/d/1XeVpJstK0Vcb4-nLS8aczkryRahGowDz/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1qYUakF2Bd8c-NhWyo7sIN9JHjxwa7jQ7/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1OGJ1gS-1V2e0oEpmITd0KydiB7Dq5Ice/preview'></iframe>
        </div>

        <h3 className='sub-heading'>Object Oriented Analysis and Design</h3>

        <div>
          <iframe src='https://drive.google.com/file/d/1vTWgjAUcow9cycd0AZmQYrKafbwwj6Rm/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/19c3Kp3hzqUViopnwVX4j6_LvqlLTAT4x/preview'></iframe>
        </div>

        <h3 className='sub-heading'>Software Architecture</h3>

        <div>
          <iframe src='https://drive.google.com/file/d/1O2svCmFhVumEbazWB0tFlqOV4HsA9yIf/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/17PKSStbUjPGfpQ1qn4n1Z3AbSTO3Jmkb/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1YkHZGj3hYydY22aCpgt4XsfMXISEeOPF/preview'></iframe>
        </div>

        <h3 className='sub-heading'>Theory of Computation</h3>

        <div>
          <iframe src='https://drive.google.com/file/d/1w9vXb5z3g7qmmQVIgmCWMgLTRNbw0HCf/preview'></iframe>
        </div>
      </section>
    </>
  )
}

export default TeachingPage
