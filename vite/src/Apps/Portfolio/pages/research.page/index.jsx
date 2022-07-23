import styles from './research.page.style.module.css'
import abstractImgOne from '../../assets/abstract-1.png'
import abstractImgTwo from '../../assets/abstract-2.png'
import abstractImgThree from '../../assets/abstract-3.png'
import abstractImgFour from '../../assets/abstract-4.png'

const abstractContent = [
  {
    id: 'abstract-one',
    title: 'Wireless Sensors',
    content:
      'The network of nodes with sensing technology and wireless capability is termed as Wireless Sensor Network (WSN). WSN has high potential to adapt to the changes of how we live. Its budding technology makes the motes communicate with each other efficiently. The sensor nodes in WSN are referred as motes and they form the main building blocks for creating a network. The motes need to work efficiently and thus we present performance metrics that includes power consumption, size, cost, memory management, mote sensitivity, and OS for motes configuration. Certain challenges and constraints are designed for each mote in terms of low cost, limited communicational capabilities and low energy requirements. Many applications of WSN use different types of motes such as TinyNode, IRIS and Sun SPOT which can improve the performance of the network.',
    href: '"https://www.sciencedirect.com/science/article/pii/S1877050917327904"',
    image: abstractImgOne,
  },
  {
    id: 'abstract-two',
    title: 'Intrusion detection',
    content:
      'Wireless Sensor networks (WSN) is basically comprised of sensors that are spatially distributed with selfruling capability, which monitors physical or environmental conditions such as, pressure, temperature, motion, sound and so on. Sensors also passes all the related information throughout the network. As the number of nodes and size of the network increases, there will be rapid increase in internet traffic. In WSN, security is the major issue and needs to a system that can provide security. Intrusion detection system is the system which plays a vital role in security of a system. One of the major challenges of WSN is to provide consistent Quality of Service (QoS) such as reliability, congestion control, energy efficiency and end-to-end delay, by applying secured routing protocols along with detection of an intruder so that QoS of WSN does not get affected. In our research work, we have discussed different routing protocols that are QoS based, to improve overall performance of the network.',
    href: 'https://ieeexplore.ieee.org/abstract/document/7530341',
    image: abstractImgTwo,
  },
  {
    id: 'abstract-three',
    title: 'Review work',
    content:
      'Wireless Sensor networks (WSN) is basically comprised of sensors that are spatially distributed with selfruling capability, which monitors physical or environmental conditions such as, pressure, temperature, motion, sound and so on. Sensors also passes all the related information throughout the network. As the number of nodes and size of the network increases, there will be rapid increase in internet traffic. In WSN, security is the major issue and needs to a system that can provide security. Intrusion detection system is the system which plays a vital role in security of a system. One of the major challenges of WSN is to provide consistent Quality of Service (QoS) such as reliability, congestion control, energy efficiency and end-to-end delay, by applying secured routing protocols along with detection of an intruder so that QoS of WSN does not get affected. In our research work, we have discussed different routing protocols that are QoS based, to improve overall performance of the network.',
    href: 'https://www.sciencedirect.com/science/article/pii/S1877050920307493',
    image: abstractImgThree,
  },
  {
    id: 'abstract-four',
    title: 'Machine Learning',
    content:
      'Network with large number of sensor nodes distributed spatially is termed as Wireless Sensor Network (WSN). The tiny devices called as sensor nodes are cheap, consume less power, and the capabilities of computation is limited. The most challenging issue for WSN is protecting the network from misbehavior of intruders or adversaries. One of the major techniques used to prevent from any type of attack in the sensor network is artificial intelligence system (AIS). Intrusion Detection System (IDS) is considered to be the second line of defense, as sensor nodes are first defense line. WSNs are highly vulnerable to intrusions and different types of attacks. In most critical applications of WSN, the human intervention or some physical devices are not sufficient for protecting the network from strong adversaries and attacks. Thus, artificial intelligence techniques are used for intrusion detection and prevention of sensor networks.',
    href: 'https://link.springer.com/chapter/10.1007/978-981-10-3174-8_69',
    image: abstractImgFour,
  },
]

