import styles from './journals.and.book.writing.page.style.module.css'
import JOURNALS from '../../assets/journals-image.jpg'
import JOURNALS_MEDIUM from '../../assets/journals-image-medium.jpg'

const JournalsAndBookWritingPage = () => {
  return (
    <>
      <div className='white-space'></div>
      <div className='services-content-wrapper'>
        <h1 className='heading'>Journals and Book Writing</h1>

        <div className='content-img show-on-scroll'>
          <picture>
            <source media='(min-width: 768px)' srcSet={JOURNALS_MEDIUM} />
            <img src={JOURNALS} alt='student' />
          </picture>
        </div>

        <section className='content-services'>
          <h2 className='sub-heading'>Journal Paper Writing</h2>
          <h3>
            What A&amp;RD delivers along with the custom written full Ph.D.
            dissertation writing services: Service description?
          </h3>
          <p>
            You will need to specify the journal that you are targeting for
            publication of your research paper, and the style of format
            required. Most journals prefer to have the research divided into
            separate sections, like the abstract, introduction, research
            methodology, data analysis and conclusions. Others may want the
            entire matter together in a flow. Apart from the format, the style
            specifies the type and size of font to be used, and the type of
            paper you must use. We keep in mind all these minute points while
            guiding you for writing the research paper.
          </p>
          <h3>
            Paper Writing for National and International Conferences/ Symposiums
          </h3>
        </section>

        <section className='content-services'>
          <h2 className='sub-heading'>Book Writing/Editing</h2>
          <h3>Formatting / Editing Books, Book Chapters, Thesis</h3>
          <h3>Writer Guidelines and Procedure</h3>
          <h3>
            The most important things needed for submitting your book for
            publishing are correctly formatted files for Book Interior and
            Cover. Apart from the files, you will need to provide the following
            information in the Book Submission form.
          </h3>
          <ul>
            <li>Book Title</li>
            <li>Author&#39;s Name</li>
            <li>
              Language of the Book (this cannot be changed later. You should
              select the correct language)
            </li>
            <li>
              Category of the book (this cannot be changed later. You should
              select the most suitably category)
            </li>
            <li>
              Number of Pages: Number of Pages as in the interior file of your
              book
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default JournalsAndBookWritingPage
