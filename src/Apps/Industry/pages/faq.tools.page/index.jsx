import styles from './faq.tools.page.style.module.css'

const FAQS = [
  {
    question: 'What are the steps taken to protect my privacy?',
    answer:
      'A&amp;RD has a high code for moral and ethical responsibility; the company never shares anything about the client&#39;s personal information, purchase details or financial information with their professor, friend/relative, a spammer or third party under any circumstances.',
  },
  {
    question:
      'How do you ensure that the dissertation is not plagiarized or doesn&#39;t contain low quality content?</h5>',
    answer:
      'The company&#39;s Quality Assurance Officer runs each dissertation on a strict Anti-Plagiarism Scanner and sends the client the Anti Plagiarism Proof Report so that the client is confident that the company&#39;s dissertation is 100% Plagiarism-free and he/she can submit it confidently.',
  },
  {
    question: 'I need some revisions. Will the writer adhere to my request?',
    answer:
      'The client&#39;s satisfaction means everything to the company. It promise Unlimited Revisions to ensure client&#39;s satisfaction and all instructions laid out are followed throughout the dissertation.',
  },
  {
    question:
      'Will I get the Dissertation /Thesis /Assignment in the format I request for?',
    answer:
      'Yes. We will develop the work in compliance with the requested format with no deviations.',
  },
  {
    question:
      'I just sent an email or filled up the enquiry form. How soon can I expect a reply?',
    answer:
      'We would normally reply back on email within 8-10 hours however latest within 24 hours. Enquiry forms are replied on priority.',
  },
  {
    question:
      'I do not want to disclose my identity. How should I approach A&amp;RD?',
    answer:
      'We will need your identity details before we proceed for the work. However, all such information is kept 100% confidential and is not shared with anyone under any circumstances. Also, we provide ethical consulting services for your research work. You should not submit our work as your own work. We are like mentors for your dissertation.',
  },
  {
    question: 'How will the process work once I make the payment?',
    answer:
      'After the payment is done, you need to fill up place order form if not already done. You will receive payment confirmation email and also the mail from our coordinator introducing her/him. Their emails will have all necessary information on how to proceed further.',
  },
  {
    question: 'Will I get my work completed on time?',
    answer:
      'Yes, A&amp;RD has a track record of over 93% delivery commitment kept. Only in cases beyond Human control will the delay happen.',
  },
  {
    question: 'I want to get help on choosing topics?',
    answer:
      'Yes, we can definitely help you in choosing right and appropriate topic of your interest for your research work.',
  },
]

const createMarkUp = htmlString => ({
  __html: htmlString,
})