const ResearchPage = () => {
  return (
    <>
      <h1 className='heading'>Research</h1>

      <section>
        <h3 className='sub-heading'>Research Interests</h3>

        <ul>
          <li>
            Research work carried in field of Wireless sensor Network and
            Internet of Things.
          </li>
          <li>Access control and Intrusion prevention in sensor networks.</li>
          <li>Verticalized Healthcare security system.</li>
          <li>
            Machine learning and programming hardware interface with machine
            learning.
          </li>
          <li>Security in Wireless Sensor Networks and Internet of Things.</li>
        </ul>
      </section>

      <section>
        <h3 className='sub-heading'>
          Research Publications(Under accepted/under review)
        </h3>

        <ul>
          <li>
            <b>“Automation using Brain signals and Machine Interface”</b> 1st
            International Conference on Innovation in Computer Science,
            Electrical and Electronics Engineering,{' '}
            <a href='#'>Springer Nature Applied Science journal</a>.
          </li>
          <li>
            2019 <b>“Data communication using single board computers”</b>{' '}
            presented in SCI 2018-19 INDIA 2019 conference and accepted for
            publication in <a href='#'>Springer LNNS series</a>.
          </li>
          <li>
            <b>
              “Detection Of Breast Cancer Using Machine Learning Algorithms”
            </b>{' '}
            Advance Machine Learning Approaches In Cancer Prognosis: Challenges
            And Applications In{' '}
            <a href='https://www.springer.com/series/8578' target='_blank'>
              Intelligent Systems Reference Library
            </a>{' '}
            Indexed by Web Of Science, Scopus, DBLP And Springer Link
          </li>
          <li>
            <b>
              “Brain Tumor Detection in an MRI Image Using Machine Learning
              Various Methods”
            </b>{' '}
            Advance Machine Learning Approaches In Cancer Prognosis: Challenges
            And Applications In{' '}
            <a href='https://www.springer.com/series/8578' target='_blank'>
              Intelligent Systems Reference Library
            </a>{' '}
            Indexed By Isi Web Of Science, Scopus, DBLP And Springer Link
          </li>
          <li>
            <b>
              “Design and Simulation of 5G Microstrip Patch Antenna with Phase
              Shifter and I- Shaped Array”
            </b>{' '}
            “Microstrip Antenna Design for Wireless Application” with CRC Press,{' '}
            <a href='#'>Taylor and Francis Group.</a>.
          </li>
          <li>
            <b>
              “Parameter Enhancement of Microstrip Patch antenna using Novel
              Defected Ground Structures”
            </b>
            <a href='#'>Springer Nature Applied Science journal</a> .
          </li>
          <li>
            <b>
              “Design and Development of MIMO Antennas for Smart 5G Devices”
            </b>{' '}
            International Journal of Information Technology,{' '}
            <a href='#'>BJIT Springer Nature</a>.
          </li>
        </ul>
      </section>

      <section>
        <h3 className='sub-heading'>WSN Based Projects</h3>
        {abstractContent.map(abstract => (
          <div
            key={abstract.id}
            id={abstract.id}
            className={styles.abstractContent}
          >
            <h4>{abstract.title}</h4>
            <img src={abstract.image} />
            <p>
              {abstract.content}
              <a href={abstract.href} target='_blank'>
                Continue
              </a>
            </p>
          </div>
        ))}
      </section>

      <section>
        <h3 className='sub-heading'>Research Projects</h3>

        <ul>
          <li>
            <h3>BE Project</h3>
            Server Load Balancing
            <p>
              Tools: Eclipse
              <br />
              Programming Language: .Net
              <br />
              Description: The system is designed where many clients are
              connected to a single server and the server is loaded with
              multiple threads and processes. So, the main aim of the project is
              to obtain efficient load balancing by the server such that, the
              performance of the system is not degraded.
            </p>
          </li>

          <li>
            <h3>MTech Dissertation</h3>
            Security and Intrusion Detection in HealthCare Application of
            Wireless Sensor Networks.
          </li>

          <li>
            Maintenance of Troubleshoot Report (TR),Client: Erricson, in
            Development team, Wipro Technologies, Bangalore.
          </li>
        </ul>
      </section>
    </>
  )
}

export default ResearchPage
