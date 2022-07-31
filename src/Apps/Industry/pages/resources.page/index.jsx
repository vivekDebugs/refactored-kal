import styles from './resources.page.style.module.css'

const ResourcesPage = () => {
  return (
    <>
      <div className='white-space'></div>

      <div className={styles.resourcesWrapper}>
        <h1 className='heading'>Resources</h1>
        <p>
          One of the most important things to learn something effectively is to
          have the right resources and it is not an exception when it comes to
          coding. Now many of you who read this might be in the process of
          learning your first programming language, or maybe some of you might
          have already been coding for a few years. Whether you are just
          starting out your journey to the CS career path or an intermediate app
          developer who have built a lot of projects before, you will find
          resources in this article that will act as supplements to your
          learning and be of use to you. This article will locate the best free
          learning resources for different CS disciplines, all at the palm of
          your hands.
        </p>
        <p>
          Some of these resources provided are beginner-friendly while others
          might require some intermediate math or coding background. So feel
          free to surf around and decide which ones are useful to you. Now
          without further ado, let’s begin ;)
        </p>

        <h3>Intro to Computer Science</h3>
        <ul>
          <li>
            <a href='https://www.youtube.com/playlist?list=PLhQjrBD2T382eX9-tF75Wa4lmlC7sxNDH'>
              Harvard’s CS50 class
            </a>
            : best high-quality online course for getting started to learning
            Computer Science. It explains the most fundamental topics in
            Computer Science: Computational Thinking, Arrays, Memory, Data
            Structures, Web Programming, and Databases. Recommended to check
            this out if you are used to learning content by videos.
          </li>
        </ul>

        <h3>Any programming language, library, or tool you need</h3>
        <ul>
          <li>
            <a href='https://www.tutorialspoint.com/index.htm'>
              TutorialsPoint
            </a>
            : aka the reference book/dictionary for anything that you can think
            of. It’s the best online reference resource that gives you quick
            access to the most useful information about the topic. For example,
            when you are learning the basics of Python or just switching to this
            new language from another, this resource lists out the variable
            declarations, common data structures, built-in functions prototypes,
            etc. used in Python. Each topic is structured in a very organized
            and logical way that is easy to follow and understand. It is a
            must-have pocketbook for each developer to own.
          </li>
          <li>
            <a href='https://www.tutorialspoint.com/python/python_lists.htm'>
              TutorialsPoint’s Python Article
            </a>
          </li>
        </ul>

        <h3>Web Development</h3>
        <ul>
          <li>
            <a href='https://www.freecodecamp.org/'>FreeCodeCamp</a> : this is
            hands-down the best learning resource for getting started to web
            development. It teaches you everything about web starting from the
            beginning — from front- end HTML, CSS to Javascript to back-end
            NodeJS to databases to more advanced topics. It is the most
            comprehensive, open-source resource out there with a huge community
            of support. So if you want to learn any particular language/library
            about web development, just jump to the section that you want to
            learn and you will get tons of guiding tutorials and examples for
            you to follow.
          </li>
          <li>
            <a href='https://developer.mozilla.org/en-US/'>MDN Web Docs</a>:
            this is the official documentation website for modern web standards
            that you can refer to when building your own website of any kind. It
            gives you comprehensive tutorials to HTML, CSS, Javascript,
            Graphics, HTTP, APIs, etc. I recommend you to check out their
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript'>
              Javascript
            </a>
             introductory article to get brushed up to its syntax quickly if you
            are switching over to Javascript from another language or just
            reviewing how Javascript works fundamentally.
          </li>
          <li>
            <a href='https://www.w3schools.com/whatis/'>W3Schools</a>: Similar
            to TutorialsPoint, W3Schools explains web concepts in a very
            organized and structural way, making it extremely easy for beginners
            to understand and follow. I suggest beginners who are just getting
            started into front-end development to check out this resource and
            follow its tutorials. It offers online code compiler next to each of
            its examples, so make sure to take advantage of it when trying out
            your code!
          </li>
          <li>
            <a href='https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-images-to-your-website'>
              FreeCodeCamp Learning Editor
            </a>
          </li>
        </ul>

        <h3>Mobile App Development</h3>
        <ul>
          <li>
            <a href='https://www.youtube.com/channel/UCWr0mx597DnSGLFk1WfvSkQ/videos'>
              Kalle Hallden Youtube
            </a>
            : This channel teaches you how to build mobile apps quickly using
            Flutter, a new development framework for developing cross-platform
            apps by Google. If you want to learn how Flutter works from
            practical coding projects, this is the right video channel for you!
            Kalle often shows you how to make popular app clones like Instagram
            and Netflix to keep you motivated and also shows a lot of his own
            projects too.
          </li>
        </ul>

        <h3>General Machine Learning and AI Applications</h3>
        <ul>
          <li>
            <a href='https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A'>
              Siraj Raval Youtube
            </a>
            : most educational and entertaining youtube channel for learning
            anything about AI. Siraj Raval’s interesting humor and educational
            videos teach you machine learning and AI in a fun way. He makes
            videos about practical AI projects and walks you through the entire
            process of implementing them with the Github code linked in his
            videos. He also teaches about mathematical theories behind the
            particular AI he is implementing so you can get a big overview of
            the technical motivation behind the technologies. Recently he is
            also working on his
            <a href='https://www.youtube.com/playlist?list=PL2-dafEMk2A4n3aP_rzgqA8lVGknkSN2p'>
              “build a startup”
            </a>
            series which I am a big fan of, where he guides you in creating an
            AI app with commercial capabilities. If you are interested in
            machine learning, you must check out his channel!
          </li>
          <li>
            <a href='https://www.youtube.com/user/keeroyz'>
              Two Minute Papers Youtube
            </a>
            : the name speaks for itself — it digests technical pieces of
            knowledge in research papers into a few minutes of simple
            explanations and clear visuals, making it easy for people to
            understand. Although I wouldn’t skip reading research papers for
            this, this youtube channel gives a good insight into the interesting
            topics the current machine learning academia is focusing on.
          </li>
          <li>
            <a href='https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A/videos'>
              Siraj Raval Youtube Channel
            </a>
          </li>
        </ul>

        <h3>Deep Learning (Computer Vision &amp; NLP)</h3>
        <ul>
          <li>
            <a href='http://cs231n.stanford.edu/'>Stanford’s CS 231N</a> :
            Convolutional Neural Networks for Visual Recognition course is one
            of the hottest popular online courses for deep learning now. It
            teaches about the fundamentals of deep learning and its applications
            to computer vision. The syllabus covers from the basic image
            classification, loss functions, convolutional neural networks, and
            training to more advanced topics like recurrent neural networks,
            generative models, and deep reinforcement learning. Its lecture
            videos and assignments are released publicly and solutions to their
            assignments can be found in a lot of Github repositories. Watch the
            video lectures
            <a href='https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv'>
              here
            </a>
            .
          </li>
          <li>
            <a href='http://web.stanford.edu/class/cs224n/'>
              Stanford’s CS 224N
            </a>
            : Similar to CS231N, this is a deep learning course by Stanford,
            focusing on Natural Language Processing. It has all the benefits
            that CS 231N has. It covers concepts from word embeddings, neural
            networks, backpropagation, dependency parsing, language models,
            RNNs, sequence-to-sequence models with attention,
            question-answering, and many more advanced topics beyond. Go to the 
            <a href='https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z'>
              youtube playlist
            </a>
             to find the lecture videos.
          </li>
          <li>
            <a href='https://www.fast.ai/'>Fast.ai</a> : Fast.ai teaches deep
            learning using their fast.ai library, which adopts the modern best
            practices from state-of-the-art research papers. Their library
            allows for easy implementation for neural networks and fast training
            for maximizing their accuracies. Their video courses take you
            step-by-step into implementing top-performing neural networks. The
            best thing about Fast.ai is, it does not assume that you have prior
            knowledge of deep learning or university math level experience; so
            if you are a beginner to the world of AI, there is no need to worry.
            It focuses on building practical AI instead of mathematical theories
            going behind on the scenes, so this is extremely useful for you if
            you are seeking to build your next big AI project.
          </li>
          <li>
            <a href='https://course.fast.ai/videos/?lesson=1'>
              Fast.ai’s Introductory Course to Deep Learning
            </a>
          </li>
        </ul>

        <h3>Maths</h3>
        <ul>
          <li>
            <a href='https://ocw.mit.edu/index.htm'>MIT OpenCourseWare</a> : The
            best free online courses to learn intermediate and advanced math
            topics related to CS. Highly recommended as it comes from the
            world’s top engineering university in the world. Here go some of the
            most useful lectures to CS:
            <a href='https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/index.htm'>
              Multivariable Calculus
            </a>
             , 
            <a href='https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/index.htm'>
              Linear Algebra
            </a>
            , 
            <a href='https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/index.htm'>
              Introduction to Probability and Statistics
            </a>
            , 
            <a href='https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/'>
              Mathematics for Computer Science
            </a>
             and
            <a href='https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/index.htm'>
              Introduction to Algorithms
            </a>
            .
          </li>
          <li>
            <a href='https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw'>
              3Blue1Brown Youtube
            </a>
            : One of the most famous youtube channels about different areas in
            mathematics. Highly recommended to check it out since it teaches the
            concepts extremely well with vivid animation.
          </li>
        </ul>

        <h3>Algorithms</h3>
        <ul>
          <li>
            <a href='https://www.geeksforgeeks.org/'>GeeksforGeeks</a> : most
            comprehensive resource that gives descriptions on data structures
            and algorithms, as well as common problems and solutions. Must check
            out their website if you are planning to apply for internships
            because there will certainly be technical interviews that everybody
            needs to go through!
          </li>
          <li>
            <a href='https://visualgo.net/en'>VisuAlgo</a> : a website that
            gives accurate and colorful visualizations of how different
            algorithms work. Highly recommended to check out if you are studying
            algorithms! It definitely helps you understand how certain
            algorithms and data structures work a lot better.
          </li>
        </ul>

        <h3>
          General Software Engineering Jobs/Internships/Interviews/Tips/Life
        </h3>
        <ul>
          <li>
            <a href='https://www.youtube.com/channel/UCV0qA-eDDICsRR9rPcnG7tw'>
              Joma Tech Youtube
            </a>
            : With Joma’s sense of humor, you will never be able to forget how
            fun and interesting coding can be. He mainly talks about how to land
            good software engineering jobs (mainly the big tech companies),
            enhancing your resumes, and nailing your coding interviews.
            Occasionally he would also invite guest engineers, of which most of
            them work in Silicon Valley, to give their opinions on software
            engineering and coding tips. If software is the thing for you, make
            sure to spare some time to watch his videos.
          </li>
          <li>
            <a href='https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw'>
              TechLead Youtube
            </a>
            : Ex-Google YouTuber teaches you how to become successful and rich
            by sharing his coding practices, coding life advice, and career in
            general. I am sure everybody working in the tech industry would find
            his videos useful and relevant to their corporate lives.
          </li>
        </ul>

        <h3>Other MOOC Platforms worth Checking Out</h3>
        <ul>
          <li>
            <a href='https://www.coursera.org/'>Coursera</a> : Largest MOOC
            platform with online courses created by world top universities. Most
            courses contain comprehensive content that you will normally expect
            from a university class. It even includes assignments that you can
            try and complete yourself to check if you understand the material.
            One of the hottest courses on Coursera is 
            <a href='https://www.coursera.org/learn/machine-learning'>
              Machine Learning
            </a>
             which is started by Andrew Ng, check it out if you are interested!
          </li>
          <li>
            <a href='https://www.udemy.com/'>Udemy</a> and
            <a href='https://www.udacity.com/'>Udacity</a> : Online courses
            provided by industry professionals. Free videos are normally more
            limited to beginner-level content, so if you are just starting out
            in, let’s say, 
            <a href='https://www.udacity.com/course/introduction-to-python--ud1110?irclickid=Tv4SAMSGKxyOUPVwUx0Mo3QRUkiXv-0TWU5axc0&irgwc=1&utm_source=affiliate&utm_medium=ads_n&aff=2381396&type='>
              Python
            </a>
             or 
            <a href='https://www.udacity.com/course/intro-to-machine-learning--ud120?irclickid=Tv4SAMSGKxyOUPVwUx0Mo3QRUkiXv-2zWU5axc0&irgwc=1&utm_source=affiliate&utm_medium=ads_n&aff=2381396&type='>
              Machine Learning
            </a>
            , there are good courses for it.
          </li>
        </ul>
      </div>
    </>
  )
}

export default ResourcesPage
