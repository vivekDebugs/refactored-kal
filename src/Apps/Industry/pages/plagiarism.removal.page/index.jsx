import styles from './plagiarism.removal.page.style.module.css'
import PLAG from '../../assets/plag-image.jpg'
import PLAG_MEDIUM from '../../assets/plag-image-medium.jpg'

const PlagiarismRemovalPage = () => {
  return (
    <>
      <div className='white-space'></div>

      <div className='services-content-wrapper'>
        <h1 className='heading'>Plagiarism Removal</h1>

        <div className='content-img show-on-scroll'>
          <picture>
            <source media='(min-width: 768px)' srcSet={PLAG_MEDIUM} />
            <img src={PLAG} alt='student' />
          </picture>
        </div>

        <section className='content-services'>
          <h2 className='sub-heading'>Plagiarism correction</h2>
          <p>
            In layman terms, plagiarism refers the usage of words or ideas of
            another as your own. If you read about some idea in some book by
            someone and use it in your work stating that idea is yours, it is
            plagiarism. If you acknowledge that someone whose idea it was while
            putting it down in your work, it is a citation.
          </p>
          <p>
            Quoting another example of plagiarism, if you come across someone
            who has written about a topic that you’re also attempting to write
            on and use his/her ideas on that topic as your own idea in your own
            paper, it is plagiarism. Here again, if you are acknowledging the
            source, it is merely a citation.
          </p>
          <p>
            Another implicit way of plagiarism is to use the idea of someone
            else as your own but incorporating them into your own work using
            different words other than that of the author. But, this is not
            considered plagiarism by most software’s that detect plagiarized
            content. Technicalities play an important role here too, like in
            make other areas of research.
          </p>
        </section>

        <section className='content-services'>
          <h2 className='sub-heading'>
            Why is it important to edit plagiarized content? – Role of A&amp;RD
            for your plagiarism correction service
          </h2>
          <p>
            The prime concern of any research scholar is to create a
            dissertation that is devoid of copied material from any other source
            since it is considered most brutal of errors one can make in
            research. Every research scholar wants to give a competent piece of
            work without having to compromise on their integrity and hard work.
          </p>
          <p>
            No matter what kind of writer you are, you simply cannot afford to
            turn in inferior work. Content contaminated with grammatical errors
            and misspellings will prevent you from succeeding. Grades could go
            low, and dissertations could be considered worthless due to
            plagiarism. That is why we give special importance to editing
            dissertations and assignments off plagiarized content and offer the
            most advanced ways of detecting plagiarism and nullifying the
            problem without losing the ideas conveyed by the research scholar.
          </p>
        </section>
      </div>
    </>
  )
}

export default PlagiarismRemovalPage
