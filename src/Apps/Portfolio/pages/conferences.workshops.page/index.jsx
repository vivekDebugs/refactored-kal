import styles from './conferences.workshops.page.style.module.css'
import WORKSHOP_IMAGE from '../../assets/random8.jpg'
import WORKSHOP_IMAGE_TWO from '../../assets/random11.jpg'

const ConferencesAndWorkshopsPage = () => {
  return (
    <>
      <h1 className='heading'>Conferences and Workshops</h1>

      <section>
        <h3 className='sub-heading'>Conferences Attended</h3>

        <ul>
          <li>
            KSTA Conference on Science and Technology for Disaster Management
            organized by “The School of Earth Sciences, Central University of
            Karnataka, Kadaganchi, Kalaburagi on 22nd and 23rd Jan 2015.
          </li>
          <li>
            2nd National Conference on “On Recent Trends in Applied Sciences and
            Engineering (NCRTSE-2019)” Online/ Virtual based.
          </li>
          <li>
            National Conference on “On Recent Trends in Applied Sciences and
            Engineering (NCRTSE- 2018)” Online/ Virtual based.
          </li>
          <li>
            National Conference on “Science and Technology for Inclusive
            Development” at Gulbarga university Kalaburagi, KSTA sponsored, at
            GUG campus on 6th and 7th March 2018.
          </li>
          <li>
            National Conference on “Advances in Computer Sciences and
            Engineering (NCACSWBDA- 2016)” Organized by SDM Dharwad, 24th Oct
            2016.
          </li>
        </ul>
      </section>

      <section>
        <h3 className='sub-heading'>Workshops and Trainings attended</h3>

        <ul>
          <li>
            1. One-week Faculty development program on “Performance Analysis of
            Computer Network (PACN) from 22nd to 26th September 2014 held at PDA
            college of Engineering, Kalaburagi.
          </li>
          <li>
            One-week Faculty development program on “MATLAB and its Applications
            in Digital Image Processing and Pattern Recognition from 13th to
            17th October 2014 held at PDA college of Engineering, Kalaburagi.
          </li>
          <li>
            One-week National Winter Training Program (NWTP) on “Big Data and
            Hadoop (BDH) organized by EDC IIT Roorkee from 29th February to 4rth
            March 2016, held at PDA College of Engineering, Kalaburagi.
          </li>
          <li>Workshop on “Wireless Communication”.</li>
          <li>
            One Week Short term training Programme on “Automation using IoT”.
          </li>
          <li>
            One Week Short term training Programme on “Dynamic Web Designing”.
          </li>
          <li>One Week Workshop on “Data Analytics using R”.</li>
          <li>Two Day Workshop on “Big Data Analytics”.</li>
          <li>
            Three Day Training Programme on “Occupational Health, Safety and
            Environment”
          </li>
          <li>
            Six Days Faculty Program on”Real Time WSN and Network Simulator”.
          </li>
          <li>Workshop on “Android App Development”.</li>
          <li>National Workshop on “Innovative Research Techniques”.</li>
          <li>
            Faculty Development Programmeon”Soft Computing Approaches to Pattern
            Recognition”
          </li>
          <li>
            One-Week Faculty Development Programme on “Performance Analysis of
            Computer Network”.
          </li>
          <li>
            One-Week Faculty Development Programme on “Hands on Training
            Programme on MATLAB and its Applications in Digital Image Processing
            and Pattern Recognition”.
          </li>
          <li>Three Day Workshop on “Research Methodologies and Latex”.</li>
          <li>Workshop on”IEEExplore and Knimbus E-Library Resources”.</li>
          <li>AICSC(All India Computer Society Congress)</li>
          <li>National Workshop on “Cyber Security”</li>
          <li>IEEE Technology Entrepreneurs’ Summit</li>
          <li>
            One-week FDP on “Machine Intelligence for Data Analysis Using
            Python”.
          </li>
          <li>IEEE workshop on “Wireless Communication”.</li>
        </ul>
      </section>

      <div className='random-image show-on-scroll'>
        <img src={WORKSHOP_IMAGE_TWO} />
        <h4>.</h4>
      </div>

      <section>
        <h3 className='sub-heading'>Webinar Participation</h3>

        <ul>
          <li>
            International Webinar on the topic “Creating opportunities in the
            face of adversities” delivered by Mr. Pankaj Srivastava, CEO of
            PracticalSpeak, California, USA.
          </li>
          <li>
            International Webinar on the topic “Technology of Sustainability:
            Potential of technology in shaping the world”.
          </li>
          <li>
            EBSCO Information Service, IEEE, “Advancing Your Research And
            Projects With IEEE Publication”.
          </li>
        </ul>
      </section>

      <section>
        <h3 className='sub-heading'>Training/ Mentoring/ Tutoring</h3>

        <ul>
          <li>
            3-Days Workshop Organized and Participated in Training Program on
            “Occupational Health Safety and Environment” at CUK Campus by School
            of Engineering from 19th to 21st Oct 2016.
          </li>
        </ul>
      </section>

      <div className='random-image show-on-scroll'>
        <img src={WORKSHOP_IMAGE} />
        <h4>Conducted Workshop at CUK</h4>
      </div>

      <section>
        <h3 className='sub-heading'>Courses taken Online</h3>

        <ul>
          <li>
            Online courses on Machine learning, Data Science and Deep Learning
            with Python- Udemy
          </li>
          <li>StartUpIndia Learning Program- UpGrad</li>
          <li>Machine Learning with Python-Cognitive class-IBM Initiative</li>
          <li>Data-Science Hands-on with Open Source Tools- Cognitive Class</li>
          <li>Role of Teachers in Quality Enhancement & Accreditation</li>
        </ul>
      </section>
    </>
  )
}

export default ConferencesAndWorkshopsPage
