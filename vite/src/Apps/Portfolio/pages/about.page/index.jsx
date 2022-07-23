import styles from './about.page.style.module.css'

const AboutPage = () => {
  return (
    <>
      <h1 className='heading'>About</h1>

      <section>
        <p>
          Exceptionally seasoned and dedicated Engineering Professor for 5+
          years of teaching and 2 Years of Industry with a strong record in both
          teaching and administration. Adept at explaining highly complex
          engineering theories and practices in a clear and accessible manner to
          a variety of professional and non-professional audiences. Committed to
          offering interested students, full attention, and expertise to help
          further their academic and professional goals.
        </p>
      </section>

      <section>
        <h3 className='sub-heading'>Core Qualification</h3>

        <ul>
          <li>
            Extensive breadth of experience in engineering instruction at the
            college level
          </li>
          <li>
            Strong ability to deliver course material through a variety of
            teaching methods
          </li>
          <li>Excellent presentation and communication skills</li>
          <li>
            High multitasking ability to balance teaching and administrative
            duties
          </li>
        </ul>
      </section>

      <section>
        <h3 className='sub-heading'>Education</h3>

        <ul>
          <li>
            Pursuing Ph.D., Computer Science and Engineering, BMS College of
            Engineering, VTU Belagavi, Karnataka, India{' '}
            <i>
              “IoT- based Intelligent Intrusion Detection in a Smart
              Environment”
            </i>
            .{/* Completed comprehensive Viva-Voce on 15/06/2020. */}
          </li>

          <li>
            2010, MTech., Computer Science and Engineering, BIT, VTU, Belagavi
            With 76.7% and held 2nd rank in the College.
          </li>

          <li>
            2008, B. E., Computer Science Engineering, HKBK College of
            Engineering, VTU, Belagavi, Karnataka.
          </li>
        </ul>
      </section>

      <section>
        <h3 className='sub-heading'>Technical Skills</h3>

        <ul>
          <li>Programming Language: C, C++,Python</li>
          <li>SQL query Language</li>
          <li>Simulation: MATLAB, NS2</li>
          <li>Operating Systems: Windows, Linux, Ubuntu</li>
        </ul>
      </section>
    </>
  )
}

export default AboutPage
