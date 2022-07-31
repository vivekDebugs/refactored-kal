import styles from './resources.page.style.module.css'

const ResourcesPage = () => {
  return (
    <>
      <h1 className='heading'>Resources</h1>

      <section className={styles.section}>
        <div>
          <iframe src='https://drive.google.com/file/d/1lelzKp7rd9V4On1yufyl4CVdAvwmRQ15/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1yqNZKBOp0BLLzhaHOxoUfCcFNe_ouf6n/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1HUaCNDVd1G5YeWwy1S3A2d7i8fU_IiBC/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1SU2urn_ntLgcNE3CfDbhBKc8YoNcKf6J/preview'></iframe>
        </div>

        <div>
          <iframe src='https://drive.google.com/file/d/1PyDARY1NBzSzD3YB2IfRsC1PmK9oh5Ie/preview'></iframe>
        </div>
      </section>
    </>
  )
}

export default ResourcesPage
