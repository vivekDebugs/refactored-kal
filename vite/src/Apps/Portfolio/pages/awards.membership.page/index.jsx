import styles from './awards.membership.page.style.module.css'
import BEST_PAPER_AWARD_IMAGE from '../../assets/random3.jpg'
import BEST_PRESENTOR_AWARD_IMAGE from '../../assets/random5.jpg'

const AwardsAndMembershipPage = () => {
  return (
    <>
      <h1 class='heading'>Awards and Membership</h1>
      <section>
        <h3 class='sub-heading'>Honours</h3>

        <ul>
          <li>
            <b>Best paper award</b> in IEEE International Conference on Circuit,
            Power and Computing Technologies (IEEE ICCPCT 2016), from 18-19
            March 2016 at Kumarcoil, Chennai, India, and paper titled as
            <i>
              “QoS-based Intrusion Detection for Sinkhole attack in Wireless
              Sensor Network”
            </i>
            .
          </li>
          <li>
            1st International conference on Innovation in computer science,
            Electrical and Electronics Engineering (ICICEE 2020), CIT-Tumkur on
            3rd July 2020,
            <i>“Automation using Brain signal and Machine Interface”</i>
            <b>Best paper award</b>.
          </li>
          <li>
            <b>Excellence presentation skills award</b> as a project Engineer in
            Ericson project, Wipro Technologies.
          </li>
          <li>
            <b>Second topper</b>, MTech, BIT college of Engineering, Bangalore,
            VTU.
          </li>
          <li>
            <b>Young Fellow Award</b> in International Award Conference on
            Multi-Disciplinary Research and Application-2019
          </li>
          <li>
            High level Presentation in Wipro Technologies, Telecom Domain
            (awarded as one of the best top 5 presenters among the
            organization).
          </li>
        </ul>
      </section>

      <div class='random-image show-on-scroll'>
        <img src={BEST_PAPER_AWARD_IMAGE} />
        <h4>Best Paper Award</h4>
      </div>

      <section>
        <h3 class='sub-heading'>Professional Affiliation/ membership</h3>

        <ul>
          <li>IEEE Professional Member</li>
          <li>Member of International Association of Engineers (IAENG)</li>
          <li>Member of Institute of Scholars (InSc).</li>
          <li>
            Editorial Board Member of Journal of Electronic Research and
            Application (JERA).
          </li>
          <li>
            Peer Reviewer Participation in 37.3 issue of Ingenieria e
            investigacion Journal.
          </li>
          <li>IFERP Board Member.</li>
          <li>
            World Association for Scientific Research and Technical
            Innovation(WASRTI)
          </li>
          <li>IRED Professional Member.</li>
          <li>IARDO Professional Member.</li>
          <li>TEI Springer journal Member.</li>
        </ul>
      </section>

      <div class='random-image show-on-scroll'>
        <img src={BEST_PRESENTOR_AWARD_IMAGE} />
        <h4>Best Presentor</h4>
      </div>
    </>
  )
}

export default AwardsAndMembershipPage
