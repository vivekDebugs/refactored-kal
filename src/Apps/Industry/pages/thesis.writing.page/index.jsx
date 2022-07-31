import styles from './thesis.writing.style.module.css'
import THESIS from '../../assets/thesis-image.jpg'
import THESIS_MEDIUN from '../../assets/thesis-image-medium.jpg'

const ThesisWritingPage = () => {
  return (
    <>
      <div className='white-space'></div>

      <div className='services-content-wrapper'>
        <h1 className='heading'>Thesis Writing</h1>

        <div className='content-img show-on-scroll '>
          <picture>
            <source media='(min-width: 768px)' srcSet={THESIS_MEDIUN} />
            <img src={THESIS} alt='student' />
          </picture>
        </div>

        <section className='content-services'>
          <h2 className='sub-heading'>
            Ph.D. Full / Complete Research work – Mentoring for your successful
            submission
          </h2>
          <h3>
            What A&amp;RD delivers along with the custom written full Ph.D.
            dissertation writing services: Service description?
          </h3>
          <p>
            We develop the entire dissertation right from the introduction to
            recommendations. Though it appears easy; it is a cumbersome task. It
            goes through various steps like: identification of topic, reviewing
            the literature, development of problem statement, research
            question(s)and research hypothesis development, research design
            (sampling, measures, procedures and data collection), statistical
            analysis, (data analysis preparation, data entry and screening,
            interpretation),discussion, results, recommendation and conclusion.
            Even synopsis preparation and power presentation will also be part
            of Ph.D. full dissertation writing services.
          </p>
          <p>
            The process of Full Dissertation Research goes from the development
            of Conceptual or theoretical framework to Conclusion and
            Recommendations and support till you get a Ph.D. degree. We would
            provide executive summary /abstract, and requisite free articles
            used for writing the full dissertation, Ph.D. synopsis, Power
            present presentation for final viva voce.
          </p>
        </section>

        <section className='content-services'>
          <h2 className='sub-heading'>
            Ph.D. Part Research work – Mentoring for your successful submission
          </h2>
          <h3>Unique and High-quality PhD Dissertation part support</h3>
          <p>
            Most of the student is facing an extremely hectic and frustrating
            writing chapter because of their skill set level low or No
            familiarity with that subject that has Well-Researched and has to
            fulfil your clear research goal. We can write starting from abstract
            or executive summary writing services, introduction chapter,
            literature review, theoretical framework chapter, hypotheses
            development, help with questionnaire development, research questions
            and objectives development, data analysis help, discussions,
            conclusions, recommendations, interview transcript analysis, ethical
            form filling, appendices, and any other help you may require with
            your dissertation. Even if you have a problem in identifying the
            right research design, identifying base for the tools, difficulties
            in identifying appropriate research gap, to write a “statement of
            the problem” section, identifying a right statistical tool for your
            data, data collection part, secondary research, and any others that
            you have.
          </p>
        </section>

        <section className='content-services'>
          <h2 className='sub-heading'>PhDAssistance-Abstract writing help</h2>
          <h3>Ph.D. Abstract – Mentoring for your successful submission</h3>
          <p>
            An abstract is the brief description of your main concept of your
            complete research paper that should be present during the
            conference. Therefore, it should be unique and perfect. A conference
            abstract needs to address the problem statement.
          </p>
          <p>
            Most of the students are facing an extremely frustrating situation
            when writing the abstract for their Ph.D. dissertation or
            conference/seminar paper that must meet well-researched and has a
            very clear research goal. We make sure that the language is well
            written and engages with no grammar or language errors. The abstract
            needs to illustrate how the research has been taken. It needs to
            describe the work process precisely. Also, make sure that the
            conference abstract gives a summary of your finding. We ensure that
            the abstract has around ten keywords linking the content of the
            paper.
          </p>
        </section>
      </div>
    </>
  )
}

export default ThesisWritingPage