const FAQToolsPage = () => {
  return (
    <>
      <div className='white-space'></div>

      <div className={styles.faqToolsWrapper}>
        <section className={styles.faq}>
          <h2 className='sub-heading'>Frequently Asked Questions</h2>
          <div className={styles.faqBoxContainer}>
            {FAQS.map((faq, idx) => (
              <div key={idx} className={styles.faqBox}>
                <h5 dangerouslySetInnerHTML={createMarkUp(faq.question)} />
                <p dangerouslySetInnerHTML={createMarkUp(faq.answer)} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.tools}>
          <h2 className='sub-heading'>ICT Tools</h2>
          <p>
            Code writers, system architects, data drillers, web designers and
            mobile app developers scurry to keep up with emerging theory,
            research and workplace methodology. Fortunately, an abundant
            resource of free or paid courses from major schools and software
            manufacturers is available online, alongside certificate preparation
            programs and free, massive open online courses (MOOCs) from
            prominent colleges and universities. Professional computer science
            associations hold national conferences and local workshops/seminars
            to help specialists build their toolbox of advanced skills. Some
            science websites allow students and professionals to submit code for
            testing, with results compiled into an educational database. Find
            these and more, below.
          </p>
          <div className={styles.sources}>
            <h3>
              <a href='https://www.classcentral.com/subject/cs'>
                Class Central
              </a>
            </h3>
            <p>
              The aggregator of online courses and credential preparation
              programs rounds up a listing of more than 450 free MOOC classes
              for the taking. Classes come from major colleges and university
              departments of computer science and engineering.
            </p>
            <h3>
              <a href='https://coderwall.com/'>Coderwall</a>
            </h3>
            <p>
              Join more than 6,000 coding teams sharing professional tips,
              tutorials, code snippets and information on new technologies.
              Users build a community using social media sources such as
              LinkedIn, Twitter and GitHub.
            </p>
            <h3>
              <a href='https://www.computerscience.org/'>
                ComputerScienceOnline
              </a>
            </h3>
            <p>
              Visitors can review a deep roundup of free MOOC courses in
              computer science with specialties in engineering, forensics,
              networking, programming and cyber security. Includes course
              descriptions and links to the programs.
            </p>
            <h3>
              <a href='https://www.coursera.org/browse/computer-science?languages=en'>
                Coursera
              </a>
            </h3>
            <p>
              Coursera partners with major universities to offer online
              self-paced courses in software development, mobile and web
              development, algorithms, computer and network security, and
              product design and development. Financial aid is available.
            </p>
            <h3>
              <a href='https://www.edx.org/'>edX</a>
            </h3>
            <p>
              edX was founded in 2012 by Harvard University and MIT to offer
              MOOC courses from 85 global partners. The site currently lists
              nearly 150 courses in computer science, including Intro to Python
              and Introduction to Management Information Systems (MIS): A
              Survival Guide.
            </p>
            <h3>
              <a href='https://groklearning.com/'>Grok Learning</a>
            </h3>
            <p>
              Students of all ages (from K-12 onward) pay $30 per course for
              Grok Learning’s introductory courses in Python programming,
              HTML/CSS, and image manipulation.
            </p>
            <h3>
              <a href='https://www.extension.harvard.edu/'>
                Harvard Extension Opening Learning Initiative
              </a>
            </h3>
            <p>
              Students considering a major in computer science can join a free
              online Intensive Introduction to Computer Science course covering
              topics in algorithms, data structures, software development,
              architecture, compilers, cryptography, and programming languages.
            </p>
            <h3>
              <a href='https://it-ebooks.info/'>IT eBooks</a>
            </h3>
            <p>
              Before plunking down a fortune on textbooks for a computer course,
              students should check out the titles at this site made available
              for free download. General and vendor specific guides are
              available.
            </p>
            <h3>
              <a href='https://www.apple.com/education/k12/'>
                iTunes University
              </a>
            </h3>
            <p>
              Apple’s online university offers courses for download or podcast
              streaming in technology and computer science. For example, users
              can stream Harvard University’s Computer Science 50: Introduction
              to Computer Science.
            </p>
            <h3>
              <a href='https://www.khanacademy.org/computing/computer-programming'>
                Khan Academy
              </a>
            </h3>
            <p>
              Free courses on computers and technology bring students up to
              speed at the Academy. Subjects include animation, HTML/CSS, SQL,
              advanced JavaScript, game programming and simulations.
            </p>
            <h3>
              <a href='https://www.learnerstv.com/Free-Computer-Science-video-lecture-courses.htm'>
                LearnersTV
              </a>
            </h3>
            <p>
              Watch video lectures or courses in totality for free at
              LearnersTV. Hundreds of lectures are available at a click on
              topics including systems analysis and design, data structures and
              algorithms, C++ programming, game development, multicore
              programming, Javascript, and object-oriented programming.
            </p>
            <h3>
              <a href='https://www.lynda.com/'>Lynda.com</a>
            </h3>
            <p>
              This popular for-profit online education company – now owned by
              LinkedIn – provides members with unlimited access to video
              tutorials and classes offered by experts in the technology fields.
              Computer science courses are available for developers, designers,
              web programmers, video production, and business. Free trial
              offered.
            </p>
            <h3>
              <a href='https://ocw.mit.edu/index.htm'>MIT OpenCourseware</a>
            </h3>
            <p>
              The OpenCourseware site shares materials from Massachusetts
              Institute of Technologies classes in computers and technology. A
              recent graduate-level offering was “Algorithmic Lower Bounds: Fun
              with Hardness Proofs”.
            </p>
            <h3>
              <a href='https://academy.oracle.com/en/training-workshops.html'>
                Oracle University
              </a>
            </h3>
            <p>
              Software giant Oracle provides self-paced courses for students and
              teachers in creating programs using basic Java programming.
              Students use Alice, a Java development environment created at
              Carnegie Mellon.
            </p>
            <h3>
              <a href='https://www.the-paper-trail.org/blog/advanced-computer-science-courses/'>
                The Paper Trail
              </a>
            </h3>
            <p>
              Students of computer systems, distributed algorithms and databases
              can draw from this listing of advanced online lectures and
              selected readings at Cornell, Princeton, Stanford, Harvard, MIT,
              and the University of Illinois. Visitors post links to other key
              courses.
            </p>
            <h3>
              <a href='https://www.studyblue.com/'>StudyBlue</a>
            </h3>
            <p>
              This online, crowd-sourced learning platform for students allows
              them to upload class materials and create digital flashcards for
              sharing among classroom peers across computers, tablets and
              phones. Resources include notes, tests and learning materials
              arranged by class topic.
            </p>
            <h3>
              <a href='https://tech.co/news/60-free-computer-science-college-courses-you-can-take-online-in-2015-2015-01'>
                Tech.co
              </a>
            </h3>
            <p>
              This tech site has listings of 60 free online computer science
              courses from institutions including UC Berkeley, Harvard,
              Stanford, Carnegie Mellon, Princeton, Penn Engineering and others.
              Topics include programming languages, algorithms, systems, and CS
              theory.
            </p>
            <h3>
              <a href='https://tickleapp.com/en-us/'>Tickle</a>
            </h3>
            <p>
              Students learn how to program drones, devices, robots, puzzles,
              games and connected toys using Tickle. The developer sponsors
              contests and offers free tutorials.
            </p>
            <h3>
              <a href='https://www.udacity.com/course/introduction-to-python--ud1110'>
                Udacity
              </a>
            </h3>
            <p>
              Founded by Stanford technologists, it offers nanodegree courses
              based on video lectures. Its free Intro to Computer Science course
              teaches students how to program in Python, to build their own
              search engines, and create digital social networks.
            </p>
            <h3>Website for Computer Science</h3>
            <ul>
              <li>Stanford Engineering Everywhere</li>
              <li>MIT OpenCourseWare</li>
              <li>GitHub</li>
              <li>W3Schools</li>
              <li>Codecademy</li>
            </ul>
            <p>
              Finding the right online resources can be critical to your success
              in the computer science field. Internet sites can provide valuable
              tools and educational opportunities that can allow you to acquire
              added skills and competencies that can prove useful in real-world
              employment situations. Here are five sites that offer real utility
              for computer science majors and aspiring programmers in the online
              environment.
            </p>
            <h3>
              <a href='https://see.stanford.edu/'>
                Stanford Engineering Everywhere
              </a>
            </h3>
            <p>
              Stanford Engineering Everywhere is a free resource designed to
              provide students across the U.S. with access to some of the
              courses and tools used by Stanford undergraduates to master the
              basics of computing, artificial intelligence and electrical
              engineering. These materials are also available to educators for
              use in classroom settings and are covered under a Creative Commons
              license that ensures they are freely accessible to anyone with a
              computer and an Internet connection. Available courses include
              programming methodology, abstractions and paradigms, machine
              learning, introduction to robotics, convex optimization and an
              introduction to linear dynamical systems.
            </p>
            <h3>
              <a href='https://github.com/'>GitHub</a>
            </h3>
            <p>
              One of the best online destinations for open source code examples,
              GitHub offers students access to an extensive community of
              programmers, developers and aspiring computer scientists along
              with an array of coding examples and completed projects. These
              resources can help students complete their own projects by
              providing examples of code used in comparable situations by
              professionals in the computing field. Members can access public
              repositories of code and projects or create their own private and
              shared repositories for a small monthly fee. These online
              platforms can provide a safe and stable environment for
              collaboration to make GitHub a must-have resource for professional
              programmers and first-time students alike.
            </p>
            <h3>
              <a href='https://www.w3schools.com/'>W3Schools</a>
            </h3>
            <p>
              For students interested in practical help for programming and
              coding languages, w3schools.com offers easy-to-understand examples
              and in-depth tutorials on AJAX, SQL, ASP, CSS, JavaScript and HTML
              markup code. This diverse range of educational materials ensures
              that students at all levels of proficiency can obtain the
              information needed to complete their projects and to achieve
              success in their chosen profession. The w3schools website offers
              intuitive navigation that allows advanced users to focus on their
              own particular areas of interest while ensuring that novices can
              quickly access the information they need to complete their design
              projects and achieve their short-term and long-term computing
              goals.
            </p>
            <h3>
              <a href='https://www.codecademy.com/catalog'>Codecademy</a>
            </h3>
            <p>
              One of the most innovative educational sites in the computer
              science field, Codecademy offers two tiers of support for students
              interested in learning to code on a professional level.
              Self-directed study and basic coursework is available for free
              through the website. Students who want more active guidance, a
              customized learning plan and help from professional academic
              advisors can upgrade to Codecademy Pro for a monthly fee. For
              newcomers to coding, however, the free coursework available
              through the basic Codecademy site can deliver a solid grounding in
              computing basics with minimal expense, allowing students to
              explore this field without making a major investment in time and
              money.
            </p>
          </div>
          <div className={styles.openResources}>
            <h2 className='sub-heading'>Best Open Access Resources</h2>
            <ul>
              <li>
                <a href='https://ndl.iitkgp.ac.in/'>National Digital Library</a>
              </li>
              <li>
                <a href='https://storage.googleapis.com/uniquecourses/online.html'>
                  SWAYAM Online Courses
                </a>
              </li>
              <li>
                <a href='https://nkn.gov.in/'>National Knowledge Network</a>
              </li>
              <li>
                <a href='https://finptel.ac.in'>NPTEL</a>
              </li>
              <li>
                <a href='https://infoport.inflibnet.ac.in/'>InfoPort</a>
              </li>
              <li>
                <a href='https://www.ted.com/playlists/182/talks_from_inspiring_teachers'>
                  Talks to Teacher
                </a>
              </li>
              <li>
                <a href='http://aview.in/'>A-VIEW</a>
              </li>
              <li>
                <a href='https://www.vlab.co.in/'>Virtual Labs</a>
              </li>
              <li>
                <a href='https://fossee.in/'>FOSSEE</a>
              </li>
              <li>
                <a href='https://spoken-tutorial.org/'>Spoken Tutorial</a>
              </li>
              <li>
                <a href='https://www.e-yantra.org/'>e-Yantra</a>
              </li>
              <li>
                <a href='https://www.it.iitb.ac.in/oscar/'>Oscar++</a>
              </li>
              <li>
                <a href='https://icar.org.in/content/e-kalpa'>E-Kalpa</a>
              </li>
              <li>
                <a href='http://ncert.nic.in/textbook/textbook.htm'>
                  NCERT Text Books
                </a>
              </li>
              <li>
                <a href='https://www.doabooks.org/'>
                  Directory of Open Access Books
                </a>
              </li>
              <li>
                <a href='https://doaj.org/'>
                  Directory of Open Access Journals
                </a>
              </li>
              <li>
                <a href='https://openknowledge.worldbank.org/'>
                  Open Knowledge Repository — World Bank
                </a>
              </li>
              <li>
                <a href='http://ugcmoocs.inflibnet.ac.in/ugcmoocs/moocs_courses.php'>
                  UG/PG MOOCs
                </a>
              </li>
              <li>
                <a href='https://epgp.inflibnet.ac.in/'>e-PG Pathshala</a>
              </li>
              <li>
                <a href='http://cec.nic.in/cec/'>
                  e-Content courseware in UG subjects
                </a>
              </li>
              <li>
                <a href='https://www.swayamprabha.gov.in'>SWAYAMPRABHA</a>
              </li>
              <li>
                <a href='https://ess.inflibnet.ac.in/'>e-Shodh Sindhu</a>
              </li>
              <li>
                <a href='https://vidwan.inflibnet.ac.in/'>Vidwan</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='https://www.nltr.org/'>SNLTR</a>
              </li>
              <li>
                <a href='https://academic.oup.com/journals/pages/open_access'>
                  Oxford Open
                </a>
              </li>
              <li>
                <a href='https://www.cambridge.org/core/what-we-publish/open-access'>
                  Cambridge University Press
                </a>
              </li>
              <li>
                <a href='https://www.sciencedirect.com/book/9781843342038/open-access'>
                  Science Direct Open Access Content
                </a>
              </li>
              <li>
                <a href='https://ilostat.ilo.org/'>ILOSTAT</a>
              </li>
              <li>
                <a href='https://projecteuclid.org/librarians/lib_oa'>
                  Project Euclid
                </a>
              </li>
              <li>
                <a href='https://www.aiddata.org/'>AidData</a>
              </li>
              <li>
                <a href='https://www.springeropen.com/journals'>
                  Springer Open Journals
                </a>
              </li>
              <li>
                <a href='https://www.tandfonline.com/openaccess'>
                  Taylor & Francis Open Access
                </a>
              </li>
              <li>
                <a href='https://oatd.org/'>
                  Open Access Thesis & Dissertations
                </a>
              </li>
              <li>
                <a href='http://www.commonlii.org/in/'>
                  Legal Information-commonlii
                </a>
              </li>
              <li>
                <a href='http://www.oapen.org/home'>The OAPEN Foundation</a>
              </li>
              <li>
                <a href='https://www.ncbi.nlm.nih.gov/pmc/'>
                  PubMed Central PMC
                </a>
              </li>
              <li>
                <a href='https://dev.gutenberg.org/'>Project Gutenberg</a>
              </li>
              <li>
                <a href='https://www.highwirepress.com/'>High Wire</a>
              </li>
              <li>
                <a href='http://agris.fao.org/agris-search/index.do'>AGRIS</a>
              </li>
              <li>
                <a href='https://libguides.southernct.edu/openaccess'>
                  Southern Connecticut StateUniversity
                </a>
              </li>
              <li>
                <a href='https://librivox.org/'>LibriVox — Audio Books</a>
              </li>
              <li>
                <a href='https://authorservices.wiley.com/open-research/open-access/browse-journals.html'>
                  Wiley Open Access
                </a>
              </li>
              <li>
                <a href='http://www.capabilitydevelopment.org'>
                  Training and Courses by Tata Steel
                </a>
              </li>
              <li>
                <a href='https://doaj.org/'>
                  Directory of Open Access Journals (DOAJ)
                </a>
              </li>
              <li>
                <a href='https://shodhganga.inflibnet.ac.in/'>
                  Shodhganga-a reservoir of Indian theses
                </a>
              </li>
              <li>
                <a href='http://liiofindia.org/'>
                  Legal Information Institute of India
                </a>
              </li>
            </ul>
            <div className='clear'></div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FAQToolsPage
