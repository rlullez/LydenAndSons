import styles from './Contacts.module.css'
import { BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoDeviceMobile, GoHome, GoMail } from 'react-icons/go'

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contacts</h2>
            <h3>Contact Garry Lyden</h3>
            
            <div className={styles.icones}>
                
                <a href='tel:015157722' target='_blank' rel='noopener noreferrer'>
                    <GoHome className={styles.icone} />
                </a>

                <a href='tel:0860402573' target='_blank' rel='noopener noreferrer'>
                    <GoDeviceMobile className={styles.icone} />
                </a>

                <a href='mailto:garry@lydenandsons.ie' target='_blank' rel='noopener noreferrer'>
                    <GoMail className={styles.icone} />
                </a>

                <a href='https://www.linkedin.com/in/garry-lyden-56719470' target='_blank' rel='noopener noreferrer'>
                    <BsInstagram className={styles.icone} />
                </a>

                <a href='https://www.linkedin.com/in/garry-lyden-56719470' target='_blank' rel='noopener noreferrer'>
                    <BsYoutube className={styles.icone} />
                </a>

                <a href='https://www.linkedin.com/in/garry-lyden-56719470' target='_blank' rel='noopener noreferrer'>
                    <BsLinkedin className={styles.icone} />
                </a>

            </div>

        </section>
    )
}

export default Contatos
