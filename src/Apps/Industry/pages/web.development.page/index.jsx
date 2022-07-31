import styles from './web.development.page.style.module.css'
import WEB_DEVELOPMENT from '../../assets/web-development-image.jpg'
import WEB_DEVELOPMENT_MEDIUM from '../../assets/web-development-image-medium.jpg'

const WebDevelopmentPage = () => {
  return (
    <>
      <div className='white-space'></div>

      <div className='services-content-wrapper'>
        <h1 className='heading'>Website Development</h1>

        <div className='content-img show-on-scroll'>
          <picture>
            <source
              media='(min-width: 768px)'
              srcSet={WEB_DEVELOPMENT_MEDIUM}
            />
            <img src={WEB_DEVELOPMENT} alt='student' />
          </picture>
        </div>

        <section className='content-services'>
          <p>
            Our website developers provide expert web application development
            and web design services to our clients. A&amp;RD offers a variety of
            website design and development services, creating mobile web
            development solutions and responsive website designs using the
            latest and proven web technologies. With up to 85% of consumers
            visiting company’s or service provider’s website before making a
            purchase, more and more consumers make decisions based on their
            online experience: the appearance, usability and accessibility of
            your website is more important than ever, especially in an
            increasingly competitive market.
          </p>
          <h2 className='sub-heading'>Our Web development services</h2>
          <p>
            We Offer Comprehensive And End-To-End Solutions For Your Web
            Development Projects. Our 100% Accurately Programmed Web
            Applications Fit Perfectly To Your Business Requirements.
          </p>
          <h3 className='h-bold'>Project Scope &amp; Planning</h3>
          <p>
            We review your requirement and then decide which technology and
            framework should be used for your website.
          </p>
          <h3 className='h-bold'>Design &amp; Coding</h3>
          <p>
            The coding is efficient and non-redundant which matches the client
            brief and avoid unnecessary code inclusions.
          </p>
          <h3 className='h-bold'>Testing &amp; Launch</h3>
          <p>
            We aim to provide a bug-free website and thus it is tested on
            various platforms and devices before we deliver it.
          </p>
          <h3 className='h-bold'>Maintenance</h3>
          <p>
            After the completion of our project, we provide attentive
            maintenance and support to the client to ensure seamless
            implementation
          </p>
        </section>
      </div>
    </>
  )
}

export default WebDevelopmentPage
